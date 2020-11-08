document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  fetch("http://localhost:3000/order", { method: "POST", body: formData })
    .then((rsp) => rsp.text())
    .then((result) => (document.getElementById("result").textContent = result))
    .catch((e) => console.error(e.message));
});
