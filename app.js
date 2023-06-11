function fetchRandomQuote() {
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
  
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        const response = JSON.parse(this.responseText);
        const quote = response.text;
        alert(quote);
      }
    });
  
    xhr.open('GET', 'https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote?token=YOUR_API_KEY');
    xhr.setRequestHeader('X-RapidAPI-Key', '932c705442msh6a8d4fb0d13c377p1fe899jsnae0294b94d7e');
    xhr.setRequestHeader('X-RapidAPI-Host', 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com');
  
    xhr.send();
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");
  
    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("show");
      navToggle.textContent = navMenu.classList.contains("show") ? "Close" : "";
    });
  
    const quoteLink = document.querySelector("#quote a");
    quoteLink.addEventListener("click", function (event) {
      event.preventDefault();
      fetchRandomQuote();
    });
  });
  