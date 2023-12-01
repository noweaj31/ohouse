"use strict";

const bookMarkBtn = document.querySelector(".bookmark-btn.unclick");
const bookMarkBtnClick = document.querySelector(".bookmark-btn.is-click");

bookMarkBtn.addEventListener("click", () => {
  bookMarkBtn.style.display = "none";
  bookMarkBtnClick.style.display = "block";
});

bookMarkBtnClick.addEventListener("click", () => {
  bookMarkBtnClick.style.display = "none";
  bookMarkBtn.style.display = "block";
});
