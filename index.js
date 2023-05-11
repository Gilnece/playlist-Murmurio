require("dotenv").config();
const express = require('express');
const app = express();
const connetToDb = require("./database/db");



const port = process.env.PORT || 3000;



app.get("/hello", (req, res) =>{
    res.send("Helo World!")
});



app.listen(port, () => 
  console.log('Servidor rodando em http://localhost:${port}')
);