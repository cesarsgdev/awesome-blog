const express = require("express");
const router = express.Router();
const Post = require("../models/postsModel");

// Endpoint to get all blog posts => GET /api/posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json({ success: true, posts });
  } catch (e) {
    res.status(200).json({ success: false, message: e.message });
  }
});

// Endpoint to get a single blog post by :id => GET /api/posts/:id
router.get("/:id", async (req, res) => {
  res.status(200).json({
    message: `This is the route to get a single post by ID. You've gotten blog with ID ${req.params.id} `,
  });
});

// Endpoint to add a new blog post => POST /api/posts
router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(200).json({ success: true, post });
  } catch (e) {
    res.status(200).json({ success: false, error: e.message });
  }
});

// Endpoint to update a blog post by :id => PUT /api/posts/:id
router.put("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `You have updated blog post with ID ${req.params.id}` });
});

// Endpoint to delete a blog post by :id => DELETE /api/posts/:id
router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `You have deleted blog post with ID ${req.params.id}` });
});

module.exports = router;
