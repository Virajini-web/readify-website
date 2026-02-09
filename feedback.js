document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    const feedback = {
      name,
      email,
      message,
      date: new Date().toLocaleString()
    };

    const saved = JSON.parse(localStorage.getItem("feedbackList")) || [];
    saved.push(feedback);
    localStorage.setItem("feedbackList", JSON.stringify(saved));

    alert("Thanks for your feedback 💖");

    form.reset();
    send.onclick = () => {
  localStorage.setItem("feedback", JSON.stringify({
    name: name.value,
    email: email.value,
    message: message.value
  }));
  alert("Thanks for your feedback!");
};

  });
});
