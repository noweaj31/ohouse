"use strict";

const tabBtn = document.querySelector(".nav-tab-btn");
const tabContent = document.querySelector(".tab-content");
const close = document.querySelector(".tab-content button");

tabBtn.addEventListener("click", () => {
  tabContent.style.display = "flex";
});

close.addEventListener("click", () => {
  tabContent.style.display = "none";
});
