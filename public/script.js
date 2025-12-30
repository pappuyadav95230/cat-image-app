document.addEventListener("DOMContentLoaded", () => {
  const catBtn = document.getElementById("catBtn");
  const dogBtn = document.getElementById("dogBtn");
  const imageGrid = document.getElementById("imageGrid");
  const themeToggle = document.getElementById("themeToggle");

  // Function to display images
  function displayImages(urls) {
    imageGrid.innerHTML = ""; // clear previous images
    urls.forEach(url => {
      const img = document.createElement("img");
      img.src = url;
      imageGrid.appendChild(img);
    });
  }

  // Fetch 3 random cat images
  async function fetchCats() {
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=6");
      const data = await res.json();
      const urls = data.map(item => item.url);
      displayImages(urls);
    } catch (err) {
      console.error("Failed to fetch cats:", err);
    }
  }

  // Fetch 3 random dog images
  async function fetchDogs() {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random/6");
      const data = await res.json();
      displayImages(data.message);
    } catch (err) {
      console.error("Failed to fetch dogs:", err);
    }
  }

  // Initial load: 3 cat images
  fetchCats();

  // Button events
  catBtn.addEventListener("click", fetchCats);
  dogBtn.addEventListener("click", fetchDogs);

  // Theme toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      themeToggle.textContent = "☀️ Light Mode";
    } else {
      themeToggle.textContent = "🌙 Dark Mode";
    }
  });
});
