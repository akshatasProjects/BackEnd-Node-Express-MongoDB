let express = require("express");
const {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  editSingleRow,
  enquiryUpdate,
} = require("../../Controller/web/enquiryController");
let enquiryRouter = express.Router();

enquiryRouter.post("/insert", enquiryInsert);
enquiryRouter.get("/view", enquiryList);
enquiryRouter.delete("/delete/:id", enquiryDelete);
// EDIT URL
enquiryRouter.get("/editrow/:id", editSingleRow);
// UPdate
enquiryRouter.put("/update/:id", enquiryUpdate);

module.exports = enquiryRouter;
