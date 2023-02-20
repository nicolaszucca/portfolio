const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/crud', (req, res) => {
    res.render('crud');
})

router.get('/scrapper', (req, res) => {
    res.render('scrapper');
})

router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;
