const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

// User and Post Model Relationships
User.hasMany(Post, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "id",
  as: "owner_id",
});

// User and Comment Model Relationships
User.hasMany(Comment, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "id",
  as: "owner_id",
});

// Post and Comment Model Relationships
Post.hasMany(Comment, {
  foreignKey: "id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "id",
  as: "post_id",
});

module.exports = { Comment, Post, User };
