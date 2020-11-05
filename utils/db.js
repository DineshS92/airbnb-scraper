const mongoose = require("mongoose");

exports.connectToDB = async () => {
  await mongoose.connect("mongodb://mongo:27017/scraped-airbnb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to mongoDb");
};
