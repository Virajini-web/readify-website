document.addEventListener("DOMContentLoaded", () => {
  const books = [
    { title: "1984", author: "George Orwell", image: "images/books/1984.png" },
    { title: "Harry Potter", author: "J.K. Rowling", image: "images/books/harry-potter.png" },
    { title: "The Hobbit", author: "J.R.R. Tolkien", image: "images/books/hobbit.avif" },
    { title: "Dune", author: "Frank Herbert", image: "images/books/dune.jpg" },
    { title: "Animal Farm", author: "George Orwell", image: "images/books/animal-farm.jpg" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", image: "images/books/fahrenheit.jpg" },
    { title: "The Alchemist", author: "Paulo Coelho", image: "images/books/alchemist.jpg" },
    { title: "Foundation", author: "Isaac Asimov", image: "images/books/foundation.jpg" }
  ];

  const grid = document.getElementById("bookGrid");
  const input = document.getElementById("searchInput");

  function render(list) {
    grid.innerHTML = "";
    list.forEach(book => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${book.image}">
        <h3>${book.title}</h3>
        <p>${book.author}</p>
      `;
      grid.appendChild(card);
    });
  }

  render(books);

  input.addEventListener("input", () => {
    const v = input.value.toLowerCase();
    render(books.filter(b =>
      b.title.toLowerCase().includes(v) ||
      b.author.toLowerCase().includes(v)
    ));
  });
});
