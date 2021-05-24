const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

// User and Post Model Relationships
User.hasMany(Post, {
  foreignKey: "owner_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "owner_id",
  as: "owner",
});

// User and Comment Model Relationships
User.hasMany(Comment, {
  foreignKey: "owner_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "owner_id",
  as: "owner",
});

// Post and Comment Model Relationships
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  as: "parentPost",
});

module.exports = { User, Post };
