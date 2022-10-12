const db = require('../database/mysql.js');
const dayjs = require('dayjs');

const register = (req, res) => {
  const body = req.body;
  const person = {
    email: body.email,
    created_at: dayjs().format('YYYY-MM-DD HH:mm:ss')
  }
  const createUserQuery = 'INSERT INTO users SET ?';
  db.query(createUserQuery, person, (err, result) => {

    const getTotalQuery = 'SELECT COUNT(*) AS total FROM users';
    db.query(getTotalQuery, (err, result1) => {
      res.render('index', { title: 'Express', count: result1[0].total });
    });
  })
}

module.exports = {
  register
}