const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Database connection
const con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "travel"
});
con.connect((err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

// Routes
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.get('/book', (req, res) => res.sendFile(path.join(__dirname, 'public', 'book.html')));

app.post('/book', (req, res) => {
    const { custname, contact, seats } = req.body;
    const pricePerSeat = 200;
    const totalPrice = seats * pricePerSeat;

    const sql = "INSERT INTO b (custname, contact, seats, totalPrice) VALUES (?, ?, ?, ?)";
    con.query(sql, [custname, contact, seats, totalPrice], (err) => {
        if (err) return res.status(500).send("Database error");
        res.send(`Booking successful! Total price: ₹${totalPrice}`);
    });
});

// Start the server
app.listen(8000, () => console.log('Server running on http://localhost:8000'));
