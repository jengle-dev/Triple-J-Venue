async function newFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector("#username").value.trim();
  const first_name = document.querySelector("#first_name").value.trim();
  const last_name = document.querySelector("#last_name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const password = document.querySelector("#password").value.trim();
  const confirmPassword = document
    .querySelector("#confirm_password")
    .value.trim();

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

  console.log(response.statusText);

  if (response.ok) {
    alert("Account created");
    document.location.replace("/login");
  } else {
    if (response.statusText === "email must be unique") {
      alert("There is already an account associated with that email address.");
    } else if (response.statusText === "username must be unique") {
      alert("There is already an account associated with that username.");
    } else if (response.statusText === "phone must be unique") {
      alert("There is already an account associated with that phone number.");
    } else {
      alert("Failed to add user.");
    }
  }
}

document
  .querySelector(".registration-form")
  .addEventListener("submit", newFormHandler);
