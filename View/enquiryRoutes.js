const express = require("express");
const enquiryRoutes = express.Router();
const enquiryModel = require("../Model/EnquirySchema");

enquiryRoutes.post("/services", (req, res) => {
  const enquiry = new enquiryModel({
    name: req.body.name,
    address: req.body.address,
    number: req.body.number,
    email: req.body.email,
    service: req.body.service,
  });

  enquiry
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = enquiryRoutes;
