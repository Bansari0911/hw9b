const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const multer = require("multer");
const upload = multer();

const articles = [
  {
    id: 1,
    name: "Article1",
    content: "",
  },
  {
    id: 2,
    name: "Article2",
    content: "",
  },
  {
    id: 3,
    name: "Article3",
    content: "",
  },
];

app.use(bodyParser.json());

app.use(express.static("public"));
app.use(express.static("css"));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});

app.get("/ex1", (req, res) => {
  res.sendFile(`${__dirname}/views/ex1.html`);
});

app.get("/ex2", (req, res) => {
  res.sendFile(`${__dirname}/views/ex2.html`);
});

app.get("/ex3", (req, res) => {
  res.sendFile(`${__dirname}/views/ex3.html`);
});

app.post("/order", upload.array(), (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(
    `${name} Thank you for your order. We will keep you posted on delivery status at ${email}`
  );
});

app.post("/api/countries", (req, res) => {
  const name = req.body.name;
  const countriesLength = req.body.countries.length;
  res.send(
    `Your name is ${name} and you visited ${countriesLength} countries. Keep traveling!`
  );
});

app.post("/articles", upload.array(), (req, res) => {
  const article = {
    name: req.body.name,
    content: req.body.content,
    id: articles.length + 1,
  };
  articles.push(article);
  res.send(
    `New article added successfully with title '${article.name}' and ID ${article.id}!`
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
