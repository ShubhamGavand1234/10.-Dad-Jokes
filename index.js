const joke = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", () => {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
      console.log(data); // Handle the parsed data
      joke.innerText = data.joke;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
