const router = require("express").Router();
const commentRoutes = require("./commentRoutes");
const PostRoutes = require("./postRoutes");
const UserRoutes = require("./userRoutes");

router.use("/comments", commentRoutes);
router.use("/posts", PostRoutes);
router.use("/auth", UserRoutes);

module.exports = router;
