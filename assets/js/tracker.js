document.addEventListener("DOMContentLoaded", () => {
  trackerForm.addEventListener("submit", e => {
    e.preventDefault();

    const total = +totalPages.value;
    const read = +pagesRead.value;
    const speed = +speed.value;

    const percent = Math.min(100, Math.round((read / total) * 100));
    const days = Math.ceil((total - read) / speed);

    progressFill.style.width = percent + "%";
    trackerResult.textContent = `${percent}% done • ${days} days left`;
  });
});
