const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const auth = require("./router/auth");
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(cors());
app.use(auth);

// app.use("/api", require("./routes"))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(8000, () => {
  console.log("server is listening");
});
