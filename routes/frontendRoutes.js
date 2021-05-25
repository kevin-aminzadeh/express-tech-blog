const router = require("express").Router();
const { PostController } = require("../controllers/index");

// Home Route
router.get("/", PostController.renderHome);

// Dashboard Route
router.get("/dashboard", PostController.renderDashboard);

// Dashboard Route
router.get("/new-post", (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("newPost", {
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login Route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", { signInActive: true });
});

// Register Route
router.get("/register", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("register");
});

module.exports = router;
