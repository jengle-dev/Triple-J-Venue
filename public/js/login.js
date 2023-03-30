async function login(event) {
  event.preventDefault();
  const email = document.querySelector("#email-address").value.trim();
  const password = document.querySelector("#password").value.trim();

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

  console.log(response);

  if (response.ok) {
    console.log("login successful");
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#submit-login").addEventListener("submit", login);
