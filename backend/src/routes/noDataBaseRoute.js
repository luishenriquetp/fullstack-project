const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    res.json({message: 'Hello! No DB route!' });
});

module.exports = router;
