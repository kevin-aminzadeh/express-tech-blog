const router = require("express").Router();

// Home Route
router.get("/", (req, res) => {
  try {
    res.render("home", {
      homeActive: true,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Dashboard Route
router.get("/dashboard", (req, res) => {
  try {
    if (!req.session.loggedIn) {
      res.redirect("/");
      return;
    }
    res.render("dashboard", {
      dashboardActive: true,
      loggedIn: req.session.loggedIn,
      username: req.session.username,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

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
