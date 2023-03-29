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
