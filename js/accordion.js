"use strict";

const drawerMenuButtons = document.querySelectorAll(
  ".gnb-wrap .gnb-menu-list .menu-item button"
);

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode;
  drawerMenu.classList.toggle("is-open");
}

drawerMenuButtons.forEach(function (button) {
  button.addEventListener("click", toggleDrawerMenu);
});
