

//driver mysql
const mysql = require("mysql");
//load konfigurasi database
const dbConfig = require("../config/dbConfig.js");
//==============================================================================================================

// buat koneksi ke database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});
//==============================================================================================================

// buka koneksi ke dbms
connection.connect(error => {
  if (error) throw error;
  console.log("Anda Berhasil terhubung pada Database...");
});

module.exports = connection;
