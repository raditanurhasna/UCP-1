const express = require('express');
const Pool = require('../models/poolModel');

const router = express.Router();

// Home Page: List all pools
router.get('/', async (req, res) => {
    try {
        const pools = await Pool.find();
        res.render('index', { pools });
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Add Pool: Form
router.get('/add', (req, res) => {
    res.render('add');
});

// Add Pool: Process
router.post('/add', async (req, res) => {
    try {
        const { name, location, ticketPrice } = req.body;
        const newPool = new Pool({ name, location, ticketPrice });
        await newPool.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Delete Pool
router.post('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Pool.findByIdAndDelete(id);
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;
