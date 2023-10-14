"use strict";

const endTime = new Date();
endTime.setTime(endTime.getTime() + 8 * 60 * 60 * 1000);
console.log(endTime);

setInterval(() => {
  const currentTime = new Date().getTime();
  const remainingTime = endTime - currentTime;

  let hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementsByClassName("hours").textContent = hours;
  document.getElementsByClassName("minutes").textContent = minutes;
  document.getElementsByClassName("seconds").textContent = seconds;
}, 1000);
