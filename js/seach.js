"use strict";

const SearchBtn = document.querySelector(".header-area2 .input-area button");
const SearchBox = document.querySelector(".search-box");
const closeBtn = document.querySelector(".search-box .close-btn");

SearchBtn.addEventListener("click", () => {
  SearchBox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  SearchBox.style.display = "none";
});
