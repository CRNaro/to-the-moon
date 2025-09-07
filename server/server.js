import express from 'express';
import { addStockTransaction, getAllStocks } from './database.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/stocks', async (req, res) => {
    try {
       const stocks = await getAllStocks();
       res.json(stocks);
    } catch (error) {
        console.error('Error getting stocks:', error);
        res.status(500).json({ error: 'Failed to get stocks'});
    }
});