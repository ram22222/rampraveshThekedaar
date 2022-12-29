const mongoose = require("mongoose");

const createBlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    imgId: {
        type: Number,
        required: true
    }
})

const createBlogModel = mongoose.model("blogs", createBlogSchema);

module.exports = createBlogModel;
