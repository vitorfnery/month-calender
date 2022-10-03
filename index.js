"use strict";

// Selecting DOM elements
const monthEl = document.querySelector(".date h1");
const fullDateEl = document.querySelector(".date p");
const daysEl = document.querySelector(".days");

const monthInx = new Date().getMonth();
const lastDay = new Date(new Date().getFullYear(), monthInx + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthInx, 1).getDay() - 1;
const today = new Date().getDate();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Functions
const displayMonth = () => (monthEl.textContent = months[monthInx]);

const fullDateTitle = () =>
  (fullDateEl.textContent = new Date().toDateString());

const renderEmptyDays = function (firstDay) {
  for (let i = firstDay; i > 0; i--) {
    daysEl.innerHTML += `<div class="empty">${" "}</div>`;
  }
};

const renderDays = function (lastDay) {
  for (let i = 1; i <= lastDay; i++) {
    if (i !== today) daysEl.innerHTML += `<div>${i}</div>`;
    if (i === today) daysEl.innerHTML += `<div class="today">${i}</div>`;
  }
};

// Function calling
displayMonth();
fullDateTitle();
renderEmptyDays(firstDay);
renderDays(lastDay);
