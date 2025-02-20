// CREATING SERVER USING EXPRESS

let express = require("express");
require("dotenv").config();
const { checkToken } = require("./MiddleWare-checkToken");
let app = express();

console.log(process.env.myToken);
app.use(express.json());

// creating the route
app.get("/", (request, response) => {
  response.send({ send: 1, msg: "Home Page API through express" });
});

app.get("/news", checkToken, (request, response) => {
  response.send({ send: 2, msg: "News API" });
});

// Param Data(Dynamic Data)
app.get("/news/:id", (req, res) => {
  let newsID = req.params.id;
  res.send("News Details API" + "-" + newsID);
});

app.get("/products", (request, response) => {
  response.send({ send: 1, msg: "This is a product page" });
});

// POST
app.post("/login", (request, response) => {
  console.log(request.body); // output will be Object
  // sending the response back to frontend - Method 1
  // response.send({
  //   send: 2,
  //   msg: "This is a Login Form ",
  //   bodyData: request.body,
  //   queryData: request.query,
  // }); // whatever the output is attached to data in object

  // sending the response back to frontend - Method 2
  response.status(200).json({
    send: 2,
    msg: "This is a Login Form ",
    bodyData: request.body,
    queryData: request.query,
  });
});

// running the server
app.listen("8000");
