const express = require("express");

const mongoose = require("mongoose");

const app = express();

const port = 3333;

try {
  mongoose.connect("mongodb://127.0.0.1:27017/controle", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (error) {
  console.log("err ", error);
}

app.listen(port, () => {
  console.log("server is running⚡️");
});
