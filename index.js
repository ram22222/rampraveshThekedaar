const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const blogRoutes = require("./View/blogRoutes");
const enquiryRoutes = require("./View/enquiryRoutes");
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors({
    origin: "https://rampraveshthekedaar.in"
}));
app.use(blogRoutes, enquiryRoutes);

mongoose.connect(`mongodb+srv://Amit:${process.env.REACT_APP_ACCESS_KEY
    }@rampraveshthekedar.1amjyvv.mongodb.net/blogData?retryWrites=true&w=majorityy`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected Successfully.");
}).catch(() => {
    console.log("DB Connection Failed.");
});

app.listen(process.env.PORT || 3001, () => {
    console.log("Server started at port 3001");
});
