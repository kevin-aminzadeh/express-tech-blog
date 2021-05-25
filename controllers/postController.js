const PostService = require("../services/postService");

// Create New Post
exports.createPost = async (req, res, next) => {};

// Get All Posts
exports.getAllPosts = async (req, res, next) => {
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

exports.updatePost = async (req, res, next) => {
  // Validate Request Parameters/Queries
};

exports.deletePost = async (req, res, next) => {
  // Validate Request Parameters/Queries
};

exports.deletePost = async (req, res, next) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error("You Are Not Authorized To Perform This Action.");
    }

    // If Request Data is Invalid, Reject Request
    if (!req.params.id || !req.session.userId) {
      throw Error("Invalid Request Data.");
    }

    // Delete Post
    await PostService.deletePost(req.params.id, req.session.userId);

    res.status(200).json("Post Successfully Deleted");
  } catch (err) {
    res.status(400).json(err.toString());
  }
};
