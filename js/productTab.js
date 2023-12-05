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

// 각 tabpanel y축의 위치 (문서의 시작점에서부터 얼마나 아래에 있는지)
// 요소의 y축 위치 = window.scrollY + element.getBoundingClientRect().top

const productTabPanelIdList = [
  "product-spec",
  "product-review",
  "product-inquiry",
  "product-shipment",
  "product-recommendation",
];

const productTabPanelList = productTabPanelIdList.map((panelId) => {
  const tabPanel = document.querySelector(`#${panelId}`);
  return tabPanel;
});

const productTabPanelPositionMap = {};

function detectTabPanelPosition() {
  productTabPanelList.forEach((panel) => {
    const id = panel.getAttribute("id");
    const position = window.scrollY + element.getBoundingClientRect().top;
    productTabPanelPositionMap[id] = position;
  });
}

window.addEventListener("load", detectTabPanelPosition);
window.addEventListener("resize", detectTabPanelPosition);
