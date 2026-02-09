document.addEventListener("DOMContentLoaded", () => {

  const books = [
    {
      title: "1984",
      author: "George Orwell",
      genre: "fiction",
      length: "medium",
      image: "images/1984.png"
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      genre: "fantasy",
      length: "long",
      image: "images/harrypotter.png"
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "fantasy",
      length: "medium",
      image: "images/hobbit.png"
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "scifi",
      length: "long",
      image: "images/dune.png"
    },
    {
      title: "Animal Farm",
      author: "George Orwell",
      genre: "fiction",
      length: "short",
      image: "images/animalfarm.png"
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      genre: "fiction",
      length: "medium",
      image: "images/fahrenheit451.png"
    },
    {
      title: "Foundation",
      author: "Isaac Asimov",
      genre: "scifi",
      length: "medium",
      image: "images/foundation.png"
    },
    {
      title: "Mistborn",
      author: "Brandon Sanderson",
      genre: "fantasy",
      length: "long",
      image: "images/mistborn.png"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "fiction",
      length: "short",
      image: "images/alchemist.png"
    }
  ];

  const genreSelect = document.getElementById("genreSelect");
  const lengthSelect = document.getElementById("lengthSelect");
  const recommendBtn = document.getElementById("recommendBtn");
  const againBtn = document.getElementById("againBtn");
  const card = document.getElementById("recommendationCard");

  function recommend() {
    const genre = genreSelect.value;
    const length = lengthSelect.value;

    const filtered = books.filter(book =>
      (genre === "all" || book.genre === genre) &&
      (length === "all" || book.length === length)
    );

    if (filtered.length === 0) {
      card.innerHTML = "<p>No books found 😢</p>";
      return;
    }

    const random = filtered[Math.floor(Math.random() * filtered.length)];

    card.innerHTML = `
      <div class="card">
        <img src="${random.image}" alt="${random.title}">
        <h3>${random.title}</h3>
        <p>${random.author}</p>
        <button id="saveBtn">Save to Reading List</button>
      </div>
    `;

    document.getElementById("saveBtn").addEventListener("click", () => {
      const saved = JSON.parse(localStorage.getItem("readingList")) || [];
      saved.push(random);
      localStorage.setItem("readingList", JSON.stringify(saved));
      alert("Saved to reading list 📚");
    });
  }

  recommendBtn.addEventListener("click", recommend);
  againBtn.addEventListener("click", recommend);
});
