"use strict";

const reviewLikeBtn = document.querySelector(".review-card-footer button");

const HELPFUL = "도움이 돼요";
const NOT_HELPFUL = "도움됨";

function toggleReviewLikeBtn() {
  // 1.버튼색 변경
  // 2.텍스트 변경
  // 3.count 변경
  // const isLiked = this.classList;
}

reviewLikeBtn.addEventListener("click", function () {
  reviewLikeBtn.classList.toggle("is-active");

  const isLiked = this.classList.contains("is-active");
  const textElement = this.nextElementSibling;
  const reviewCardFooter = this.parentNode;

  if (isLiked) {
    reviewLikeBtn.innerHTML = NOT_HELPFUL;
  } else {
    reviewLikeBtn.innerHTML = HELPFUL;
  }

  if (textElement) {
    const countSpan = textElement.querySelector("span");
    const count = Number(countSpan.innerHTML.replaceAll(",", ""));

    let newCount = count;
    if (isLiked) {
      newCount = newCount - 1;
      countSpan.innerHTML = newCount.toLocaleString();
    } else {
      newCount = newCount + 1;
      countSpan.innerHTML = newCount.toLocaleString();
    }
  } else {
    if (!isLiked) {
      const newTextElement = document.createElement("p");
      newTextElement.innerHTML = "<strong>1</strong>명에게 도움이 되었습니다.";
      reviewCardFooter.appendChild(newTextElement);
    }
  }
});
