const enquiryModel = require("../../models/enquiry.model");

/*-------------------INSERT FUNCTIONALITY-----------------*/
let enquiryInsert = (req, res) => {
  let { userName, userEmail, userPhone, userMsg } = req.body;

  // assigning values to schema variable
  let model = new enquiryModel({
    // schemaName : req.body destructured values
    name: userName,
    email: userEmail,
    phone: userPhone,
    message: userMsg,
  });
  console.log(model);
  model
    .save()
    .then(() => {
      res.send({ status: 1, message: "Enquiry data saved successfully" });
    })
    .catch((err) => {
      res.send({
        status: 0,
        message: "Error while saving the data",
        error: err,
      });
    });
};

/*---------------------READ----------------------------*/
let enquiryList = async (req, res) => {
  let enquiryList = await enquiryModel.find();
  res
    .status(200)
    .json({ status: 1, message: "Enquiry List", data: enquiryList });
};

/*---------------------DELETE----------------------------*/
let deleteEnq = async (req, res) => {
  let enqID = req.params.id;
  let deletedEnq = await enquiryModel.deleteOne({ _id: enqID });
  res.send({
    status: 1,
    message: "Enquiry Deleted Successfully",
    id: enqID,
    delRes: deletedEnq,
  });
};

let updateEnq = async (res, req) => {
  let enqID = req.params.id;
  let { userName, userEmail, userPhone, userMsg } = req.body;
  let updateObj = {
    name: userName,
    email: userEmail,
    phone: userPhone,
    message: userMsg,
  };

  let updateRes = await enquiryModel.updateOne({ _id: enqID }, updateObj);

  res.send({
    status: 1,
    message: "Enquiry Updated Successfully",
    updateRes,
  });
};

module.exports = { enquiryInsert, enquiryList, deleteEnq, updateEnq };
