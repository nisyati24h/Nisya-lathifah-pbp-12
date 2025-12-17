const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'toko_online',
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.log('Koneksi database gagal ❌');
    console.log(err);
  } else {
    console.log('Koneksi database berhasil ✅');
  }
});

module.exports = db;
