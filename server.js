// server.js

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path");

// add any necessary code you'd want to!

//root
app.get("/", (req, res) => {
  // your nav bar is on index.html
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
  res.redirect("https://climate-crisis-csc31705-11.netlify.app");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
  res.redirect("https://chamithg.github.io/typesetting");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
  res.redirect("https://chamithg.github.io/sorting_algo");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
