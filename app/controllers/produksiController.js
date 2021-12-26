const Produksi = require("../models/produksiModel");
//--------------------------------------------------------------------------------------
// controller temukan semua data
exports.findAll = (req, res) => {
  Produksi.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "ada beberapa yang error."
      });
    else res.send(data);
  });
};

//--------------------------------------------------------------------------------------
// controller temukan data per-id
exports.findOne = (req, res) => {
  Produksi.findById(req.params.produksiId, (err, data) => {
    if (err) {
      if (err.kind === "tidak_ada") {
        res.status(404).send({
          message: 'tidak ada data dengan id ${req.params.produksiId}.'
        });
      } else {
        res.status(500).send({
          message: "error tidak ada data dengan id : " + req.params.produksiId
        });
      }
    } else res.send(data);
  });
};

//--------------------------------------------------------------------------------------
// controller buat dan simpan data
exports.create = (req, res) => {
  // validasi
  if (!req.body) {
    res.status(400).send({
      message: "form tidak boleh kosong!"
    });
  }
  // buatdata
  const produksi = new Produksi({
    nama_customer : req.body.nama_customer,
    style : req.body.style,
    code : req.body.code,
    bahan : req.body.bahan,
    warna : req.body.warna,
    size : req.body.size,
    qty : req.body.qty,
    gambar : req.body.gambar,
    harga : req.body.harga,
    keterangan : req.body.keterangan,
    jahit : req.body.jahit,
    naskat : req.body.naskat,
    potong : req.body.potong
  });
  // simpan data ke tabel 
  Produksi.create(produksi, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "ada beberapa yang error."
      });
    else res.send(data);
  });
};

//--------------------------------------------------------------------------------------
// controller update data
exports.update = (req, res) => {
  // validasi
  if (!req.body) {
    res.status(400).send({
      message: "form tidak boleh kosong!"
    });
  }
  //update per-id
  Produksi.updateById(
    req.params.produksiId,
    new Produksi(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "tidak_ada") {
          res.status(404).send({
            message: 'tidak ada data dengan id ${req.params.produksiId}.'
          });
        } else {
          res.status(500).send({
            message: "tidak bisa update data dengan id : " + req.params.produksiId
          });
        }
      } else res.send(data);
    }
  );
};

///--------------------------------------------------------------------------------------
// controller hapus data per-id
exports.delete = (req, res) => {
  Produksi.remove(req.params.produksiId, (err, data) => {
    if (err) {
      if (err.kind === "tidak_ada") {
        res.status(404).send({
          message: 'tidak ada data dengan id : ${req.params.produksiId}.'
        });
      } else {
        res.status(500).send({
          message: "tidak bisa hapus data dengan id :  " + req.params.produksiId
        });
      }
    } else res.send({ message: 'data terhapus!' });
  });
};

//--------------------------------------------------------------------------------------
// hapus semua data dari tabel
exports.deleteAll = (req, res) => {
  Produksi.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "ada beberapa yang error"
      });
    else res.send({ message: 'hapus semua data berhasil!' });
  });
}