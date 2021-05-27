const fs = require("fs");
fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("errrrrorrr");
  }
  console.log("Async", data.toString("utf8"));
});

const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

// fs.appendFile("./hello.txt", " This is so cool!", (err) => console.log(err));
