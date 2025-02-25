let express = require("express");
let enquiryRoutes = express.Router();
// API
const {
  enquiryInsert,
  enquiryList,
  deleteEnq,
  updateEnq,
} = require("../../Controllers/website/userEnquiryController");

enquiryRoutes.post("/enquiry-insert", enquiryInsert);
enquiryRoutes.get("/enquiry-list", enquiryList);
enquiryRoutes.delete("/enquiry-list/:id", deleteEnq);
enquiryRoutes.put("/enquiry-update/:id", updateEnq);

module.exports = enquiryRoutes;
