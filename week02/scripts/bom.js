// Get references to the input, button, and list elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// click event listener for the Add Chapter button
button.addEventListener("click", function () {
  // Check that the  input is not blank
  if (input.value.trim() !== "") {
    
    // Creating a list item
    const li = document.createElement("li");

    // Create a delete button
    const deleteButton = document.createElement("button");

    // Populate li with the input value
    li.textContent = input.value;

    // Populate the delete button with ❌
    deleteButton.textContent = "❌";

    // Accessibility for screen readers
    deleteButton.setAttribute("aria-label", `Remove ${input.value}`);

    // Append the delete button to the li
    li.appendChild(deleteButton);

    // Append li to the unordered list
    list.appendChild(li);

    // Reset the input field
    input.value = "";
  }

  // Always return focus to the input
  input.focus();
});

//  handle delete clicks on the list itself
list.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const li = e.target.parentElement;
    list.removeChild(li);
    input.focus();
  }
});
