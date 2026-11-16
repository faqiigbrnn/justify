const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        // Periksa apakah token tersedia
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({
                message: 'Access denied. Token is required!'
            });
        }

        // Ambil token dari header
        const token = authHeader.split(' ')[1];

        // Verifikasi token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Simpan data pengguna ke request
        req.user = decoded;

        // Lanjutkan ke proses berikutnya
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Invalid or expired token!'
        });
    }
};

module.exports = verifyToken;