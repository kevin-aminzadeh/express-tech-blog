const router = require("express").Router();
const { CommentController } = require("../../controllers");

// Create New Comment
router.post("/", CommentController.createComment);

// Update Existing Comment
router.put("/", CommentController.updateComment);

// Delete Comment
router.delete("/:id", CommentController.deleteComment);

module.exports = router;
