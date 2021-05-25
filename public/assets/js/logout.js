window.addEventListener("load", () => {
  // Bind to Form Element
  const logoutBtn = document.getElementById("logoutBtn");

  logoutBtn.onclick = async (e) => {
    e.preventDefault();

    // Post Data to Auth Endpoint
    const response = await fetch("/api/auth/logout", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
    });

    // Redirect User To Home Page
    document.location.replace("/");
  };
});
