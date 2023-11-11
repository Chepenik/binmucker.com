
function fetchRandomQuote() {
  const quoteLink = document.querySelector("#quote a");
  quoteLink.disabled = true; // Disable the button

  fetch('stoic_quotes.json')
    .then(response => response.json())
    .then(quotes => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const selectedQuote = quotes[randomIndex];
      if (selectedQuote.author && selectedQuote.quote) {
        const quoteText = `${selectedQuote.quote}\n- ${selectedQuote.author}`;
        alert(quoteText);
      } else {
        console.error('Invalid quote format:', selectedQuote);
      }

      quoteLink.disabled = false; // Enable the button after the response is received
    })
    .catch(error => {
      console.error('Error loading local quotes:', error);
      quoteLink.disabled = false; // Enable the button if an error occurs
    });
}

// Event listener for quote link click
const quoteLink = document.querySelector("#quote a");
quoteLink.addEventListener("click", function (event) {
event.preventDefault();
fetchRandomQuote();
});

document.addEventListener("DOMContentLoaded", function () {
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav ul");

navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show");
  navToggle.textContent = navMenu.classList.contains("show") ? "Close" : "";
});
});
