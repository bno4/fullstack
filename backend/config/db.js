const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongoose.set("stricQuery", false);
    mongoose.connect(process.env.MONGO_URI, () =>
      console.log("mongo connecté !")
    );
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
