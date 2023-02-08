const express = require("express");
const app = express();
// Load environment variables
require("dotenv").config();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get("/api/github", (req, res) => {
  const apiKey = process.env.GITHUB_API_KEY;
  res.send({ apiKey });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
