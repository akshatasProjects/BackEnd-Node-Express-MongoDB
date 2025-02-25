const express = require("express");
const mongoose = require("mongoose");

let enquiryModel = require("./App/models/enquiry.model");

// IMPORTING ROUTES
const enquiryRoutes = require("./App/Routes/website/enquiryRoutes");
require("dotenv").config();

// Middleware express
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.use("/website/api/enquiry", enquiryRoutes);

//----------- Connect to MongoDB
mongoose.connect(process.env.DBURL).then(() => {
  console.log("Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`);
  });
});

// http://localhost:8000/website/api/enquiry/enquiry-list
