const { User } = require("../models");

const userData = [
  {
    id: "8f10d887-656c-427b-955a-e6fe69a43c0d",
    username: "richardhendricks",
    email: "richard@example.com",
    password: "password123",
  },
  {
    id: "45d6f1c7-c7b3-48d3-9c8c-645bf1c4653a",
    username: "janedoe",
    email: "email@example.com",
    password: "password123",
  },
  {
    id: "45b3a40a-5798-42f9-84dd-cb2cc0257197",
    username: "johnsmith",
    email: "john@example.com",
    password: "password123",
  },
];

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
  });

module.exports = seedUser;
