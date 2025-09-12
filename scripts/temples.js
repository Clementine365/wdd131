
const currentYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;


const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

// When hamburger is clicked, toggle menu links
hamButton.addEventListener("click", () => {
  // toggle .open on the nav
  navigation.classList.toggle("open");
  // toggle .open on the button so icon changes
  hamButton.classList.toggle("open");
});
