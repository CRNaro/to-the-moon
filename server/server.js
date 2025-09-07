import express from 'express';
import { addStockTransaction, getAllStocks } from './database.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001;


app.get('/api/stocks', async (req, res) => {
    try {
       const stocks = await getAllStocks();
       // call database function, await for database query to finish
       res.json(stocks);
       //sends the stock data back to React as JSON
    } catch (error) {
        console.error('Error getting stocks:', error);
        res.status(500).json({ error: 'Failed to get stocks'});
    }
});

app.listen(PORT, () => {
    console.log('Server running on port: ' + PORT);
});