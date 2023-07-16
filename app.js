function fetchRandomQuote() {
    const quoteLink = document.querySelector("#quote a");
    quoteLink.disabled = true; // Disable the button
  
    fetch('https://api.themotivate365.com/stoic-quote')
      .then(response => response.json())
      .then(data => {
        if (data.author && data.quote) {
          const quote = `${data.quote}\n- ${data.author}`;
          alert(quote);
        } else {
          console.error('Invalid response format:', data);
        }
  
        quoteLink.disabled = false; // Enable the button after the response is received
      })
      .catch(error => {
        console.error('Error fetching quote:', error);
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