const db = require('../database/mysql.js');

const getHomeView = (req, res) => {
  const getTotalQuery = 'SELECT COUNT(*) AS total FROM users';

  db.query(getTotalQuery, (err, result1) => {
    res.render('index', { title: 'Express', count: result1[0].total });
  });
}

module.exports = {
  getHomeView
}