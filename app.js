const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('./config');
const userRoutes = require('./routes/user');

const app = express();
app.use(express.json());
app.use('/users', userRoutes);

// Insecure JWT generation
app.post('/login', (req, res) => {
    const user = { id: 1, role: "admin" };

    // No expiration set
    const token = jwt.sign(user, config.jwtSecret);
    res.json({ token });
});

app.listen(3000, () => {
    console.log("App running on port 3000");
});