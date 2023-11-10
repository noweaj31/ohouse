"use strict";

const communityBtn = document.querySelector(".is_community button");
const communityText = document.querySelector(".is_community span");
const communityChevron = document.querySelector(
  ".is_community .fa-chevron-down"
);
const communityContent = document.querySelector(".community-content");
const shoppingBtn = document.querySelector(".is_shopping button");
const shoppingText = document.querySelector(".is_shopping span");
const shoppingChevron = document.querySelector(".is_shopping .fa-chevron-down");
const shoppingContent = document.querySelector(".shopping-content");
const expertBtn = document.querySelector(".is_expert button");
const expertText = document.querySelector(".is_expert span");
const expertChevron = document.querySelector(".is_expert .fa-chevron-down");
const expertContent = document.querySelector(".expert-content");

communityBtn.addEventListener("click", () => {
  communityText.style.color = "#35c5f0";
  communityChevron.style.transform = "rotate(180deg)";
  communityContent.style.maxHeight = "704px";
});

shoppingBtn.addEventListener("click", () => {
  shoppingText.style.color = "#35c5f0";
  shoppingChevron.style.transform = "rotate(180deg)";
  shoppingContent.style.maxHeight = "440px";
});

expertBtn.addEventListener("click", () => {
  expertText.style.color = "#35c5f0";
  expertChevron.style.transform = "rotate(180deg)";
  expertContent.style.maxHeight = "352px";
});
