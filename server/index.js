const express = require('express');
const app = express();
const port = 8001;
const cors = require("cors");
const pool = require('./db')

app.use(cors());
app.use(express.json()); //req.body

app.listen(port, () => {
  console.log(`Movies app running on port ${port}.`);
});