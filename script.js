"use strict"

const submitButton = document.querySelector("#submit");
const firstMain = document.querySelector(".container.main")
const secondMain = document.querySelector(".container.thanks")
const span = document.querySelector("span")

let rating;

const ratingButtons = document.querySelectorAll('.container.main section button');

ratingButtons.forEach( button => {
    button.addEventListener('click', () => {
        rating = button.textContent;
    })
});


submitButton.addEventListener('click', () => {    
    if (rating) {
        span.textContent = rating
        firstMain.style.display = "none"
        secondMain.style.display = "block"
    } else {
        alert("Select a valid rating")
    }
})