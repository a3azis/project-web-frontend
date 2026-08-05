const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'rahasia_super_aman_oldage_123';

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'oldage_db',
    waitForConnections: true,
    connectionLimit: 10,
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'Test endpoint is working!' });
});

db.getConnection((err, connection) => {
    if (err) {
        console.error('Database connection failed:', err.message);
    } else {
        console.log('Connected to the database.');
        connection.release();
    }
});

app.post('/api/register', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username dan password wajib diisi' });
    }

    try {
        const sqlCheck = 'SELECT * FROM users WHERE username = ?';
        db.query(sqlCheck, [username], async (err, results) => {
            if (err) {
                console.error('Database Error', err);
                return res.status(500).json({ message: 'Terjadi kesalahan pada server database' });
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'Username sudah terdaftar' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            const sqlInsert = 'INSERT INTO users (username, password) VALUES (?, ?)';
            db.query(sqlInsert, [username, hashedPassword], async (err, result) => {
                if (err) {
                    console.error('Database Error', err);
                    return res.status(500).json({ message: 'Gagal mendaftarkan user' });
                }

                const token = jwt.sign(
                    { id: result.insertId, username: username },
                    JWT_SECRET,
                    { expiresIn: '1d' }
                );

                return res.status(201).json({ message: 'Registrasi berhasil', token: token });
            });
        });
    } catch (error) {
        return res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username dan password wajib diisi' });
    }

    try {
        const sqlSearch = 'SELECT * FROM users WHERE username = ?';
        db.query(sqlSearch, [username], async (err, results) => {
            if (err) {
                console.error('Database Error', err);
                return res.status(500).json({ message: 'Terjadi kesalahan pada server database' });
            }

            if (results.length === 0) {
                return res.status(401).json({ message: 'Username atau password salah' });
            }

            const user = results[0];
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Username atau password salah' });
            }

            const token = jwt.sign(
                { id: user.id, username: user.username },
                JWT_SECRET,
                { expiresIn: '1d' }
            );

            return res.status(200).json({
                message: 'Login berhasil!',
                token: token,
                user: {
                    id: user.id,
                    username: user.username,
                },
            });
        });
    } catch (error) {
        return res.status(500).json({ message: 'Terjadi kesalahan server' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

module.exports = app;
