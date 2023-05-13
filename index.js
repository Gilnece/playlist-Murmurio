require("dotenv").config();
const express = require("express");
const connetToDb = require("./database/db");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

connetToDb();

app.get("/hello", (req, res) => {
  res.render("index");
});

app.listen(port, () =>
  console.log("Servidor rodando em http://localhost:${port}")
);
