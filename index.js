// Select the input display
let input = document.getElementById("display");

// Function to add value to input
function addValue(elementVal) {
  input.value += elementVal;
}

// Clear the input
function clearVal() {
  input.value = "";
}

// Delete the last character
function deletecharacter() {
  input.value = input.value.slice(0, -1);
}

// Evaluate the expression
function evaluateValue() {
  try {
    input.value = eval(input.value);
  } catch {
    input.value = "Error";
  }
}

// Keyboard support
input.addEventListener("keydown", function(event) {
  const key = event.key;

  if (/^[0-9]$/.test(key)) {
    addValue(key);
    event.preventDefault();
  } 
  else if (["+", "-", "*", "/", "%", "."].includes(key)) {
    addValue(key);
    event.preventDefault();
  } 
  else if (key === "Enter") {
    evaluateValue();
    event.preventDefault();
  } 
  else if (key === "Backspace") {
    deletecharacter();
    event.preventDefault();
  } 
  else if (key.toLowerCase() === "c") {
    clearVal();
    event.preventDefault();
  }
});

// Prevent letters and other unwanted characters (except operators)
input.addEventListener("input", function() {
  this.value = this.value.replace(/[^0-9+\-*/.%]/g, "");
});
