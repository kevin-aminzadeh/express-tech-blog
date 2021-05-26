import domMethods from "./domMethods";
import API from "./API";

// Handle Comment Deletion
async function handleCommentDelete(e) {
  e.preventDefault();
  // Post Data to Auth Endpoint
  const response = await fetch("/api/comments/" + e.target.dataset.id, {
    headers: { "Content-Type": "application/json" },
    method: "DELETE",
  });

  // If Request Was Successful, Redirect to Home Route
  if (response.ok) {
    document.location.replace("/");
    return;
  }

  // Else Alert User
  alert("Failed to Delete Post.");
}

// Handle Comment Update
async function handleCommentUpdate(commentId, postId) {
  // Create Element References
  const commentText = document.querySelector(
    `.comment-text-area[data-id="${commentId}"]`
  ).value;

  // Construct Post Data Object
  const commentData = { id: commentId, postId: postId, content: commentText };

  // Update Post Record In DB
  const response = await API.updateItem("comment", commentData);

  // If Request Was Successful, Redirect to Home Route
  if (response.ok) {
    document.location.replace("/");
    return;
  }

  // Else Alert User
  alert("Failed to Edit Comment.");
}

// Handle Comment Edit
function onCommentEdit(editBtnEl) {
  // Hide "Options" Button
  document
    .querySelector(`.dropdown[data-id="${editBtnEl.dataset.id}"]`)
    .classList.toggle("visually-hidden");
  // Show Cancel/Save Buttons
  document
    .querySelector(
      `.edit-comment-btn-group-wrapper[data-id="${editBtnEl.dataset.id}"]`
    )
    .classList.toggle("visually-hidden");

  // Render Edit Form
  domMethods.renderEditForm(
    ["comment-text"],
    ["comment-text-area"],
    editBtnEl.dataset.id
  );
}

export default {
  init: () => {
    // Create Element References
    const CommentFormEls = document.querySelectorAll(".comment-form");
    const commentEditBtnEls = document.querySelectorAll(".comment-edit-btn");
    const commentDeleteBtnEls = document.querySelectorAll(
      ".comment-delete-btn"
    );
    const cancelCommentEditBtnEls = document.querySelectorAll(
      ".cancel-comment-edit-btn"
    );
    const saveCommentEditBtnEls = document.querySelectorAll(
      ".save-comment-edit-btn"
    );

    // Attach Event Listeners To New Comment Forms
    if (CommentFormEls) {
      CommentFormEls.forEach((form) =>
        form.addEventListener("submit", async (e) => {
          e.preventDefault();
          const formData = new FormData(form);

          // Post Comment to API
          const response = await API.createItem("comment", {
            content: formData.get("commentInput"),
            postId: form.dataset.id,
          });

          // If Request Was Successful, Redirect to Home Route
          if (response.ok) {
            document.location.replace("/");
            return;
          }

          // Else Alert User
          alert("Failed to post comment.");
        })
      );
    }

    // Attach Event Listeners To Comment Edit Buttons
    if (commentEditBtnEls) {
      commentEditBtnEls.forEach((commentEditBtn) =>
        commentEditBtn.addEventListener("click", () => {
          onCommentEdit(commentEditBtn);
        })
      );
    }

    // Attach Event Listeners To Cancel Edit Buttons
    cancelCommentEditBtnEls.forEach((cancelCommentEditBtnEl) =>
      cancelCommentEditBtnEl.addEventListener("click", () => {
        onCommentEdit(cancelCommentEditBtnEl);
      })
    );

    // Attach Event Listeners To Save Edit Buttons
    saveCommentEditBtnEls.forEach((saveCommentEditBtnEl) =>
      saveCommentEditBtnEl.addEventListener("click", () => {
        handleCommentUpdate(
          saveCommentEditBtnEl.dataset.id,
          saveCommentEditBtnEl.dataset.postid
        );
      })
    );

    // Attach Event Listeners To "Delete Comment" Buttons
    if (commentDeleteBtnEls) {
      commentDeleteBtnEls.forEach((btn) =>
        btn.addEventListener("click", (e) => {
          handleCommentDelete(e);
        })
      );
    }
  },
};
