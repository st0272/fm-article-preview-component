const shareBtn = document.querySelector(".js-shareBtn");
const shareList = document.querySelector(".js-shareList");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("is-active");
  shareList.classList.toggle("is-active");
});
