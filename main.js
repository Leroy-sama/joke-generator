const API_LINK = "https://icanhazdadjoke.com/";
const jokeButton = document.querySelector(".joke-btn");
const jokeTing = document.querySelector(".the-joke");

const fetchJoke = async () => {
    const response = await fetch(API_LINK, {
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokey = await response.json();
    jokeTing.textContent = jokey.joke;
}

window.addEventListener("DOMContentLoaded", fetchJoke);
jokeButton.addEventListener('click', fetchJoke);