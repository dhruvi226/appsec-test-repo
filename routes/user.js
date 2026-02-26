const express = require('express');
const router = express.Router();

// SQL Injection vulnerability
router.get('/search', (req, res) => {
    const query = req.query.q;

    const sql = "SELECT * FROM users WHERE name = '" + query + "'";
    console.log("Executing query:", sql);

    res.send("Search executed");
});

// IDOR vulnerability
router.get('/:id', (req, res) => {
    const userId = req.params.id;

    // No auth check
    res.json({
        id: userId,
        name: "Test User",
        email: "user@example.com"
    });
});

module.exports = router;