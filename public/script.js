const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");
const imageGrid = document.getElementById("imageGrid");
const themeToggle = document.getElementById("themeToggle");

// Helper function to display images
function displayImages(urls) {
  imageGrid.innerHTML = ""; // clear previous
  urls.forEach(url => {
    const img = document.createElement("img");
    img.src = url;
    imageGrid.appendChild(img);
  });
}

// Fetch 3 random cat images initially
async function fetchCats() {
  const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=3");
  const data = await res.json();
  const urls = data.map(item => item.url);
  displayImages(urls);
}

// Fetch 3 random dog images
async function fetchDogs() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/3");
  const data = await res.json();
  displayImages(data.message);
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

