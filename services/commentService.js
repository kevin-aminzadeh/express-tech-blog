const { Comment } = require("../models/index");

// Create New Comment in DB
exports.createComment = async (commentData) => {
  try {
    const dbData = await Comment.create(commentData);
    return dbData;
  } catch (err) {
    throw err;
  }
};

// Update Comment Record
exports.updateComment = async (commentData) => {
  try {
    const res = await Comment.update(
      { content: commentData.content },
      {
        where: {
          id: commentData.id,
          owner_id: commentData.ownerId,
        },
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};

// Delete Comment Record
exports.updateComment = async (commentId, ownerId) => {
  try {
    const res = await Comment.destroy({
      where: {
        id: commentData.id,
        owner_id: commentData.ownerId,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
