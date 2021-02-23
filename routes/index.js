var express = require('express');
var router = express.Router();
const db = require('../database');

let data = {
    offers: [{
        id: 1,
        name: 'Укладка плитки',
        price: 700
    }],
    portfolio: [{
        id: 1,
        image: 'images/portfolio/1.jpeg',
        date: '01.02.2020'
    }]
}

/* GET home page. */
router.get('/', async function (req, res, next) {
    await db.offers()
        .then(result => {
            data.offers = result;
            return db.portfolio();
        })
        .then(result => data.portfolio = result)
        .catch(e => console.log(e))
        .finally(() => res.render('index', data))
});

module.exports = router;
