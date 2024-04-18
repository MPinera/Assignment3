/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?

// Variables
let dailyRate = 35;
let selectedDays = 0;
const weekDays = ["monday", "tuesday", "wednesday", "thursday", "friday"];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

// When a day is clicked, highlight it and update the selected days count.
function selectDay(day) {
  const dayElement = document.getElementById(day);
  if (!dayElement.classList.contains("clicked")) {
    dayElement.classList.add("clicked");
    selectedDays++;
  }
  // Each selection, recalculate the total cost.
  calculateTotalCost();
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

// If the clear button is clicked, removes the highlight from all days and reset the selected days count.
function clearSelections() {
  weekDays.forEach((day) => {
    const dayElement = document.getElementById(day);
    dayElement.classList.remove("clicked");
  });
  selectedDays = 0;
  // Set the calculated cost back to 0.
  calculateTotalCost();
}

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// If the half-day button is clicked, adjust the daily rate and updates.
function setHalfDayRate() {
  dailyRate = 20;
  document.getElementById("half").classList.add("clicked");
  document.getElementById("full").classList.remove("clicked");
  // Recalculate the total cost.
  calculateTotalCost();
}

// If the full-day button is clicked, reset the daily rate.
function setFullDayRate() {
  dailyRate = 35;
  document.getElementById("full").classList.add("clicked");
  document.getElementById("half").classList.remove("clicked");
  calculateTotalCost();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
  const totalCost = dailyRate * selectedDays;
  document.getElementById("calculated-cost").textContent = totalCost;
}

weekDays.forEach((day) => {
  document.getElementById(day).addEventListener("click", function () {
    selectDay(day);
  });
});

document.getElementById("clear-button").addEventListener("click", function () {
  clearSelections();
});

document.getElementById("half").addEventListener("click", function () {
  setHalfDayRate();
});

document.getElementById("full").addEventListener("click", function () {
  setFullDayRate();
});
