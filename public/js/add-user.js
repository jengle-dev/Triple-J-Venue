async function newFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value;
  const first_name = document.querySelector("#first_name").value;
  const last_name = document.querySelector("#last_name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm_password").value;

  if (password !== confirmPassword) {
    alert("passwords must match");
    return;
  }

  const response = await fetch(`/api/users`, {
    method: "POST",
    body: JSON.stringify({
      username,
      first_name,
      last_name,
      email,
      phone,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("user successfully added");
  } else {
    alert("failed to add user");
  }
}

document
  .querySelector(".registration-form")
  .addEventListener("submit", newFormHandler);
