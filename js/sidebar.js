"use strict";

const sidebarButton = document.querySelector(".header-content .bar");
const sidebarMenuOverlay = document.querySelector(".shadow");
const sidebarMenu = document.querySelector(".gnb-wrap");

sidebarButton.addEventListener("click", () => {
  sidebarMenuOverlay.classList.add("is-active");
  sidebarMenu.classList.add("is-active");
});

sidebarMenuOverlay.addEventListener("click", () => {
  sidebarMenuOverlay.classList.remove("is-active");
  sidebarMenu.classList.remove("is-active");
});
