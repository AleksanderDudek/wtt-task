const express = require("express");
const cors = require("cors");

const booksJson = require("./mocks/books.json");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

app.get("/books", (req, res) => {
  return res.json(booksJson);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
