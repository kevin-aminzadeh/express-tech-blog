export default {
  // Toggle Hiding/Showing The Comments Container
  toggleRenderComments: (postId) => {
    // If postId Was Not Provided, Throw Error
    if (!postId) {
      throw Error("Missing Parameter!");
    }

    // Create Reference To The Parent Post Comments Container Element
    const commentsContainerEl = document.querySelector(
      `.comments-container[data-id="${postId}"]`
    );
    commentsContainerEl.classList.toggle("visually-hidden");
  },

  // Render Edit UI Form For Post/Cost
  renderEditForm: (textElClasses, inputElClasses, postId) => {
    if (!textElClasses || !inputElClasses || !postId) {
      throw Error("Missing Parameter!");
    }

    let textEls = [];
    let inputEls = [];

    for (const textElClass of textElClasses) {
      textEls.push(
        document.querySelector(`.${textElClass}[data-id="${postId}"]`)
      );
    }

    for (const inputElClass of inputElClasses) {
      inputEls.push(
        document.querySelector(`.${inputElClass}[data-id="${postId}"]`)
      );
    }

    textEls.forEach((textEl) => textEl.classList.toggle("visually-hidden"));
    inputEls.forEach((inputEl) => {
      inputEl.classList.toggle("visually-hidden");
      // Attach Autosize to Inputs
      autosize(inputEl);
    });
  },
};
