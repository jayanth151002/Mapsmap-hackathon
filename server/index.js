const dotenv = require('dotenv');
dotenv.config({ path: "./config.env" });
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const auth = require("./router/auth");
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(cors());
app.use(auth);


require('./config/mongoConnection');

// app.use("/api", require("./routes"))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log("server is listening");
});
