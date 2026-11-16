const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Register user
const register = async (req, res) => {
    try {
        const { full_name, email, password } = req.body;

        // Validasi input
        if (!full_name || !email || !password) {
            return res.status(400).json({
                message: 'All fields are required!'
            });
        }

        // Cek apakah email sudah terdaftar
        const existingUser = await pool.query(
            'SELECT id FROM users WHERE email = $1',
            [email]
        );

        if (existingUser.rows.length > 0) {
            return res.status(409).json({
                message: 'Email is already registered!'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Simpan user ke database
        const result = await pool.query(
            `INSERT INTO users (full_name, email, password_hash)
             VALUES ($1, $2, $3)
             RETURNING id, full_name, email, created_at`,
            [full_name, email, hashedPassword]
        );

        res.status(201).json({
            message: 'Registration successful!',
            user: result.rows[0]
        });

    } catch (error) {
        console.error('Register error:', error);

        res.status(500).json({
            message: 'Internal server error!'
        });
    }
};
// Login user
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validasi input
        if (!email || !password) {
            return res.status(400).json({
                message: 'Email and password are required!'
            });
        }

        // Cari user berdasarkan email
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            return res.status(401).json({
                message: 'Invalid email or password!'
            });
        }

        const user = result.rows[0];

        // Cocokkan password
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );

        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Invalid email or password!'
            });
        }

        // Buat JWT
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            message: 'Login successful!',
            token,
            user: {
                id: user.id,
                full_name: user.full_name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Login error:', error);

        res.status(500).json({
            message: 'Internal server error!'
        });
    }
};

module.exports = {
    register, login
};