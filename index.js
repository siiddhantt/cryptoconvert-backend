const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 4000;

app.use(express.json());
app.use("/api/crypto", require("./routes/crypto"));

app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
