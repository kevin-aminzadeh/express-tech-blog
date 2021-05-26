const CommentService = require("../services/commentService");

// Create New Comment
exports.createComment = async (req, res, next) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error("You Must Be Logged In To Comment.");
    }

    // If Request Data is Invalid, Reject Request
    if (!req.body.content || !req.body.postId) {
      throw Error("Invalid Request Data.");
    }

    // Create Comment Object
    const comment = {
      content: req.body.content,
      owner_id: req.session.userId,
      post_id: req.body.postId,
    };

    // Create Comment in DB
    await CommentService.createComment(comment);
    res.status(200).json("Comment Created Successfully.");
  } catch (err) {
    res.status(400).json(err.toString());
  }
};

// Edit Comment
exports.updateComment = async (req, res, next) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error("You Must Be Logged In To Comment.");
    }

    // If Request Data is Invalid, Reject Request
    if (!req.body.content || !req.body.postId || !req.body.id) {
      throw Error("Invalid Request Data.");
    }

    // Construct Comment Object
    const comment = {
      id: req.body.id,
      content: req.body.content,
      owner_id: req.session.userId,
      post_id: req.body.postId,
    };

    console.log(comment);

    // Update Comment
    await CommentService.updateComment(comment);

    res.status(200).json("Comment Successfully Updated");
  } catch (err) {
    res.status(400).json(err.toString());
  }
};

// Delete Comment
exports.deleteComment = async (req, res, next) => {
  try {
    // If User is Not Logged in, Reject Request
    if (!req.session.loggedIn) {
      throw Error("You Are Not Authorized To Perform This Action.");
    }

    // If Request Data is Invalid, Reject Request
    if (!req.params.id || !req.session.userId) {
      throw Error("Invalid Request Data.");
    }

    // Delete Comment
    await CommentService.deleteComment(req.params.id, req.session.userId);

    res.status(200).json("Comment Successfully Deleted");
  } catch (err) {
    res.status(400).json(err.toString());
  }
};
