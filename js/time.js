"use strict";

const endTime = new Date();
endTime.setTime(endTime.getTime() + 8 * 60 * 60 * 1000);
const $hours = document.querySelectorAll(".hours");
const $minutes = document.querySelectorAll(".minutes");
const $seconds = document.querySelectorAll(".seconds");

function formatTime(element) {
  return element < 10 ? "0" + element : element;
}

function updateDisplay(elements, value) {
  elements.forEach((element) => {
    element.textContent = formatTime(value);
  });
}

setInterval(() => {
  const currentTime = new Date().getTime();
  const remainingTime = endTime - currentTime;

  let hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  updateDisplay($hours, hours);
  updateDisplay($minutes, minutes);
  updateDisplay($seconds, seconds);
}, 1000);
