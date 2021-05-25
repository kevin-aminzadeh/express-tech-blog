const PostService = require("../services/postService");

// Create New Post
exports.createPost = async (req, res, next) => {};

// Get All Posts
exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await PostService.getAllPosts();
    console.log(posts[0].comments);
    res.render("dashboard", {
      dashboardActive: true,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      userId: req.session.userId,
      posts: posts,
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.renderHome = async (req, res, next) => {
  try {
    const posts = await PostService.getAllPosts();

    res.render("home", {
      homeActive: true,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      userId: req.session.userId,
      posts: posts,
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.renderDashboard = async (req, res, next) => {
  try {
    const posts = await PostService.getAllPosts();

    res.render("dashboard", {
      dashboardActive: true,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
      userId: req.session.userId,
      posts: posts,
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
