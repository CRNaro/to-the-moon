-- Investment Tracking Database Schema
-- Database: to_the_moon

-- Table for stock transactions
CREATE TABLE stocks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(10) NOT NULL,
    company_name VARCHAR(255),
    transaction_type ENUM('BUY', 'SELL') NOT NULL,
    shares INT NOT NULL,
    price_per_share DECIMAL(10, 2) NOT NULL,
    transaction_date DATE NOT NULL,
    total_amount DECIMAL(12, 2) NOT NULL,
    fees DECIMAL(8, 2) DEFAULT 0.00,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for covered call positions
CREATE TABLE covered_calls (
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

-- Table for cash-secured put positions
CREATE TABLE cash_secured_puts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    stock_symbol VARCHAR(10) NOT NULL,
    strike_price DECIMAL(10, 2) NOT NULL,
    premium_received DECIMAL(10, 2) NOT NULL,
    cash_secured DECIMAL(12, 2) NOT NULL,
    expiration_date DATE NOT NULL,
    contract_date DATE NOT NULL,
    status ENUM('ACTIVE', 'EXPIRED', 'ASSIGNED', 'CLOSED') DEFAULT 'ACTIVE',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table for portfolio summary
CREATE TABLE portfolio_summary (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(10) NOT NULL UNIQUE,
    total_shares INT DEFAULT 0,
    average_cost DECIMAL(10, 2) DEFAULT 0.00,
    total_invested DECIMAL(12, 2) DEFAULT 0.00,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert some sample data for testing
INSERT INTO stocks (symbol, company_name, transaction_type, shares, price_per_share, transaction_date, total_amount) VALUES
('AAPL', 'Apple Inc.', 'BUY', 100, 150.00, '2024-01-15', 15000.00),
('MSFT', 'Microsoft Corporation', 'BUY', 50, 300.00, '2024-02-01', 15000.00),
('TSLA', 'Tesla, Inc.', 'BUY', 25, 200.00, '2024-02-15', 5000.00);

INSERT INTO covered_calls (stock_symbol, underlying_shares, strike_price, premium_received, expiration_date, contract_date) VALUES
('AAPL', 100, 160.00, 250.00, '2024-03-15', '2024-02-15'),
('MSFT', 50, 320.00, 150.00, '2024-04-15', '2024-03-01');

INSERT INTO cash_secured_puts (stock_symbol, strike_price, premium_received, cash_secured, expiration_date, contract_date) VALUES
('NVDA', 400.00, 800.00, 40000.00, '2024-05-15', '2024-04-01'),
('AMD', 100.00, 300.00, 10000.00, '2024-06-15', '2024-05-01');