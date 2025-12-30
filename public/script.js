const btn = document.getElementById("catBtn");
const img = document.getElementById("catImg");
const themeToggle = document.getElementById("themeToggle");

// Cat API
btn.addEventListener("click", async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await res.json();
  img.src = data[0].url;
});

// Theme toggle
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
