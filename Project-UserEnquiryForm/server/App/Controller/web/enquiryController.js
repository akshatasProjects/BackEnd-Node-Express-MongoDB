const enquiryModel = require("../../Models/enquiry.model");

let enquiryInsert = (req, res) => {
  let { name, email, phone, message } = req.body;
  // when key and value are same we can use only one value
  let enquiry = new enquiryModel({
    name,
    email,
    phone,
    message,
  });
  enquiry
    .save()
    .then(() => {
      res.send({ status: 1, message: "Enquiry Saved Successfully" });
    })
    .catch((err) => {
      res.send({
        status: 0,
        message: "Error while saving enquiry",
        error: err,
      });
    });
};

let enquiryList = async (req, res) => {
  let enquiry = await enquiryModel.find();
  res.send({ status: 1, enquiryList: enquiry });
};

// DELETE  API
let enquiryDelete = async (req, res) => {
  let enquiryID = req.params.id;
  let enq = await enquiryModel.deleteOne({ _id: enquiryID });
  res.send({
    status: 1,
    message: `Enquiry with ${enquiryID} deleted successfully`,
    enq,
  });
};

// EDIT API
let editSingleRow = async (req, res) => {
  let enqID = req.params.id;
  let enquiryData = await enquiryModel.findOne({ _id: enqID });
  res.send({
    status: 1,
    enquiryData,
  });
};

// UPDATE
let enquiryUpdate = async (req, res) => {
  let enqID = req.params.id;
  let { name, email, phone, message } = req.body;
  let updateObj = {
    name,
    email,
    phone,
    message,
  };

  let updateRes = await enquiryModel.updateOne({ _id: enqID }, updateObj);
  res.send({ status: 1, message: "Updated the data Successfully" });
};

module.exports = {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  editSingleRow,
  enquiryUpdate,
};
