const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const handleError = require("../handleError");
const ageMiddleware = require("../middlewares/ageMiddleware");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.render("posts", { posts });
  } catch (err) {
    handleError(res, err);
  }
});

router.get("/:id", ageMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found!" });
    res.json(post);
  } catch (err) {
    handleError(res, err);
  }
});

router.post("/", async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
    });
    await post.save();
    res.send(post);
  } catch (err) {
    handleError(res, err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(404).json({ message: "Post not found." });
    res.json(post);
  } catch (err) {
    handleError(res, err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) return res.status(404).json({ message: "Post not found." });
    res.json(post);
  } catch (err) {
    handleError(res, err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found." });
    res.json({ message: "Post deleted successfully." });
  } catch (err) {
    handleError(res, err);
  }
});

module.exports = router;
