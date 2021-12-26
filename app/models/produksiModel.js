const sql = require("./db.js");
//--------------------------------------------------------------------------------------
// buat construktor

const Produksi = function (produksi) {
  this.nama_customer = produksi.nama_customer;
  this.style = produksi.style;
  this.code = produksi.code;
  this.bahan = produksi.bahan;
  this.warna = produksi.warna;
  this.size = produksi.size;
  this.qty = produksi.qty;
  this.gambar = produksi.gambar;
  this.harga = produksi.harga;
  this.keterangan = produksi.keterangan;
  this.jahit = produksi.jahit;
  this.naskat = produksi.naskat;
  this.potong = produksi.potong;
};

//--------------------------------------------------------------------------------------
//model menampilkan semua data di tabel
Produksi.getAll = result => {
  sql.query("SELECT * FROM produksi", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("produksi: ", res);
    result(null, res);
  });
};

//--------------------------------------------------------------------------------------
//model menampilkan data per idp
Produksi.findById = (produksiId, result) => {
  sql.query(`SELECT * FROM produksi WHERE id = ${produksiId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("data produksi: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({
      kind: "tidak ada data"
    }, null);
  });
};

//--------------------------------------------------------------------------------------
//model menampilkan semua data di tabel
Produksi.getAll = result => {
  sql.query("SELECT * FROM produksi", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("produksi: ", res);
    result(null, res);
  });
};

//--------------------------------------------------------------------------------------
//model menampilkan data per idp
Produksi.findById = (pesertaIdp, result) => {
  sql.query(`SELECT * FROM produksi WHERE idp = ${produksiId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("data peserta: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({
      kind: "tidak ada data"
    }, null);
  });
};

//--------------------------------------------------------------------------------------
//model insert data ke tabel
Produksi.create = (newProduksi, result) => {
  sql.query("INSERT INTO produksi SET ?", newProduksi, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("berhasil : ", {
      id: res.insertId,
      ...newProduksi
    });
    result(null, {
      idp: res.insertId,
      ...newProduksi
    });
  });
};

//-----------------------------------------------

//---------------------------------------
// model update data
Produksi.updateById = (id, produksi, result) => {
  sql.query(
    "UPDATE peserta SET nama_customer = ?, style = ?, code = ?, bahan = ?, size = ?, qty = ?, gambar = ?, harga = ?, keterangan = ?, jahit = ?, naskat = ?, potong = ? WHERE id = ?",
    [produksi.nama_customer, produksi.style, produksi.code, produksi.bahan, produksi.warna, produksi.size, produksi.qty, produksi.gambar, produksi.harga, produksi.keterangan, produksi.jahit, produksi.naskat, produksi.potong, idp],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({
          kind: "tidak ada data"
        }, null);
        return;
      }
      console.log("update data.. : ", {
        id: id,
        ...produksi
      });
      result(null, {
        id: id,
        ...produksi
      });
    }
  );
};

// buat construktor
//model menampilkan semua data di tabel
//model menampilkan data per idp
//model insert data ke tabel
// model update data
//--------------------------------------------------------------------------------------
// hapus data per-id
Produksi.remove = (idp, result) => {
  sql.query("DELETE FROM produksi WHERE idp = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    if (res.affectedRows == 0) {
      result({
        kind: "tidak ada data"
      }, null);
      return;
    }
    console.log("terhapus data id : ", idp);
    result(null, res);
  });
};

//--------------------------------------------------------------------------------------
// hapus semua data
Produksi.removeAll = result => {
  sql.query("DELETE FROM produksi", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log('terhapus ${res.affectedRows} produksi');
    result(null, res);
  });
};



module.exports = Produksi;