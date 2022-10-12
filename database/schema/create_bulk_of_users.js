const db = require('../mysql.js');
const { faker } = require('@faker-js/faker');

const bulkOfUsers = [];

for (let i = 0; i < 500; i++) {
  bulkOfUsers.push(
    [
      faker.internet.email(),
      faker.date.past()
    ]
  );
}

const q = 'INSERT INTO users (email, created_at) VALUES ?';
db.query(q, [bulkOfUsers], (err, result) => {
  console.log(err, err);
  console.log(result, result);
});

db.end();