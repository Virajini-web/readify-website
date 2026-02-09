document.addEventListener("DOMContentLoaded", () => {
  const audio = new Audio("sounds/reading.mp3");

  playSound.onclick = () => { audio.loop = true; audio.play(); };
  stopSound.onclick = () => audio.pause();

  const saved = JSON.parse(localStorage.getItem("completed")) || [];
  saved.forEach(add);

  addBook.onclick = () => {
    if (!completedBook.value) return;
    saved.push(completedBook.value);
    localStorage.setItem("completed", JSON.stringify(saved));
    add(completedBook.value);
    completedBook.value = "";
  };

  function add(text) {
    const li = document.createElement("li");
    li.textContent = text;
    completedList.appendChild(li);
  }
});
