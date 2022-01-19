var express = require("express");
const path = require("path");
const cities = require("./services/searchService.js");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/cities/:searchString?", (req, res) => {
  const data = cities.getSearchResults(req.params.searchString || "");
  res.json(data);
});

app.get("/city/:name", (req, res) => {
  const data = cities.getCityDetails(req.params.name);
  res.json(data);
});

app.listen(8000, () => console.log("App listening on port 8000!"));
