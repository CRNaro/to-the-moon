-- Table for tracking stock buy/sell transactions

CREATE TABLE stocks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    -- id = column name
-- INT = integer data type (whole numbers only)
-- AUTO_INCREMENT = automatically increase value for each new row
-- PRIMARY KEY = tells MySQL this is the unique identifier for each row
-- , = separates columns)
    symbol VARCHAR(10) NOT NULL,
    -- symbol = column name
-- VARCHAR(10) = variable character data type with a maximum length of 10 characters
-- NOT NULL = this column must have a value (cannot be empty
    company_name VARCHAR(255),
    -- company_name = column name
-- VARCHAR(255) = variable character data type with a maximum length of 255 characters
    transaction_type ENUM('BUY', 'SELL') NOT NULL,
    -- transaction_type = column name
-- ENUM('BUY', 'SELL') = enumerated type that can only be 'BUY' or 'SELL'
    shares INT NOT NULL,
    -- shares = column name
-- INT = integer data type (whole numbers only)
    price DECIMAL(10, 2) NOT NULL,
    -- price = column name
-- DECIMAL(10, 2) = decimal data type with up to 10 digits
-- and 2 digits after the decimal point
    transaction_date DATETIME NOT NULL,
    -- transaction_date = column name
-- DATETIME = date and time data type
    total_amount DECIMAL(10, 2) NOT NULL,
    -- total_amount = column name
-- DECIMAL(10, 2) = decimal data type with up to 10 digits
-- and 2 digits after the decimal point
    fees DECIMAL(10, 2) NOT NULL,
    -- fees = column name
    notes TEXT,
    -- notes = column name
-- TEXT = variable-length text data type for longer notes
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    -- created_at = column name
-- TIMESTAMP = date and time data type that automatically sets to current time
-- when a new row is created
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    -- updated_at = column name
-- TIMESTAMP = date and time data type that automatically updates to current time
-- whenever the row is updated
-- ON UPDATE CURRENT_TIMESTAMP = automatically updates this column when the row is modified   
)    
