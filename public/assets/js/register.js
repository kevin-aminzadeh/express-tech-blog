window.addEventListener("load", () => {
  // Bind to Form Element
  const registerFormEl = document.getElementById("registerForm");

  registerFormEl.onsubmit = async (e) => {
    e.preventDefault();

    // Construct FormData Object
    const formData = new FormData(registerFormEl);

    // Post Data to Auth Endpoint
    const response = await fetch("/api/auth", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });

    // If Request Was Successful, Redirect to Home Route
    if (response.ok) {
      document.location.replace("/");
      return;
    }

    // Else Alert User
    alert("Failed to login");
  };
});
