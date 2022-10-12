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
    res.redirect('/');
  })
}

module.exports = {
  register
}