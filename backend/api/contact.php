<?php
// ============================================================
// Kumbakonam Cafe — Contact Form Handler (PHP + PHPMailer)
// Upload to: public_html/api/contact.php
// ============================================================

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/../../vendor/autoload.php'; // PHPMailer via Composer

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// ─── CORS Headers ────────────────────────────────────────────
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ─── Only accept POST ────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// ─── Parse & Sanitize Input ──────────────────────────────────
$raw = json_decode(file_get_contents('php://input'), true);

$name        = trim(htmlspecialchars($raw['name']        ?? '', ENT_QUOTES, 'UTF-8'));
$phone       = trim(htmlspecialchars($raw['phone']       ?? '', ENT_QUOTES, 'UTF-8'));
$serviceType = trim(htmlspecialchars($raw['serviceType'] ?? 'General Enquiry', ENT_QUOTES, 'UTF-8'));
$message     = trim(htmlspecialchars($raw['message']     ?? '', ENT_QUOTES, 'UTF-8'));

// ─── Validation ──────────────────────────────────────────────
$errors = [];
if (empty($name))    $errors[] = 'Name is required.';
if (empty($phone))   $errors[] = 'Phone number is required.';
if (empty($message)) $errors[] = 'Message is required.';
if (!preg_match('/^[\d\s\+\-\(\)]{7,20}$/', $phone)) {
    $errors[] = 'Invalid phone number format.';
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// ─── Save to MySQL Database ───────────────────────────────────
$saved = false;
try {
    $dsn = sprintf(
        'mysql:host=%s;dbname=%s;charset=%s',
        DB_HOST, DB_NAME, DB_CHARSET
    );
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);

    $stmt = $pdo->prepare('
        INSERT INTO contact_submissions 
          (name, phone, service_type, message, ip_address)
        VALUES 
          (:name, :phone, :service_type, :message, :ip)
    ');
    $stmt->execute([
        ':name'         => $name,
        ':phone'        => $phone,
        ':service_type' => $serviceType,
        ':message'      => $message,
        ':ip'           => $_SERVER['REMOTE_ADDR'] ?? null,
    ]);
    $saved = true;
} catch (Exception $e) {
    // Log but don't fail — still try to send email
    error_log('[KCafe Contact] DB Error: ' . $e->getMessage());
}

// ─── Send Email via PHPMailer ─────────────────────────────────
$emailSent = false;
try {
    $mail = new PHPMailer(true);

    // SMTP config
    $mail->isSMTP();
    $mail->Host       = MAIL_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = MAIL_USERNAME;
    $mail->Password   = MAIL_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = MAIL_PORT;
    $mail->CharSet    = 'UTF-8';

    // Sender
    $mail->setFrom(MAIL_FROM_EMAIL, MAIL_FROM_NAME);

    // Recipients
    foreach (NOTIFY_EMAILS as $notifyEmail) {
        $mail->addAddress($notifyEmail);
    }

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "[Kumbakonam Cafe] New $serviceType from $name";
    $mail->Body    = buildEmailHtml($name, $phone, $serviceType, $message);
    $mail->AltBody = buildEmailPlainText($name, $phone, $serviceType, $message);

    $mail->send();
    $emailSent = true;

    // Update email_sent flag in DB
    if ($saved && isset($pdo)) {
        $pdo->exec("UPDATE contact_submissions SET email_sent = 1 
                    WHERE id = (SELECT MAX(id) FROM contact_submissions)");
    }
} catch (Exception $e) {
    error_log('[KCafe Contact] Mailer Error: ' . $mail->ErrorInfo);
}

// ─── Response ─────────────────────────────────────────────────
if ($saved || $emailSent) {
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! We will get back to you soon.',
        'saved'   => $saved,
        'emailed' => $emailSent,
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Something went wrong. Please call us directly at 050 171 5991.',
    ]);
}

// ─── Email Template Helpers ───────────────────────────────────
function buildEmailHtml(string $name, string $phone, string $service, string $message): string {
    $date = date('d M Y, H:i');
    return <<<HTML
    <!DOCTYPE html>
    <html>
    <head><meta charset="UTF-8"></head>
    <body style="font-family: Arial, sans-serif; background:#f5f5f5; margin:0; padding:20px;">
      <div style="max-width:600px; margin:auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08);">
        <div style="background:#1e9ab0; padding:32px; text-align:center;">
          <h1 style="color:#fff628; margin:0; font-size:28px; letter-spacing:2px;">KUMBAKONAM CAFE</h1>
          <p style="color:#ffffff; margin:8px 0 0; font-size:13px; letter-spacing:3px;">NEW CONTACT FORM SUBMISSION</p>
        </div>
        <div style="padding:32px;">
          <table style="width:100%; border-collapse:collapse;">
            <tr><td style="padding:12px 0; border-bottom:1px solid #f0f0f0; color:#999; font-size:11px; text-transform:uppercase; letter-spacing:2px; width:140px;">Service Type</td>
                <td style="padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:bold; color:#1e9ab0;">$service</td></tr>
            <tr><td style="padding:12px 0; border-bottom:1px solid #f0f0f0; color:#999; font-size:11px; text-transform:uppercase; letter-spacing:2px;">Name</td>
                <td style="padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:bold;">$name</td></tr>
            <tr><td style="padding:12px 0; border-bottom:1px solid #f0f0f0; color:#999; font-size:11px; text-transform:uppercase; letter-spacing:2px;">Phone</td>
                <td style="padding:12px 0; border-bottom:1px solid #f0f0f0; font-weight:bold;"><a href="tel:$phone" style="color:#1e9ab0;">$phone</a></td></tr>
            <tr><td style="padding:12px 0; color:#999; font-size:11px; text-transform:uppercase; letter-spacing:2px; vertical-align:top;">Message</td>
                <td style="padding:12px 0; line-height:1.6;">$message</td></tr>
          </table>
          <p style="margin:24px 0 0; font-size:12px; color:#bbb;">Submitted on $date</p>
        </div>
      </div>
    </body>
    </html>
    HTML;
}

function buildEmailPlainText(string $name, string $phone, string $service, string $message): string {
    return "New contact submission — Kumbakonam Cafe\n\n"
         . "Service: $service\n"
         . "Name: $name\n"
         . "Phone: $phone\n"
         . "Message: $message\n\n"
         . "Sent: " . date('d M Y H:i');
}
