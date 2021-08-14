const express = require("express");
const api = require("./server/route/api");
const data = require("./data");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", api);



const port = 8080;
app.listen(port, () => {
  console.log("Running on port 8080");
});
