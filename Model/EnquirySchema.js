const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    service: {
        type: String,
        required: true
    }
})

const enquiryModel = mongoose.model("EnquiryEntry", enquirySchema);

module.exports = enquiryModel;
