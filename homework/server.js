const express = require('express');
const app = express();

const aRandomResponse = require(["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
);

app.get("/greeting", function (req, res) {
    res.send("<h1>Hello, stranger</h1>");
  });

  app.get("/tip", function (req, res) {
    res.send("<h2>Tip Calculator</h2>");
  });

  app.get("/magic", function (req, res) {
    res.send("<h1> Magic 8 Ball </h1>");
  });

  app.get("/magic/:randomResponse", function (req, res) {
    console.log(randomResponse);
    let aRandomResponse = randomResponse[Math.floor(Math.random()*randomResponse.length)];
    res.send("<h1> ${req.params.randomResponse} , ${aRandomResponse} </h1> "
    );
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
