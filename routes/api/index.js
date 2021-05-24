const router = require("express").Router();
const commentRoutes = require("./comment.routes");
const PostRoutes = require("./post.routes");
const UserRoutes = require("./user.routes");

router.use("/comments", commentRoutes);
router.use("/posts", PostRoutes);
router.use("/auth", UserRoutes);

module.exports = router;
