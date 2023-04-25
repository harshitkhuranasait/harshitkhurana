/*** create variables ***/
let dailyRate = 35;
let dayCounter = 0;
let daysSelected = [];

const dayButtons = document.querySelectorAll('.day-selector li');
const fullDayButton = document.querySelector('#full');
const halfDayButton = document.querySelector('#half');
const clearButton = document.querySelector('#clear-button');
const calculatedCost = document.querySelector('#calculated-cost');

/*** colour change days of week ***/
function selectDay(dayButton) {
  if (!dayButton.classList.contains('clicked')) {
    dayButton.classList.add('clicked');
    dayCounter++;
    daysSelected.push(dayButton.id);
    updateCost();
  }
}

dayButtons.forEach(function(dayButton) {
  dayButton.addEventListener('click', function() {
    selectDay(dayButton);
  });
});

/*** clear days ***/
function clearDays() {
  dayCounter = 0;
  daysSelected = [];

  dayButtons.forEach(function(dayButton) {
    dayButton.classList.remove('clicked');
  });

  updateCost();
}

clearButton.addEventListener('click', clearDays);

/*** change rate ***/
function selectHalfDay() {
  halfDayButton.classList.add('clicked');
  fullDayButton.classList.remove('clicked');
  dailyRate = 20;
  updateCost();
}

function selectFullDay() {
  fullDayButton.classList.add('clicked');
  halfDayButton.classList.remove('clicked');
  dailyRate = 35;
  updateCost();
}

halfDayButton.addEventListener('click', selectHalfDay);
fullDayButton.addEventListener('click', selectFullDay);

/*** calculate ***/
function updateCost() {
  let totalCost = dailyRate * dayCounter;
  calculatedCost.innerHTML = totalCost;
}
