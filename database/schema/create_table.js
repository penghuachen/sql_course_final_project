const db = require('../mysql.js');

db.query('CREATE TABLE users (\n' +
  '    email VARCHAR(255) PRIMARY KEY,\n' +
  '    created_at TIMESTAMP DEFAULT NOW()\n' +
  ')'
);
