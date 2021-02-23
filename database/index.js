const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    user: 'user',
    password: 'user123',
    database: 'elfel',
    host: 'localhost'
});

let elfelDb = {};

function getData(request) {
    return new Promise((resolve, reject) => {
        pool.query(request, (error, result) => {
            if (error) {
                return reject(error);
            }

            return resolve(result);
        })
    })
}

elfelDb.offers = () => getData('SELECT * FROM offers');

elfelDb.portfolio = () => getData('SELECT * FROM portfolio');

module.exports = elfelDb;
