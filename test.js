// Test file to check if our database functions work

import { pool, addStockTransaction } from './server/database.js';

async function testAddStock() {
    try {
        console.log('Testing addStockTransaction...');
        
        const result = await addStockTransaction('AAPL', 'Apple Inc.', 'BUY', 100, 150.00, '2025-08-20');
        
        console.log('Success! New stock transaction ID:', result);
        console.log('Check your database to see if the record was added!');
        
    } catch (error) {
        console.error('Test failed:', error);
    } finally {
        // Close the database connection
        pool.end();
    }
}

// Run the test
testAddStock();
