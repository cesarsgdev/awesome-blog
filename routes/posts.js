const express = require("express");
const router = express.Router();

// Endpoint to get all blog posts => GET /api/posts
router.get("/", async (req, res) => {
  res.status(200).json({ message: `This is the route to get all posts...` });
});

// Endpoint to get a single blog post by :id => GET /api/posts/:id
router.get("/:id", async (req, res) => {
  res.status(200).json({
    message: `This is the route to get a single post by ID. You've gotten blog with ID ${req.params.id} `,
  });
});

// Endpoint to add a new blog post => POST /api/posts
router.post("/", (req, res) => {
  res.status(200).json({ message: `You have posted a new blog!` });
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
