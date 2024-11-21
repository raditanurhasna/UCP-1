const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const poolRoutes = require('./routes/poolRoutes');

const app = express();

// Middleware
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database connection
mongoose.connect('mongodb://localhost:27017/poolDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.error(err));

// Routes
app.use('/', poolRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:3000`));
