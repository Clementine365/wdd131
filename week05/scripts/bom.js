// Get references to the input, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Initialize chaptersArray: load from localStorage or start empty if none
let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button click event listener
button.addEventListener("click", () => {
  // Check if the input is not empty
  if (input.value.trim() !== "") {
    displayList(input.value); // add to DOM
    chaptersArray.push(input.value); // add to array
    setChapterList(); // save to localStorage
    input.value = ""; // clear input
    input.focus(); // return focus
  }
});

// ---------------- Functions ---------------- //

// Display list item in the DOM
function displayList(item) {
  // Create a list item
  const li = document.createElement("li");

  // Create a delete button
  const deleteButton = document.createElement("button");

  // Populate li with the input value
  li.textContent = item;

  // Populate the delete button with ❌
  deleteButton.textContent = "❌";

  // Accessibility for screen readers
  deleteButton.setAttribute("aria-label", `Remove ${item}`);

  // Append the delete button to the li
  li.appendChild(deleteButton);

  // Append li to the unordered list
  list.appendChild(li);

  // Delete button event listener
  deleteButton.addEventListener("click", () => {
    deleteChapter(li.textContent);
    list.removeChild(li);
  });
}

// Save chaptersArray to localStorage
function setChapterList() {
  localStorage.setItem("chapters", JSON.stringify(chaptersArray));
}

// Get chapters from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("chapters"));
}

// Delete a chapter
function deleteChapter(chapter) {
  // Remove the ❌ character at the end
  chapter = chapter.slice(0, chapter.length - 1);

  // Filter out the deleted chapter
  chaptersArray = chaptersArray.filter(item => item !== chapter);

  // Update localStorage
  setChapterList();
}
