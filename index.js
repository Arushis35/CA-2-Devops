const express = require("express");
const app = express();
const PORT = 3000;

// Health route
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Working 🚀" });
});

// Home route
app.get("/", (req, res) => {
  res.send("Main Server Running 🚀");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});