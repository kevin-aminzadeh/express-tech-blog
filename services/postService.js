const { Post, User, Comment } = require("../models/index");

exports.createPost = async (userData) => {
  try {
    const dbData = await User.create(userData);

    const posts = dbData.map((item) => item.get({ plain: true }));
    return posts;
  } catch (err) {
    throw err;
  }
};

exports.getAllPosts = async () => {
  try {
    const dbData = await Post.findAll({
      attributes: ["id", "title", "content", "createdAt"],
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
    console.log(posts[0].comments);
    return posts;
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
