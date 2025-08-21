-- TO THE MOON DATABASE SETUP SCRIPT--

USE to_the_moon;

-- Table 1: Stocks
CREATE TABLE IF NOT EXISTS stocks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(10) NOT NULL,
    company_name VARCHAR(255),
    transaction_type ENUM('BUY', 'SELL') NOT NULL,
    shares INT NOT NULL,
    price_per_share DECIMAL(10,2) NOT NULL,
    transaction_date DATE NOT NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    fees DECIMAL(8, 2) DEFAULT 0.00,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table 2: Covered Calls
CREATE TABLE IF NOT EXISTS covered_calls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stock_symbol VARCHAR(10) NOT NULL,
    underlying_shares INT NOT NULL,
    strike_price DECIMAL(10, 2) NOT NULL,
    premium_received DECIMAL(10, 2) NOT NULL,
    expiration_date DATE NOT NULL,
    contract_date DATE NOT NULL,
    status ENUM('ACTIVE', 'EXPIRED', 'ASSIGNED', 'CLOSED') DEFAULT 'ACTIVE',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table 3: Cash-Secured Puts
CREATE TABLE IF NOT EXISTS cash_secured_puts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stock_symbol VARCHAR(10) NOT NULL,
    underlying_shares INT NOT NULL,
    strike_price DECIMAL(10, 2) NOT NULL,
    premium_received DECIMAL(10, 2) NOT NULL,
    expiration_date DATE NOT NULL,
    contract_date DATE NOT NULL,
    status ENUM('ACTIVE', 'EXPIRED', 'ASSIGNED', 'CLOSED') DEFAULT 'ACTIVE',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
-- Table 4: Portfolio Summary
CREATE TABLE IF NOT EXISTS portfolio_summary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stock_symbol VARCHAR(10) NOT NULL UNIQUE,
    total_shares INT DEFAULT 0,
    average_cost DECIMAL(10, 2) DEFAULT 0.00,
    total_invested DECIMAL(12, 2) DEFAULT 0.00,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Sample Data for testing Stocks
