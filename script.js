const quoteText = document.getElementById("quote-text");
const newQuoteBtn = document.getElementById("new-quote-btn");
const copyBtn = document.getElementById("copy-btn"); // Replace shareBtn with copyBtn

newQuoteBtn.addEventListener("click", getNewQuote);
copyBtn.addEventListener("click", copyQuote); // Replace shareQuote with copyQuote

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

function copyQuote() {
    const quote = quoteText.textContent;

    // Create a text area element to hold the quote text
    const textarea = document.createElement("textarea");
    textarea.value = quote;
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand("copy");

    // Remove the temporary text area element
    document.body.removeChild(textarea);

    // Provide some feedback to the user
    alert("Quote copied to clipboard!");
}

// Initial load
getNewQuote();
