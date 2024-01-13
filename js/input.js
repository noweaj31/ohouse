"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const agreementBtn = document.getElementById("agreement-btn");
  const aBtn = document.getElementById("a-btn");
  const bBtn = document.getElementById("b-btn");
  const cBtn = document.getElementById("c-btn");
  const dBtn = document.getElementById("d-btn");
  const eBtn = document.getElementById("e-btn");

  agreementBtn.addEventListener("click", (event) => {
    const checkValue = event.currentTarget.checked;

    aBtn.checked = checkValue;
    bBtn.checked = checkValue;
    cBtn.checked = checkValue;
    dBtn.checked = checkValue;
    eBtn.checked = checkValue;
  });
  aBtn.addEventListener("click", (event) => {
    if (event.currentTarget.checked == false) {
      agreementBtn.checked = false;
    }
  });
  bBtn.addEventListener("click", (event) => {
    if (event.currentTarget.checked == false) {
      agreementBtn.checked = false;
    }
  });
  cBtn.addEventListener("click", (event) => {
    if (event.currentTarget.checked == false) {
      agreementBtn.checked = false;
    }
  });
  dBtn.addEventListener("click", (event) => {
    if (event.currentTarget.checked == false) {
      agreementBtn.checked = false;
    }
  });
  eBtn.addEventListener("click", (event) => {
    if (event.currentTarget.checked == false) {
      agreementBtn.checked = false;
    }
  });
});
