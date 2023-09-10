const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote-btn");

newQuoteBtn.addEventListener("click", getNewQuote);

function getNewQuote() {
    fetch("https://api-ninjas.com/api/quotes")
        .then((response) => response.json())
        .then((data) => {
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuote = data[randomIndex].quote;
            quoteText.textContent = randomQuote;
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
        });
}

// Initial load
getNewQuote();
