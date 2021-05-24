const router = require("express").Router();

// Home Route
router.get("/", (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    res.status(400).json(err);
  }
});

// Dashboard Route
router.get("/dashboard", (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(400).json(err);
  }
});

// Dashboard Route
router.get("/new-post", (req, res) => {
  try {
    res.render("newPost");
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login Route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

// Register Route
router.get("/register", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("register");
});

module.exports = router;
