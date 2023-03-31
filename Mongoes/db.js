// //

// const mongoose = require("mongoose");

// //create schema

// const BlogSchema = new mongoose.Schema({
//   author: String,
//   titel: String,
//   cretaedAt: Date,
//   content: String,
//   tags: [String],
// });

// //create a model out of this schema

// const Blog = mongoose.model("blog", BlogSchema);

// //to create schema

// // const blog = new Blog({
// //   author: "Subhransu Sekhar Mohanty",
// //   titel: "Learn marn stack",
// //   cretaedAt: new Date(),
// //   content: "React is good",
// //   tags: ["tech", "react"],
// // });

// async function main() {
//   const conn = await mongoose.connect("mongodb://localhost:27017/Blog");

//   console.log("db is connected");
//   //to save we can use save or insertMany(we have to give array of object"[{}]")
//   //but mongo preferd to .save
//   // await Blog.save();
//   const insertvalue = await Blog.insertMany([
//     {
//       author: "Richa sony",
//       titel: "mern stack developer",
//       cretaedAt: new Date(),
//       content: "She is very good in React",
//       tags: ["tech", "React", "Node", "css"],
//     },
//   ]);
//   console.log("data insert successfully");
//   //const result = await Blog.find();
//   // console.log(result);

//   conn.disconnect();
// }
// main();
//==============================

//

// const mongoose = require("mongoose");

// const connectionDb = mongoose.connect("mongodb://localhost:27017/Blog");

// const BlogSchema = new mongoose.Schema({
//   author: String,
//   titel: String,
//   cretaedAt: Date,
//   content: String,
//   tags: [String],
// });

// const blogModel = mongoose.model("blog", BlogSchema);

// module.export = {
//   connectionDb,
//   blogModel,
// };

const mongoose = require("mongoose");

const connectionDb = mongoose.connect("mongodb://127.0.0.1:27017/Blog");

//2 - helps us with some structure - Model and schema

// Model - blueprint

const BlogSchema = new mongoose.Schema(
  {
    author: String,
    titel: String,
    cretaedAt: String,
    content: String,
    tags: [String],
  },
  //You can disable the "__v" attribute in your Schema definitions by setting the versionKey option to false
  { versionKey: false }
);
const blogModel = mongoose.model("blog", BlogSchema);

module.exports = {
  connectionDb,
  blogModel,
};
