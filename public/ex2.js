const requestBody = {
  name: "Bansari",
  countries: [
    {
      name: "Dubai",
      years: 1999,
    },
    {
      name: "Europe",
      years: 2003,
    },
    {
      name: "United Kingdom",
      years: 2010,
    },
  ],
};

const button = document.getElementById("call_api");

button.addEventListener("click", () => {
  fetch("http://localhost:3000/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  })
    .then((rsp) => rsp.text())
    .then((result) => {
      const p = document.getElementById("result");
      p.appendChild(document.createTextNode(result));
    })
    .catch((error) => console.log(error));
});
