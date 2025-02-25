let express = require("express");
const { dbConnection } = require("./DBConnection");
const { ObjectId } = require("mongodb");
let app = express();

app.use(express.json());

//--------------------- URL/API
// ----------------------- READ/VIEW API ------------------------------------------
app.get("/student-read", async (req, res) => {
  // here myDBreturned contains the DB returned from the dbConnection module.
  let myDBreturned = await dbConnection();
  // after creating collection you can start inserting data to it.
  let studCollection = myDBreturned.collection("studDataCollection");

  // Retrieving the data to view
  let dataView = await studCollection.find().toArray();

  // To get the response after receiving / inserting the data
  let responseObj = {
    status: 1,
    msg: "Data Inserted",
    dataView,
  };

  res.send(responseObj);
});

// ------------------------------CREATE / INSERT API--------------------------------------------
app.post("/student-insert", async (req, res) => {
  // here myDBreturned contains the DB returned from the dbConnection module.
  let myDBreturned = await dbConnection();

  // after creating collection you can start inserting data to it.
  let studCollection = myDBreturned.collection("studDataCollection");

  // here we are creating object, getting the data from req.body as in JSON the data will be stored in body
  /*let objData = {
    studName: req.body.studName,
    studEmail: req.body.studEmail,
  };
  console.log(objData);*/

  // Destructuring the above object
  let { studName, studEmail } = req.body;
  let objData = { studName, studEmail };

  /* condition here checkEmail contains is to check whether different user entered same email id objData
      Here findOne checks for the email id from the studCollection. if it returns 'null' that means emails 
      different
  */
  let checkEmail = await studCollection.findOne({ studEmail });
  if (checkEmail) {
    return res.send({ status: 0, msg: "Email ID already exist" });
  }

  // Inserting the data received in objData
  let insertObjData = await studCollection.insertOne(objData);

  // To get the response after receiving / inserting the data
  let responseObj = {
    status: 1,
    msg: "Data Inserted",
    insertObjData,
  };

  res.send(responseObj);
});

/*-----------------------------------DELETE API-----------------------------------------*/
// Here :id is the param for delete it can be anything.
app.delete("/student-delete/:id", async (req, res) => {
  // params data are available in the req parameter, which returns object{id:anyNum} anyNum is number value passed for id:
  // if you use ? infront of the id? then parameter becomes optional
  // let paramsData = req.params;
  let { id } = req.params;
  let myDBreturned = await dbConnection();
  let studCollection = myDBreturned.collection("studDataCollection");

  // Here ObjectId() is predefined class/constructor from mongoDB
  let deleteResponse = await studCollection.deleteOne({
    _id: new ObjectId(id),
  });

  let responseObj = {
    status: 1,
    msg: "Data Deleted",
    deleteResponse,
  };

  res.send(responseObj);
});

/*--------------------------------UPDATE API-----------------------------------------*/
// data will be updated from req.body
// the id: will go to params as it needs to search the data based on the id to update

app.put("/student-update/:id", async (req, res) => {
  let { id } = req.params; // which id
  let { studName, studEmail } = req.body; // the data to be updated

  let objData = {};
  // Checking here if condition so that if user mke changes to one data also should get updated as it was showing null
  // previously and data wont change keeps the original data as it is
  // to check not to blank , null, undefined and assign only if condition is true
  if (studName !== "" && studName !== undefined && studName !== null) {
    objData["studName"] = studName;
  }

  // assigns the data below condition are met from $set: { studName, studEmail }
  if (studEmail !== "" && studEmail !== undefined && studEmail !== null) {
    objData["studEmail"] = studEmail;
  }
  // databse connection
  let myDBreturned = await dbConnection();
  let studCollection = myDBreturned.collection("studDataCollection");

  let updateResponse = await studCollection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { studName, studEmail } }
  );

  let responseObj = {
    status: 1,
    msg: "Data Updated",
    updateResponse,
  };
  res.send(responseObj);
});

app.listen("8000");
