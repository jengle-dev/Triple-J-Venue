async function addEvent(event) {
  event.preventDefault();
  const event_name = document.querySelector("#eventTypes").value.trim();
  const date = document.querySelector("#date").value.trim();
  //   const date = new Date(dateData);
  const start_time = document.querySelector("#start").value.trim();
  const end_time = document.querySelector("#end").value.trim();

  const response = await fetch(`/api/events`, {
    method: "POST",
    body: JSON.stringify({
      event_name,
      date,
      start_time,
      end_time,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    alert("Event submitted");
  } else {
    alert("Event not added");
  }
}

document.querySelector("#submitBtn").addEventListener("click", addEvent);
