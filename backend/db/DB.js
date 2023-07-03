let mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

module.exports = mongoose;

// ankitdevbanshi4
// bwgj5FUWVZuNm2O6
