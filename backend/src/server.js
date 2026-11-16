const express = require('express');
const pool = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
const PORT = 5000;


app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use('/api/auth', authRoutes);
app.get('/', (req, res) => {
    res.json({
        message: 'JUSTIFY Backend is running!'
    });
});
app.get('/test-db', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');

        res.json({
            message: 'Database JUSTIFY connected successfully!',
            time: result.rows[0].now
        });
    } catch (error) {
        console.error('Database connection failed:', error);

        res.status(500).json({
            message: 'Database connection failed!'
        });
    }
});




// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});