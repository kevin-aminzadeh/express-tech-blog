const CommentService = require("../services/comment.service");

// Create New Comment
exports.createComment = async (req, res, next) => {};

// Get All Comments
exports.getComments = async (req, res, next) => {
  // Validate Request Parameters/Queries

  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;

  try {
    const comments = await CommentService.getComments({}, page, limit);
    return res.status(200).json({
      status: 200,
      data: comments,
      message: "Successfully Retrieved Comments.",
    });
  } catch (err) {
    return res.status(400).json({ status: 400, message: err.message });
  }
};

exports.getComment = async (req, res, next) => {
  // Validate Request Parameters/Queries
};

exports.updateComment = async (req, res, next) => {
  // Validate Request Parameters/Queries
};

exports.deleteComment = async (req, res, next) => {
  // Validate Request Parameters/Queries
};
