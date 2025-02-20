let myToken = "123456";

// Custom middleware
let checkToken = (req, res, next) => {
  if (req.query.token == "" || req.query.token == undefined) {
    return res.send({
      status: 0,
      msg: "Please fill the Token",
    });
  }

  if (req.query.token != myToken) {
    return res.send({
      status: 0,
      msg: "Please fill the Correct Token",
    });
  }
  next();
};
module.exports = { checkToken };
