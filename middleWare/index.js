const express = require("express");
const featureRouter = require("./routes/products.route");
const app = express();

app.use(express.json());

const timeLogger = (req, res, next) => {
  const startTime = new Date().getTime();
  console.log("startTime " + startTime);
  next();
  const endTime = new Date().getTime();
  console.log("endTime " + endTime);

  console.log(endTime - startTime);
};

const welcome = (req, res, next) => {
  console.log("welcome");
  next();

  console.log("bye");
};

app.use(welcome);
app.use(timeLogger);
app.use("/products", featureRouter);

app.get("/", (req, res) => {
  console.log("home router");
  res.send("home");
});
//if we want you can add  middle ware for particular router
app.get("/about", welcome, (req, res) => {
  console.log("about router");
  res.send("about");
});

const auth = (req, res, next) => {
  if (req.query.name === "admin") {
    next();
  } else {
    res.send("user is not auth");
  }
};

app.get("/contact", auth, (req, res) => {
  console.log("contact router");
  res.send("contact");
});

app.post("/signin", (req, res) => {
  console.log(req.body);
  res.send("post");
});

app.listen(3000, () => {
  console.log("server listen at 3000");
});
