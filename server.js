const express = require("express");
const expressAsyncHandler = require('express-async-handler')
const bodyParser = require("body-parser");
const app = express();
//-------------------------------------------------------------------------

// parse permintaan jenis konten - application / json
app.use(bodyParser.json());
// parse permintaan jenis konten - application / x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
//-------------------------------------------------------------------------
// route awalan yaitu index
// app.use('view engine', 'html');
app.get("/", (req, res) => {
  res.render('./public/index.html');
});


// tambahan produksi routes
require("./app/routes/produksiRoutes")(app);



// port untuk server lokal
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  console.log(`Server berjalan pada Port : ${PORT}.`);
});