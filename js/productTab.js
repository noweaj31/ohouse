"use strict";

const productTab = document.querySelector(".product-selling-nav");
const productTabButtonList = productTab.querySelectorAll("button");

const TOP_HEADER_DESKTOP = 80 + 48 + 52;
const TOP_HEADER_MOBILE = 50 + 40 + 52;

let currentActiveTab = productTab.querySelector(".is_active");
let disableUpdating = false;

function toggleActiveTab() {
  const tabItem = this.parentNode;

  if (currentActiveTab !== tabItem) {
    disableUpdating = true;
    tabItem.classList.add("is_active");
    currentActiveTab.classList.remove("is_active");
    currentActiveTab = tabItem;

    setTimeout(() => {
      disableUpdating = false;
    }, 1000);
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

productTabButtonList.forEach((button) => {
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
    const position = window.scrollY + panel.getBoundingClientRect().top;
    productTabPanelPositionMap[id] = position;
  });
  updateActiveTabOnScroll();
}

function updateActiveTabOnScroll() {
  if (disableUpdating) {
    return;
  }

  const scrolledAmount =
    window.scrollY +
    (window.innerWidth >= 768 ? TOP_HEADER_DESKTOP : TOP_HEADER_MOBILE);

  let newActiveTab;

  if (scrolledAmount >= productTabPanelPositionMap["product-recommendation"]) {
    newActiveTab = productTabButtonList[4];
  } else if (scrolledAmount >= productTabPanelPositionMap["product-shipment"]) {
    newActiveTab = productTabButtonList[3];
  } else if (scrolledAmount >= productTabPanelPositionMap["product-inquiry"]) {
    newActiveTab = productTabButtonList[2];
  } else if (scrolledAmount >= productTabPanelPositionMap["product-review"]) {
    newActiveTab = productTabButtonList[1];
  } else {
    newActiveTab = productTabButtonList[0];
  }

  if (newActiveTab) {
    newActiveTab = newActiveTab.parentNode;

    if (newActiveTab !== currentActiveTab) {
      newActiveTab.classList.add("is_active");
      if (currentActiveTab !== null) {
        currentActiveTab.classList.remove("is_active");
      }
      currentActiveTab = newActiveTab;
    }
  }
}
window.addEventListener("load", detectTabPanelPosition);
window.addEventListener("resize", detectTabPanelPosition);
window.addEventListener("scroll", updateActiveTabOnScroll);
