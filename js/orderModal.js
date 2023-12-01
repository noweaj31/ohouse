"use strict";

const purchaseBtn = document.querySelector(".purchase-btn");
const overlay = document.querySelector(".overlay");
const orderModal = document.querySelector(".order-form-modal");

purchaseBtn.addEventListener("click", () => {
  overlay.style.display = "block";
  orderModal.style.display = "block";
});
