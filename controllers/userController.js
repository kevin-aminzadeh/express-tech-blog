const UserService = require("../services/userService");

// Create New User
exports.registerUser = async (req, res, next) => {
  try {
    // If User is Already Logged In Throw Error
    if (req.session.loggedIn) {
      throw Error("You Are Currently Logged In.");
    }

    // Validate Request Data
    if (!req.body.username || !req.body.email || !req.body.password) {
      throw Error("Invalid Request. Please Provide All Required Information.");
    }

    // Create User in DB
    const userData = await UserService.createUser(req.body);

    // Update User's Session Data
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
      res.status(201).json("User Account Created Successfully.");
    });
  } catch (err) {
    res.status(400).json(err.toString());
  }
};

// Login
exports.logIn = async (req, res, next) => {
  try {
    // If User is Already Logged In Throw Error
    if (req.session.loggedIn) {
      throw Error("You Are Currently Logged In.");
    }

    // Validate Request Data
    if (!req.body.email || !req.body.password) {
      console.log(req.body);
      throw Error("Incorrect Email or Password, Please Try Again.");
    }

    // Fetch User Record From UserService
    const userData = await UserService.getUserByEmail(req.body.email);

    // Run Password Validation Check
    const validPassword = await userData.checkPassword(req.body.password);

    // If Password is Invalid Throw Error
    if (!validPassword) {
      throw Error("Incorrect Email or Password, Please Try Again.");
    }

    // Update User's Session Data
    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
      res.status(200).json("Login Successful.");
    });
  } catch (err) {
    console.log(req.body);
    console.log(err);
    res.status(400).send(err.toString());
  }
};

// Logout
exports.logOut = async (req, res, next) => {
  try {
    // If User Is Logged In, Destroy Session
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(200).json("Logout Successful.");
      });
      return;
    }

    throw Error("Unauthorized.");
  } catch (err) {
    res.status(401).json(err.toString());
  }
};
