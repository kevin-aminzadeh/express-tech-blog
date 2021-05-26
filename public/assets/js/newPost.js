import API from "./API";

export default {
  init: () => {
    const newPostForm = document.querySelector("#newPostForm");

    if (newPostForm) {
      newPostForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = new FormData(newPostForm);

        // Create Post in DB
        const response = await API.createItem("post", {
          title: formData.get("title"),
          content: formData.get("content"),
        });

        // If Request Was Successful, Redirect to Home Route
        if (response.ok) {
          document.location.replace("/");
          return;
        }

        // Else Alert User
        alert("Failed to Publish Post.");
      });
    }
  },
};
