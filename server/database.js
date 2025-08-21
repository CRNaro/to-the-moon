//Connecting the MySQL database to the React frontend

import mysql from 'mysql2';
import dotenv from 'dotenv';
import process from 'process';
dotenv.config(); //Load .env file makes connection info available

const dbConfig = {
    host: process.env.DB_HOST, //Use "process.env" object via Node.js to tell JS to look up actual value in .env
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT
};

const pool = mysql.createPool(dbConfig);

async function testConnection(){
    try {
        const connection = await pool.promise().getConnection();
        console.log('Database connected successfully');
        connection.release();
   } catch (error) {
        console.error('Database connection failed', error);
    }
    }
 
testConnection();

async function addStockTransaction(symbol, companyName, transactionType, shares, pricePerShare, transactionDate, fees = 0, notes = ''){
const totalAmount = (shares * pricePerShare) + fees;

try {
    const sql = 'INSERT INTO stocks (symbol, company_name, transaction_type, shares, price_per_share, transaction_date, total_amount, fees, notes) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const result = await pool.promise().execute(sql, [symbol, companyName, transactionType, shares, pricePerShare, transactionDate, totalAmount, fees, notes]);
    return result[0].insertId;
} catch (error) {
    console.error('Unable to add stock', error);
}
}

async function getAllStocks() {
    try {
        const sql = 'SELECT * FROM stocks ORDER BY created_at DESC';
        const [rows] = await pool.promise().execute(sql);
        return rows;
    } catch (error) {
        console.error('Unable to get stocks', error);
        throw error;
    }
}

export { pool, addStockTransaction, getAllStocks };


// When CSP gets assigned 
// await updateCSPStatus(cspId, 'ASSIGNED');
// await createStockTransaction(Symbol, 'BUY', 100, strikePrice);
// await recalculatePortfolioSummary(symbol);