<?php
/**
 * Kumbakonam Cafe - Database & Mail Configuration
 * 
 * Replace the values below with your actual Hostinger credentials.
 */

// --- Database Settings ---
define('DB_HOST', 'localhost');
define('DB_NAME', 'YOUR_DATABASE_NAME');       // e.g. u123456789_kcafe
define('DB_USER', 'YOUR_DATABASE_USER');       // e.g. u123456789_kcafe_user
define('DB_PASS', 'YOUR_DATABASE_PASSWORD');   // your secure password

// --- Mail Settings (PHPMailer) ---
define('MAIL_HOST', 'smtp.hostinger.com');
define('MAIL_USERNAME', 'info@yourdomain.com'); // your Hostinger email
define('MAIL_PASSWORD', 'YourEmailPassword');
define('MAIL_PORT', 465); // 465 for SSL, 587 for TLS

// --- Notification Settings ---
define('NOTIFY_EMAILS', [
    'kcafe.uae@gmail.com', 
    'info@yourdomain.com'
]);

// --- Security ---
define('ALLOWED_ORIGIN', 'https://yourdomain.com'); // change to your actual domain
