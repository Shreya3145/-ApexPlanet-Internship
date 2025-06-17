function getJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    .then(res => res.json())
    .then(data => {
      document.getElementById('joke').textContent = data.joke;
    })
    .catch(err => {
      document.getElementById('joke').textContent = "Failed to fetch joke 😞";
    });
}
