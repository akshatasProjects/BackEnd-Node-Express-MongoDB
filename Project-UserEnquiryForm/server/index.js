let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
const enquiryRouter = require("./App/Routes/web/enquiryRoutes");
require("dotenv").config();
let app = express();
app.use(cors());

app.use(express.json());

// Routes
app.use("/api/website/enquiry", enquiryRouter);

// connect mongoDB
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3000, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log(err);
  });
