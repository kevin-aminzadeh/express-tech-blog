import post from "./post";
import comment from "./comment";
import newPost from "./newPost";

window.addEventListener("load", () => {
  post.init();
  comment.init();
  newPost.init();
});
