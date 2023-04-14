// get the select element
const select = document.getElementById("colorSelect");

// get the button element
const button = document.querySelector('input[type="button"]');

// add event listener to the button
button.addEventListener("click", function() {
  // get the selected option
  const selectedOption = select.options[select.selectedIndex];

  // remove the selected option from the select element
  select.removeChild(selectedOption);
});

