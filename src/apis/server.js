import { database } from "./dummyAPI";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(3000, () => {
  console.log("app is running on port 3000");
});

app.get("/", (req, res) => {
  res.send(database.users);
});

app.get("/posts", (req, res) => {
  res.send(database.posts);
});

app.post("/signin", (req, res) => {
  console.log(req.body.email === database.users[0].email);
  console.log(req.body.password === database.users[0].password);
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error logging in");
  }
});

app.post("/register", (req, res) => {
  const { email, name, password, username } = req.body;
  database.users.push({
    id: "125",
    username: username,
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

app.post("/newpost", (req, res) => {
  const { username, title, content } = req.body;
  database.posts.push({
    username: username,
    title: title,
    content: content,
  });
  res.json(database.posts[database.posts.length - 1]);
});
