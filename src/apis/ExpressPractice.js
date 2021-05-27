const express = require("express");

const app = express();
app.use((req, res, next) => {
  console.log("<h1>Helllloo</h1>");
  next();
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/", (req, res) => {
//   // req.query
//   // req.body
//   // req.header
//   // req.
// });

app.listen(3000);
