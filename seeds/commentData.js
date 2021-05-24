const { Comment } = require("../models");

const commentData = [
  {
    id: "1a4b4d35-f940-4b26-9e2a-4a476b93b40f",
    content: "Nice work! This helped me out a lot.",
    owner_id: "45b3a40a-5798-42f9-84dd-cb2cc0257197",
    post_id: "1c4b2a44-b2e0-4bca-9cd4-1384327eb0af",
  },
  {
    id: "5f9f93f3-206b-4766-9e8d-8873a873db49",
    content: "This is great!",
    owner_id: "45d6f1c7-c7b3-48d3-9c8c-645bf1c4653a",
    post_id: "05ea70a9-4f31-4e5b-9c8d-ae284d797c01",
  },
  {
    id: "248b4597-e982-4dcc-bf52-68fce6aee9bf",
    content: "Very informative.",
    owner_id: "8f10d887-656c-427b-955a-e6fe69a43c0d",
    post_id: "d4c5fa6d-ae1f-45fe-85b6-f910f4a942f8",
  },
];

const seedComment = () =>
  Comment.bulkCreate(commentData, {
    individualHooks: true,
  });

module.exports = seedComment;
