var obj = {
  table: []
};
obj.table.push({id: 1, square:2});
var json = JSON.stringify(obj);

var a=["a","b","c","d"]
var b=["a","b","c","d"]

// create an express app
const express = require("express")
const app = express()

app.use(express.json())

// use the express-static middleware
app.use(express.static("public"))
// define the first route
app.get("/api", function (req, res) {
  res.send(json);
  })
app.get("/2/", function (req, res) {
    res.send(res);
    })
app.get("/3/", function (req, res) {
      res.send(b);
      })
app.get("/4/", function (req, res) {
        res.send("<h1>i/h1>");
        })  

// start the server listening for requests
app.listen(process.env.PORT || 5000, 
	() => console.log("Server is running...at port 5000"));

  