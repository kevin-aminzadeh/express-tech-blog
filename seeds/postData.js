const { Post } = require("../models");

const postData = [
  {
    id: "1c4b2a44-b2e0-4bca-9cd4-1384327eb0af",
    title: "Python List Remove Duplicates",
    content: "The many ways of removing duplicates from a list in Python.",
    owner_id: "8f10d887-656c-427b-955a-e6fe69a43c0d",
  },
  {
    id: "d4c5fa6d-ae1f-45fe-85b6-f910f4a942f8",
    title: "Why MVC Is So Important",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure tenetur veniam sint provident porro minima itaque, quae amet tempore reiciendis? Omnis ex veritatis atque nemo fuga impedit libero suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure tenetur veniam sint provident porro minima itaque, quae amet tempore reiciendis? Omnis ex veritatis atque nemo fuga impedit libero suscipit?",
    owner_id: "45d6f1c7-c7b3-48d3-9c8c-645bf1c4653a",
  },
  {
    id: "05ea70a9-4f31-4e5b-9c8d-ae284d797c01",
    title: "How to Create and Read QR code in Python",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure tenetur veniam sint provident porro minima itaque, quae amet tempore reiciendis? Omnis ex veritatis atque nemo fuga impedit libero suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure tenetur veniam sint provident porro minima itaque, quae amet tempore reiciendis? Omnis ex veritatis atque nemo fuga impedit libero suscipit?",
    owner_id: "45b3a40a-5798-42f9-84dd-cb2cc0257197",
  },
];

const seedPost = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
  });

module.exports = seedPost;
