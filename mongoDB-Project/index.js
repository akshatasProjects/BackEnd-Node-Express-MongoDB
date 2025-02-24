let express = require("express");
const { dbConnection } = require("./DBConnection");
let app = express();

app.use(express.json());

//--------------------- URL
app.get("/student-read", (req, res) => {
  res.send("Student View API");
});

// CREATE
app.post("/student-insert", async (req, res) => {
  // connecting to db file and getting returned value of db
  let myDBConn = await dbConnection();
  let studCollection = myDBConn.collection("newStudent");
  res.send("Student Insert/Create API");

  // creating the object to get the data
  // let obj = {
  //   studName: req.body.studName,
  //   studEmail: req.body.studEmail,
  // };
  // console.log(obj);

  // Object Destructuring the above data obj
  let { studName, studEmail } = req.body;
  let obj = { studName, studEmail };
});

// READ

// UPDATE

// DELETE

app.listen("8000");

// 3:07
