document.querySelector(".logout").addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    const response = await fetch("/api/users/logout", { method: "POST" });
  } catch (err) {
    console.log(err);
  }
});

document.querySelector;
