const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const routes = require("./routes");
const app = express();

// Import Sequelize Config
const sequelize = require("./config/connection");

// Configure Sequelize Store
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Configure Server Port
const PORT = process.env.PORT || 3001;

// Instantiate Express Handlebars
const hbs = exphbs.create({ helpers });

// Configure Sessions
const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Configure View Engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure Static Asset Path
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Start Server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("listening on: " + PORT);
  });
});
