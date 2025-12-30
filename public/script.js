// 1️⃣ API URL stored in variable
let CAT_API_URL = "https://api.thecatapi.com/v1/images/search";

// 2️⃣ Get DOM elements
let catBtn = document.getElementById("catBtn");
let catImg = document.getElementById("catImg");

// 3️⃣ Add click event
catBtn.addEventListener("click", getCatImage);

// 4️⃣ Function to fetch cat image
function getCatImage() {
  fetch(CAT_API_URL)
    .then(response => response.json())
    .then(data => {
      // API returns array → take first object → url
      let imageUrl = data[0].url;

      // Show image in HTML
      catImg.src = imageUrl;
    })
    .catch(error => {
      console.log("Error:", error);
    });
}
