const express = require('express');
const app = express();
const db = require('./db');

const logging = require('./middleware/logging');
const executionTime = require('./middleware/executionTime');
const checkTime = require('./middleware/checkTime');

// middleware
app.use(logging);
app.use(executionTime);
app.use(checkTime);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET semua produk
app.get('/produk', (req, res) => {
  db.query('SELECT * FROM produk', (err, results) => {
    if (err) {
      return res.status(500).json({
        status: "error",
        message: "Gagal mengambil data produk"
      });
    }

    res.json({
      status: "success",
      data: results
    });
  });
});

// GET produk by ID
app.get('/produk/:id', (req, res) => {
  const id = req.params.id;

  db.query(
    'SELECT * FROM produk WHERE id_produk = ?',
    [id],
    (err, results) => {
      if (err) {
        return res.status(500).json({
          status: "error",
          message: "Terjadi kesalahan server"
        });
      }

      if (results.length === 0) {
        return res.status(404).json({
          status: "failed",
          message: "Produk tidak ditemukan"
        });
      }

      res.json({
        status: "success",
        data: results[0]
      });
    }
  );
});

app.listen(3000, () => {
  console.log('Server running di http://localhost:3000');
});
