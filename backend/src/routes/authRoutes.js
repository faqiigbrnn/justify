const express = require('express');
const router = express.Router();

const { register, login } = require('../controller/authController');
const verifyToken = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/verify', verifyToken, (req, res) => {
    res.status(200).json({
        message: 'Token is valid!',
        user: req.user
    });
});
module.exports = router;