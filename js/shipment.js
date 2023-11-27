"use strict";

const shipmentBtn = document.querySelector(".product-shipment-section-header");
const shipmentContent1 = document.querySelector(
  "#product-shipment .product-section.delivery"
);
const shipmentContent2 = document.querySelector(
  "#product-shipment .product-section.exchange"
);

shipmentBtn.addEventListener("click", () => {
  shipmentBtn.style.display = "none";
  shipmentContent1.style.display = "block";
  shipmentContent2.style.display = "block";
});
