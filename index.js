const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Routes = require("./src/routes");

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

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("METHOD ", req.method);
  return res.json({ test: "hello" });
});

app.use(Routes);

app.listen(port, () => {
  console.log(`server is running in localhost:${port}⚡️`);
});
