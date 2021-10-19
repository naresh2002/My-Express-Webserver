const { text } = require("express");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//  Set static path 
app.use(express.static(path.join(__dirname, "public")));

app.get("/users", (req, res) => {
  let users = [
    {
      Name : "Naresh",
      Age : 21,
      Gender : "Male"
    },
    {
      Name : "Sukhpreet",
      Age : 21,
      Gender : "Male"
    },
    {
      Name : "Isha",
      Age : 20,
      Gender : "Female"
    }
  ]

  res.json(users);
});

app.get("/download", (req, res) => {
  res.download(path.join(__dirname, "/downloads/pdf.pdf"))
});

app.get("/about", (req, res) => {
  res.redirect('/about.html'); 
});

app.post('/subscribe', (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  console.log(name + " has subscibed with " + email);
});

app.listen(3000, () => {
  console.log("Server started at port 3000 :)");
});
