-- ============================================================
-- Kumbakonam Cafe — MySQL Database Schema
-- Import this file via: Hostinger cPanel → phpMyAdmin → Import
-- ============================================================

CREATE DATABASE IF NOT EXISTS `kumbakonam_cafe` 
  CHARACTER SET utf8mb4 
  COLLATE utf8mb4_unicode_ci;

USE `kumbakonam_cafe`;

-- ─── Menu Categories ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `menu_categories` (
  `id`         VARCHAR(50)  NOT NULL,
  `title`      VARCHAR(255) NOT NULL,
  `timing`     VARCHAR(100) DEFAULT NULL,
  `sort_order` INT          NOT NULL DEFAULT 0,
  `created_at` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─── Menu Items ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `menu_items` (
  `id`          INT          NOT NULL AUTO_INCREMENT,
  `category_id` VARCHAR(50)  NOT NULL,
  `name`        VARCHAR(255) NOT NULL,
  `price`       VARCHAR(50)  NOT NULL,
  `description` TEXT         DEFAULT NULL,
  `image`       VARCHAR(512) DEFAULT NULL,
  `is_available` TINYINT(1)  NOT NULL DEFAULT 1,
  `sort_order`  INT          NOT NULL DEFAULT 0,
  `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_category` (`category_id`),
  CONSTRAINT `fk_category` 
    FOREIGN KEY (`category_id`) 
    REFERENCES `menu_categories` (`id`) 
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─── Branches ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `branches` (
  `id`          INT          NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(255) NOT NULL,
  `address`     TEXT         NOT NULL,
  `phone`       VARCHAR(50)  NOT NULL,
  `hours`       VARCHAR(100) NOT NULL,
  `latitude`    DECIMAL(10,7) DEFAULT NULL,
  `longitude`   DECIMAL(10,7) DEFAULT NULL,
  `description` TEXT         DEFAULT NULL,
  `qr_image`    VARCHAR(512) DEFAULT NULL,
  `sort_order`  INT          NOT NULL DEFAULT 0,
  `created_at`  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─── Branch Images ────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `branch_images` (
  `id`         INT          NOT NULL AUTO_INCREMENT,
  `branch_id`  INT          NOT NULL,
  `image_url`  VARCHAR(512) NOT NULL,
  `sort_order` INT          NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `fk_branch` (`branch_id`),
  CONSTRAINT `fk_branch` 
    FOREIGN KEY (`branch_id`) 
    REFERENCES `branches` (`id`) 
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ─── Contact Form Submissions ─────────────────────────────────
CREATE TABLE IF NOT EXISTS `contact_submissions` (
  `id`           INT          NOT NULL AUTO_INCREMENT,
  `name`         VARCHAR(255) NOT NULL,
  `phone`        VARCHAR(50)  NOT NULL,
  `service_type` VARCHAR(100) NOT NULL DEFAULT 'General Enquiry',
  `message`      TEXT         NOT NULL,
  `email_sent`   TINYINT(1)   NOT NULL DEFAULT 0,
  `ip_address`   VARCHAR(45)  DEFAULT NULL,
  `created_at`   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ============================================================
-- SEED DATA
-- ============================================================

-- Categories
INSERT INTO `menu_categories` (`id`, `title`, `timing`, `sort_order`) VALUES
('all-day',   'Thatte Idly & Dosa (All Day)',   '8 AM - 11 PM',  1),
('breakfast', 'Breakfast Specials (8 AM - 11 AM)', '8 AM - 11 AM', 2),
('specials',  'K Cafe Specialties',              'From 3 PM / Dinner', 3),
('lunch',     'Lunch Varieties (12 PM - 3 PM)',  '12 PM - 3 PM',  4),
('snacks',    'Snacks & Evening Tiffin',         '3 PM Onwards',  5),
('beverages', 'Hot & Cold Beverages',            'All Day',       6),
('sweets',    'Sweets & Savouries',              'All Day',       7),
('baked',     'Baked Delicacies',                'All Day',       8),
('weekend',   'Weekend Specials',                'Fri - Sun',     9),
('extras',    'Extras & Accompaniments',         'All Day',       10);

-- Menu Items (Thatte Idly & Dosa)
INSERT INTO `menu_items` (`category_id`, `name`, `price`, `description`, `image`, `sort_order`) VALUES
('all-day', 'Signature (Mini Tiffin)', '23/25', NULL, '/Assets/Breakfast/mini-tiffin-combo-1509x2048.jpg', 1),
('all-day', 'K Special Dosa', '18', 'Ghee garlic podi masala served with butter', '/Assets/Thatte Idly and Dosa/k-special-dosa-1536x2048.jpg', 2),
('all-day', 'Ghee Podi Masala Dosa', '16', NULL, '/Assets/Thatte Idly and Dosa/ghee-podi-masal-dosa.png', 3),
('all-day', 'Ghee Garlic Masala Dosa', '16', NULL, '/Assets/Thatte Idly and Dosa/ghee-garlic-masal-dosa.png', 4),
('all-day', 'Ghee Garlic Podi Dosa', '15.5', NULL, '/Assets/Thatte Idly and Dosa/Ghee Garlic podi dosa (2).JPG', 5),
('all-day', 'Ghee Masala Dosa', '14.5', NULL, '/Assets/Thatte Idly and Dosa/ghee-masala-dosa.bak.png', 6),
('all-day', 'Ghee Podi Dosa', '14.5', NULL, '/Assets/Thatte Idly and Dosa/ghee-podi-dosa.png', 7),
('all-day', 'Ghee Garlic Dosa', '14.5', NULL, '/Assets/Thatte Idly and Dosa/ghee-gralic-dosa.png', 8),
('all-day', 'Ghee Dosa', '12.5', NULL, '/Assets/Thatte Idly and Dosa/ghee-dosa.png', 9),
('all-day', 'Ghee Sambar Button Idly', '13', NULL, '/Assets/Thatte Idly and Dosa/Ghee sambar button idly.JPG', 10),
('all-day', 'Garlic Podi Thatte Idly', '10.5', NULL, '/Assets/Thatte Idly and Dosa/Garlic-podi-thatte-idly.png', 11),
('all-day', 'Thayir Thatte Idly', '10', NULL, '/Assets/Thatte Idly and Dosa/Thayir-thatte-idly-i-1.bak.png', 12),
('all-day', 'Ghee Podi Thatte Idly', '9.5', NULL, '/Assets/Thatte Idly and Dosa/Ghee podi thatte idly (3) (3).jpg', 13),
('all-day', 'Ghee Sambar Thatte Idly', '9.5', NULL, '/Assets/Thatte Idly and Dosa/ghee-sambar-thatte-idly-i-e1756646482282-300x244.png', 14),
('all-day', 'Podi Thatte Idly', '8.5', NULL, '/Assets/Thatte Idly and Dosa/podi thatte idly (3) (3) - Copy.jpg', 15),
('all-day', 'Ghee Thatte Idly', '8', NULL, '/Assets/Thatte Idly and Dosa/ghee-thatte-idly.bak.png', 16),
('all-day', 'Thatte Idly', '7', NULL, '/Assets/Thatte Idly and Dosa/Thate idly (1).JPG', 17),
('all-day', 'Vada Set (2pc)', '10', NULL, NULL, 18);

-- Breakfast
INSERT INTO `menu_items` (`category_id`, `name`, `price`, `image`, `sort_order`) VALUES
('breakfast', 'Ghee Pongal', '13', '/Assets/Breakfast/Ghee pongal (1).PNG', 1),
('breakfast', 'Wheat Upma (Mon/Thu)', '9.5', '/Assets/Breakfast/Wheat-rava-Upma-1.png', 2),
('breakfast', 'Kichidi (Tue/Fri)', '9.5', '/Assets/Breakfast/kichidi-e1758644845534.png', 3),
('breakfast', 'Semiya Upma (Wed/Sat)', '9.5', '/Assets/Breakfast/semiya-upma-150x150.png', 4),
('breakfast', 'Rava Upma (Sun)', '9.5', '/Assets/Breakfast/rava-upma-300x300.png', 5);

-- Beverages
INSERT INTO `menu_items` (`category_id`, `name`, `price`, `image`, `sort_order`) VALUES
('beverages', 'Kumbakonam Filter Kaapi', '5/8', '/Assets/Hot Beverages/Kumbakonam-filter-coffee-2-scaled.jpg', 1),
('beverages', 'Cold Filter Kaapi', '10', '/Assets/Cold Beverages/Cold filter coffee (3).JPG', 2),
('beverages', 'Nannari Sarbath', '8', '/Assets/Cold Beverages/nannari-sarbath.bak.png', 3),
('beverages', 'Masala Buttermilk', '8', '/Assets/Cold Beverages/Masala-Buttermilk.jpg', 4),
('beverages', 'Rose Milk', '8', '/Assets/Cold Beverages/rose-milk.bak.png', 5),
('beverages', 'Panakam', '6', '/Assets/Cold Beverages/Panakam.jpg', 6),
('beverages', 'Fresh Milk Masala Tea', '4', '/Assets/Hot Beverages/fresh-milk-masala-tea.png', 7),
('beverages', 'Fresh Milk Tea', '3', '/Assets/Hot Beverages/fresh-milk-tea.bak.png', 8),
('beverages', 'Black Kaapi', '3', '/Assets/Hot Beverages/Black Kappi (1).JPG', 9),
('beverages', 'Black Tea', '2', NULL, 10),
('beverages', 'Water Bottle', '2', '/Assets/Cold Beverages/water-bottle-1.bak.png', 11);

-- Weekend Specials
INSERT INTO `menu_items` (`category_id`, `name`, `price`, `image`, `sort_order`) VALUES
('weekend', 'Sweet Kaaram Kaapi', '20', '/Assets/Weekend Specials/SWEET-KAARAM-KAAPI.png', 1),
('weekend', 'Venna Kaara Dosa', '19', '/Assets/Weekend Specials/Venna kaara dosa.JPG', 2),
('weekend', 'Live Snack Basket', '18', '/Assets/Weekend Specials/Livee snack baket.JPG', 3),
('weekend', 'Paniyaram Chat', '15', '/Assets/Weekend Specials/Paniyaramm chat.JPG', 4),
('weekend', 'Idly Nirachadhu', '10', '/Assets/Weekend Specials/Idly nirachadhu.jpeg', 5);

-- Branches
INSERT INTO `branches` (`name`, `address`, `phone`, `hours`, `latitude`, `longitude`, `description`, `qr_image`, `sort_order`) VALUES
('Hamdan (Opposite to Hamdan Center)', 'Al Ghatfah St, Hamdan 5, Al Danah, Abu dhabi', '+971 50 168 0792', '6:30 am - 11:30 pm', 24.4890000, 54.3640000, 'Our flagship outlet offering the full heritage experience in the heart of the city.', '/Assets/QR - Shabiya Location.png', 1),
('Khalidiyah (Khaldiya Mall)', 'Khaldiyah Mall - Food Court, 2nd Floor, Mubarak bin Mohammed Street, Abu dhabi', '+971 50 411 8667', '8 am - 12 am', 24.4690000, 54.3440000, 'A cozy spot perfect for family dinners and quick traditional snacks.', '/Assets/QR - Shabiya Location.png', 2),
('Musaffah (Mazyad Mall)', 'Mazyad Mall - Food Court, Level 2, 28th Street, Musaffah - Abu Dhabi', '+971 50 411 7897', '7:30 am - 11:30 pm', 24.3690000, 54.4940000, 'Serving authentic flavors to the hard-working community of Musaffah.', '/Assets/QR - Shabiya Location.png', 3),
('Shabiya (Shabiya Branch)', 'Musaffah Shabiya, Abu Dhabi, UAE', '+971 050 171 5991', '6:30 am - 11:30 pm', 24.3500000, 54.5100000, 'Modern South Indian dining with a unique twist exclusively at Shabiya.', '/Assets/QR - Shabiya Location.png', 4);
