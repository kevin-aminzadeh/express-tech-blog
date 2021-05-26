window.addEventListener("load", () => {
  // Bind to Form Element
  const loginFormEl = document.getElementById("loginForm");
  if (loginFormEl) {
    loginFormEl.onsubmit = async (e) => {
      e.preventDefault();

      // Construct FormData Object
      const formData = new FormData(loginFormEl);

      // Post Data to Auth Endpoint
      const response = await fetch("/api/auth/login", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
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
  }
});
