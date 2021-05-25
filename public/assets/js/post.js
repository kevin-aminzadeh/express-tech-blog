window.addEventListener("load", () => {
  // Add Event Listener To Edit Buttons
  const editBtnEls = document.querySelector(".post-edit-btn");

  if (editBtnEls) {
    editBtnEls.addEventListener("click", (e) => {
      handlePostUpdate(e);
    });
  }

  // Add Event Listener To Delete Buttons
  const deleteBtnEls = document.querySelector(".post-delete-btn");
  if (deleteBtnEls) {
    deleteBtnEls.addEventListener("click", (e) => {
      handlePostDelete(e);
    });
  }
});

async function handlePostUpdate(e) {
  e.preventDefault();

  console.log(e.target.dataset.id);
}

async function handlePostDelete(e) {
  e.preventDefault();
  // Post Data to Auth Endpoint
  const response = await fetch("/api/posts/" + e.target.dataset.id, {
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
