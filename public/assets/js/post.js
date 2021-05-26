import domMethods from "./domMethods";
import API from "./API";

function onPostEdit(editBtnEl) {
  // Hide "Options" Button
  editBtnEl.closest(".col-auto").classList.toggle("visually-hidden");
  // Show Cancel/Save Buttons
  document
    .querySelector(`.edit-btn-group[data-id="${editBtnEl.dataset.id}"]`)
    .classList.toggle("visually-hidden");
  // Render Edit Form
  domMethods.renderEditForm(
    ["post-content", "post-title"],
    ["post-content-text-area", "post-title-input"],
    editBtnEl.dataset.id
  );
}

async function handlePostDelete(e) {
  e.preventDefault();
  // Delete Post From DB
  const response = await API.deleteItem("post", e.target.dataset.id);

  // If Request Was Successful, Redirect to Home Route
  if (response.ok) {
    document.location.replace("/");
    return;
  }

  // Else Alert User
  alert("Failed to Delete Post.");
}

async function handlePostSave(postId) {
  // Create Element References
  const postTitle = document.querySelector(
    `.post-title-input[data-id="${postId}"]`
  ).value;
  const postContent = document.querySelector(
    `.post-content-text-area[data-id="${postId}"]`
  ).value;

  // Construct Post Data Object
  const postData = { id: postId, title: postTitle, content: postContent };

  // Update Post Record In DB
  const response = await API.updateItem("post", postData);

  // If Request Was Successful, Redirect to Home Route
  if (response.ok) {
    document.location.replace("/");
    return;
  }

  // Else Alert User
  alert("Failed to post comment.");
}

export default {
  init: () => {
    // Create Element References
    const editBtnEls = document.querySelectorAll(".post-edit-btn");
    const deleteBtnEls = document.querySelectorAll(".post-delete-btn");
    const cancelEditBtnEls = document.querySelectorAll(".cancel-edit-btn");
    const saveEditBtnEls = document.querySelectorAll(".save-edit-btn");
    const commentBtnEls = document.querySelectorAll(
      ".comment-btn, .comment-count-btn"
    );

    // Attach Event Listeners To Edit Buttons
    if (editBtnEls) {
      editBtnEls.forEach((editBtn) =>
        editBtn.addEventListener("click", () => {
          onPostEdit(editBtn);
        })
      );
    }

    // Add Event Listener To Delete Buttons
    if (deleteBtnEls) {
      deleteBtnEls.forEach((deleteBtn) =>
        deleteBtn.addEventListener("click", (e) => {
          handlePostDelete(e);
        })
      );
    }

    // Attach Event Listeners To Cancel Edit Buttons
    if (cancelEditBtnEls) {
      cancelEditBtnEls.forEach((cancelEditBtn) =>
        cancelEditBtn.addEventListener("click", () => {
          onPostEdit(cancelEditBtn);

          // Reset Title Input Text To Original Post Title Text
          document.querySelector(
            `.post-title-input[data-id="${cancelEditBtn.dataset.id}"]`
          ).value = document.querySelector(
            `.post-title[data-id="${cancelEditBtn.dataset.id}"]`
          ).innerText;

          // Reset Post Content Text Area Text To Original Post Content Text
          document.querySelector(
            `.post-content-text-area[data-id="${cancelEditBtn.dataset.id}"]`
          ).value = document.querySelector(
            `.post-content[data-id="${cancelEditBtn.dataset.id}"]`
          ).innerText;

          cancelEditBtn.parentElement.classList.toggle("visually-hidden");
          document
            .querySelector(
              `.post-options-btn[data-id="${cancelEditBtn.dataset.id}"]`
            )
            .classList.toggle("visually-hidden");
        })
      );
    }

    // Attach Event Listeners To Cancel Edit Buttons
    if (saveEditBtnEls) {
      saveEditBtnEls.forEach((saveEditBtn) =>
        saveEditBtn.addEventListener("click", async () => {
          await handlePostSave(saveEditBtn.dataset.id);
          saveEditBtn.parentElement.classList.toggle("visually-hidden");
          document
            .querySelector(
              `.post-options-btn[data-id="${saveEditBtn.dataset.id}"]`
            )
            .classList.toggle("visually-hidden");
        })
      );
    }

    // Attach Event Listeners To Comment buttons
    if (commentBtnEls) {
      commentBtnEls.forEach((btn) => {
        btn.addEventListener("click", () => {
          domMethods.toggleRenderComments(btn.dataset.id);
        });
      });
    }
  },
};
