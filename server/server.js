const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const compression = require("compression");

const app = express();
const server = require("http").Server(app);

//Server

// Body parser middleware (should be before other app.use())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

///compress
app.use(compression());

// Set static folder
app.use(express.static(path.resolve(__dirname, "../", "build")));
// app.use(express.static(path.resolve("build")));

app.get("*", (request, response) => {
  // console.log(__dirname);
  // console.log(path.resolve("build"));
  console.log(path.resolve(__dirname, "../", "build", "index.html"));
  // console.log(path.resolve(__dirname, "../", "build"));
  response.sendFile(path.resolve(__dirname, "../", "build", "index.html"));
});

// Set static folder
// app.use(express.static(path.resolve("build")));

// app.get("*", (request, response) => {
//   response.sendFile(path.resolve("build", "index.html"));
// });

/////PORT config and listening
const port = process.env.PORT || 5000;
// app.listen(port, () => {
//   console.log(`Server running on ${port}`);
// });

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
