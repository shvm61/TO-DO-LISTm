// Importing all essential packages

const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const db = require("./config/mongoose");

app.use(express.static("./assets"));

// Url Pareser
app.use(express.json());
app.use(express.urlencoded());
// use express router
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Server start
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
