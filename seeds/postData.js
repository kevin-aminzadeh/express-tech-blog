const { Post } = require("../models");

const postData = [
  {
    title: "Python List Remove Duplicates",
    content: "The many ways of removing duplicates from a list in Python.",
    owner_id: "66c13eaef-dba1-46ce-b85b-fa95407283a1",
  },
  {
    title: "Why MVC Is So Important",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure tenetur veniam sint provident porro minima itaque, quae amet tempore reiciendis? Omnis ex veritatis atque nemo fuga impedit libero suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure tenetur veniam sint provident porro minima itaque, quae amet tempore reiciendis? Omnis ex veritatis atque nemo fuga impedit libero suscipit?",
    owner_id: "8858bd1b-a52d-4702-a0c1-5afd5f58aaf2",
  },
  {
    title: "How to Create and Read QR code in Python",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure tenetur veniam sint provident porro minima itaque, quae amet tempore reiciendis? Omnis ex veritatis atque nemo fuga impedit libero suscipit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iure tenetur veniam sint provident porro minima itaque, quae amet tempore reiciendis? Omnis ex veritatis atque nemo fuga impedit libero suscipit?",
    owner_id: "6864be8b-a531-4fdb-850a-7e4240920ef1",
  },
];

const seedPost = () =>
  Post.bulkCreate(postData, {
    individualHooks: true,
  });

module.exports = seedPost;
