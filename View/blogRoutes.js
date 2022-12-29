const express = require("express");
const blogRoutes = express.Router();
const createBlogModel = require("../Model/CreateBlogSchemas");

// CREATE BLOG ROUTES
blogRoutes.get("/blog", (req, res) => {
  createBlogModel
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

blogRoutes.get("/blog/:blogId", (req, res) => {
  const blogId = req.params.blogId;
  createBlogModel
    .findOne({ imgId: blogId })
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

blogRoutes.post("/create-blog", (req, res) => {
  const newBlog = new createBlogModel({
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    imgId: req.body.imgId,
  });

  newBlog
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = blogRoutes;
