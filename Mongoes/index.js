const { connectionDb, blogModel } = require("./db.js");
const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to home page");
});

app.get("/blogs", async (req, res) => {
  const results = await blogModel.find();
  console.log("get data from db");
  res.send(results);
});

app.post("/addBlogs", async (req, res) => {
  //console.log(req.body);
  const { author, titel, cretaedAt, content, tags } = req.body;
  //console.log(req.body);
  if (cretaedAt) {
    //console.log(new Date());
    let cretaedAtdata = new Date();
    console.log(x);
  }
   await blogModel.insertMany({ author, titel, cretaedAt, content, tags });
  res.send("Db is added");
});
app.listen(8080, async () => {
  try {
    await connectionDb;
    console.log("connected to db successfully");
    console.log("server listening 8080");
  } catch (e) {
    console.log("db error");
  }
});
