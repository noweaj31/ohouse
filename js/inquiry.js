"use strict";

const inquiryBtn = document.querySelector(
  "#product-inquiry .product-section-header"
);
const inquiryBtnIcon = document.querySelector(
  "#product-inquiry .product-section-header .icon-btn"
);
const inquiryTextBtn = document.querySelector(
  "#product-inquiry .product-section-header .text-btn"
);
const inquiryContent = document.querySelector(
  "#product-inquiry .product-section-content"
);

inquiryBtn.addEventListener("click", () => {
  inquiryContent.style.display = "block";
  inquiryContent.style.margin = "0 0 15px";
  inquiryBtnIcon.style.display = "none";
  inquiryTextBtn.style.display = "block";
});
