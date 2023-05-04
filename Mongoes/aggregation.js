const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected successfully to the database");
    // Continue with the aggregation query
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

const yourSchema = new mongoose.Schema({
  _id: Number,
  city: String,
  pop: Number,
  state: String,

  // Define other fields and their types
});
const YourModel = mongoose.model("zips", yourSchema);

YourModel.aggregate([
  // Add your aggregation stages here

  {
    $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } },
  },
  //   { $match: { field: "value" } },
  //   { $group: { _id: "$field", count: { $sum: 1 } } },
])
  .then((result) => {
    console.log("Aggregation result:", result);
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error executing the aggregation query:", error);
    mongoose.connection.close();
  });
