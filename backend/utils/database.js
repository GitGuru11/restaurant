const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect("mongodb://localhost:27017/jms")
    .then(() => {
      console.log("Database is successfully connected");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDatabase;
