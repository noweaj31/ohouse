"use strict";

const productTab = document.querySelector(".product-selling-nav");
const productTabBtns = productTab.querySelectorAll("button");

let currentActiveTab = productTab.querySelector(".is_active");

const TOP_HEADER_DESKTOP = 80 + 48 + 52;
const TOP_HEADER_MOBILE = 50 + 40 + 52;

function toggleActiveTab() {
  const tabItem = this.parentNode;

  if (currentActiveTab !== tabItem) {
    tabItem.classList.add("is_active");
    currentActiveTab.classList.remove("is_active");
    currentActiveTab = tabItem;
  }
}

function scrollToTabPanel() {
  const tabPanelId = this.parentNode.getAttribute("aria-labelledby");
  const tabPanel = document.querySelector(`#${tabPanelId}`);

  const scrollAmount =
    tabPanel.getBoundingClientRect().top -
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);

  window.scrollBy({
    top: scrollAmount,
    behavior: "smooth",
  });
}

productTabBtns.forEach((button) => {
  button.addEventListener("click", toggleActiveTab);
  button.addEventListener("click", scrollToTabPanel);
});
