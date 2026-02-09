document.addEventListener("DOMContentLoaded", () => {

  // ===============================
  // AUTO-ROTATING HERO QUOTES
  // ===============================

  const quotes = [
    "Discover the Books you were looking for",
    "Reading is dreaming with open eyes",
    "A reader lives a thousand lives",
    "Books are a uniquely portable magic",
    "So many books, so little time"
  ];

  let quoteIndex = 0;
  const quoteElement = document.getElementById("quote");

  function changeQuote() {
    quoteElement.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }

  setInterval(changeQuote, 4000);

  // ===============================
  // AUTHOR OF THE DAY
  // ===============================

  const authors = [
    "Jane Austen",
    "George Orwell",
    "J.K. Rowling",
    "Agatha Christie",
    "Mark Twain",
    "Leo Tolstoy",
    "Virginia Woolf"
  ];

  const authorElement = document.getElementById("authorName");
  const today = new Date().getDate();
  const authorIndex = today % authors.length;

  authorElement.textContent = authors[authorIndex];

  // ===============================
  // NEWSLETTER SUBSCRIPTION
  // ===============================

  const subscribeBtn = document.getElementById("subscribeBtn");
  const emailInput = document.getElementById("newsletterEmail");

  subscribeBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "") {
      alert("Please enter your email address.");
      return;
    }

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      alert("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("newsletterEmail", email);
    alert("Thank you for subscribing to Readify!");
    emailInput.value = "";
  });

});
