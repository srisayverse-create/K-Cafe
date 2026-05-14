# 🚀 Kumbakonam Cafe — Hostinger Deployment Guide

## Overview

This guide explains how to deploy the website to **Hostinger Shared Hosting**.

```
Project Structure:
├── frontend/      ← React app (build this, upload the output)
├── backend/       ← PHP contact form handler
├── database/      ← MySQL schema (import via phpMyAdmin)
└── deploy/        ← .htaccess and this guide
```

---

## Step 1: Build the React Frontend

Open a terminal in the `frontend/` folder:

```bash
cd frontend
npm install
npm run build
```

This creates a `frontend/dist/` folder with all static files ready for upload.

---

## Step 2: Set Up MySQL Database

1. Log in to **Hostinger hPanel** → **Databases** → **MySQL Databases**
2. Create a new database (e.g. `u123456_kcafe`)
3. Create a database user and assign it to the database (grant ALL privileges)
4. Open **phpMyAdmin** → select your database → click **Import**
5. Upload `database/schema.sql` and click **Go**

✅ All tables and seed data will be created automatically.

---

## Step 3: Configure PHP Backend

1. Open `backend/api/config.php`
2. Fill in your actual credentials:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'u123456_kcafe');       // your DB name from Step 2
define('DB_USER', 'u123456_kcafe_user'); // your DB user
define('DB_PASS', 'YourSecurePassword'); // your DB password

define('MAIL_HOST', 'smtp.hostinger.com');
define('MAIL_USERNAME', 'info@yourdomain.com'); // your Hostinger email
define('MAIL_PASSWORD', 'YourEmailPassword');
define('NOTIFY_EMAILS', ['kcafe.uae@gmail.com', 'info@yourdomain.com']);
define('ALLOWED_ORIGIN', 'https://yourdomain.com');
```

---

## Step 4: Install PHPMailer (via Composer)

On Hostinger, open **SSH Terminal** (or use hPanel terminal):

```bash
cd ~/public_html
composer install
```

> **No Composer?** Download PHPMailer manually:
> 1. Download from https://github.com/PHPMailer/PHPMailer/releases
> 2. Upload the `src/` folder to `public_html/vendor/phpmailer/phpmailer/src/`
> 3. Update the `require_once` path in `contact.php`

---

## Step 5: Upload Files to Hostinger

Upload via **Hostinger File Manager** or **FTP (FileZilla)**:

### What to upload to `public_html/`:

| Source (local)              | Destination (Hostinger)             |
|-----------------------------|-------------------------------------|
| `frontend/dist/*`           | `public_html/` (all contents)       |
| `frontend/public/Assets/`   | `public_html/Assets/`               |
| `frontend/public/cafe-bg.png` | `public_html/cafe-bg.png`         |
| `backend/api/contact.php`   | `public_html/api/contact.php`       |
| `backend/api/config.php`    | `public_html/api/config.php`        |
| `backend/vendor/`           | `public_html/vendor/`               |
| `deploy/.htaccess`          | `public_html/.htaccess`             |

### Final `public_html/` structure:
```
public_html/
├── index.html          ← React app entry
├── assets/             ← Vite build (JS, CSS)
├── Assets/             ← Food images
│   ├── Breakfast/
│   ├── Hot Beverages/
│   └── ...
├── cafe-bg.png         ← Hero background
├── api/
│   ├── contact.php
│   └── config.php
├── vendor/             ← PHPMailer
└── .htaccess           ← SPA routing
```

---

## Step 6: Test the Deployment

1. Visit `https://yourdomain.com` — the site should load
2. Try submitting the contact form — you should receive an email
3. Check phpMyAdmin → `contact_submissions` table for new entries

---

## ⚠️ Important Notes

- **Never commit `config.php`** to Git — it contains credentials
- The `.htaccess` file handles SPA routing (all routes redirect to `index.html`)
- If you update the menu, re-run `npm run build` and re-upload `dist/`
- Hostinger email: Create the email first in **hPanel → Emails → Email Accounts**

---

## Development (Local)

```bash
cd frontend
npm install
npm run dev
# Opens at http://localhost:3000
```

The contact form will show a 404 in dev (no PHP locally) — that's expected. It works on Hostinger.
