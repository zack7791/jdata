// const produksi = require("../model/produksiModel");

const Produksi = require("../models/produksiModel");

module.exports = app => {
    const produksi = require("../controllers/produksiController");

    app.get("/produksi", produksi.findAll); //temukan semua data
    app.get("/produksi/:produksiId", produksi.findOne); //temukan data per id
    app.post("/produksi", produksi.create); //insert data
    app.put("/produksi/:produksiId", produksi.update); // update per id
    app.delete("/produksi/:produksiId", produksi.delete); //hapus per id
    app.delete("/produksi", produksi.deleteAll); //hapus semua data
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
    console.log("berhasil : ", { id: res.insertId, ...newProduksi});
    result(null, { idp: res.insertId, ...newProduksi });
  });
};


