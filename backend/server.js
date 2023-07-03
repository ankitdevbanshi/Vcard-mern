let express = require("express");
require("dotenv").config();
let cors = require("cors");
let app = express();
app.use(cors());
app.use(express.json());
let contactModel = require("./db/contactModel");
let mongoose = require("./db/DB");

app.post("/contactus", async (req, res) => {
  if (req.body.name && req.body.email) {
    try {
      await contactModel.create({
        clientName: req.body.name,
        email: req.body.email,
        message: req.body.message,
      });
      return res.send({
        status: 200,
        message: "Thank you! for your interest, We will contact you soon!",
      });
    } catch (err) {
      return res.send({ status: "error", message: err.message });
    }
  } else {
    return res.send({ status: "error", message: "something went wrong" });
  }
});

app.listen(4000);
