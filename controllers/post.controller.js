const PostService = require("../services/post.service");

// Create New Post
exports.createPost = async (req, res, next) => {};

// Get All Posts
exports.getPosts = async (req, res, next) => {
  // Validate Request Parameters/Queries

  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;

  try {
    const posts = await PostService.getPosts({}, page, limit);
    return res.status(200).json({
      status: 200,
      data: posts,
      message: "Successfully Retrieved Posts.",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.getPost = async (req, res, next) => {
  // Validate Request Parameters/Queries
};

exports.updatePost = async (req, res, next) => {
  // Validate Request Parameters/Queries
};

exports.deletePost = async (req, res, next) => {
  // Validate Request Parameters/Queries
};
