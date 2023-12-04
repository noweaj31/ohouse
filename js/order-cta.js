"use strict";

const orderCta = document.querySelector(".order-cta");
const orderCtaBuyBtn = document.querySelector(".order-cta .purchase-btn");
const overlay = document.querySelector(".overlay");
const orderModal = document.querySelector(".order-form-modal");

orderCtaBuyBtn.addEventListener("click", function () {
  overlay.classList.add("is-open");
  orderModal.classList.add("is-open");
});

overlay.addEventListener("click", function () {
  overlay.classList.remove("is-open");
  orderModal.classList.remove("is-open");
});
