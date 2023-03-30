document.querySelector(".logout").addEventListener("click", async function (e) {
  e.preventDefault();
  const response = await fetch("/api/users/logout", { method: "POST" });
});
