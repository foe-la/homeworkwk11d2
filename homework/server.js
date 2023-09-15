const express = require('express');
const app = express();

app.get("/greeting", function (req, res) {
    res.send("<h1>Hello, stranger</h1>");
  });

  app.get("/tip", function (req, res) {
    res.send("<h2>Tip Calculator</h2>");
  });

  app.get("/tip/:total", function (req, res) {
    res.send("Total: " + req.params.total);
  });

  app.get("/tip/:total/:tipPercentage", function (req, res) {
    res.send("Tip: " + ((req.params.tipPercentage / 100) * req.params.total));
  });

  app.get("/greeting/:name", function (req, res) {
  
    res.send("Wow! Hello there " + req.params.name);
  });
  // port setup
  app.listen(3000, function () {
    console.log("Listening on port 3000");
  });
