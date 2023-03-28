const { Router } = require("express");

const featureRouter = Router();
featureRouter.get("/", (req, res) => {
  res.send("product router home");
});
module.exports = featureRouter;
