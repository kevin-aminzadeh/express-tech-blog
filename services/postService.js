const { Post, User, Comment } = require("../models/index");

// Create New Post in DB
exports.createPost = async (postData) => {
  try {
    const dbData = await Post.create(postData);

    return dbData;
  } catch (err) {
    throw err;
  }
};

exports.getAllPosts = async () => {
  try {
    const dbData = await Post.findAll({
      attributes: ["id", "title", "content", "createdAt"],
      order: [
        ["createdAt", "desc"],
        [Comment, "createdAt", "DESC"],
      ],
      include: [
        {
          model: User,
          as: "owner",
          attributes: ["id", "username"],
        },
        {
          model: Comment,
          attributes: ["id", "content", "createdAt"],
          include: [
            {
              model: User,
              as: "owner",
              attributes: ["id", "username"],
            },
          ],
        },
      ],
    });

    const posts = dbData.map((item) => item.get({ plain: true }));

    return posts;
  } catch (err) {
    throw err;
  }
};

exports.updatePost = async (postData) => {
  try {
    const res = await Post.update(
      { title: postData.title, content: postData.content },
      {
        where: {
          id: postData.id,
          owner_id: postData.ownerId,
        },
      }
    );
    return res;
  } catch (err) {
    throw err;
  }
};

exports.deletePost = async (postId, userId) => {
  try {
    const res = await Post.destroy({
      where: {
        id: postId,
        owner_id: userId,
      },
    });
    return res;
  } catch (err) {
    throw err;
  }
};
