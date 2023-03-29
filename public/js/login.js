async function login(event) {
  event.preventDefault();
  const email = document.querySelector("#email-address").value;
  const password = document.querySelector("#password").value;

  const response = await fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    console.log("login successful");
    document.location.replace("/");
  } else {
    alert("Login failed");
  }
}

document.querySelector("#submit-login").addEventListener("submit", login);
