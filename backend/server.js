const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const pasteRoute = require("./routes/pasteRoute");

app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());
app.use("/api/paste", pasteRoute);
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MonogoDB Successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Pastebin API running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
