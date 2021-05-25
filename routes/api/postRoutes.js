const router = require("express").Router();
const { PostController } = require("../../controllers");

router.post("/", PostController.createPost);

router.put("/", PostController.updatePost);

router.delete("/:id", PostController.deletePost);

module.exports = router;
