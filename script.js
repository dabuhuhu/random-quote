const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote-btn");

newQuoteBtn.addEventListener("click", getNewQuote);

function getNewQuote() {
    fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((data) => {
            const randomQuote = data.content;
            quoteText.textContent = randomQuote;
        })
        .catch((error) => {
            console.error("Error fetching quote:", error);
        });
}

// Initial load
getNewQuote();
