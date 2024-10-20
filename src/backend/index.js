import express from "express";
const express = require("express");
const app = express();
const port = 3000;
import bodyParser from "body-parser";

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
