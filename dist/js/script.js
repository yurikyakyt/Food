/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabcontent = document.querySelectorAll(".tabcontent"),
    tabsparent = document.querySelector(".tabheader__items"),
    offer_slides = document.querySelectorAll(".offer__slide"),
    offer_current_slide = document.querySelector("#current"),
    offer_slide_next_btn = document.querySelector(".offer__slider-next"),
    offer_slide_prev_btn = document.querySelector(".offer__slider-prev");
  console.log(offer_current_slide);
  function hideTabContent() {
    tabcontent.forEach(item => {
      item.style.display = 'none';
    });
    tabs.forEach(item => {
      item.classList.remove("tabheader__item_active");
    });
  }
  function showTabContent(i = 0) {
    tabcontent[i].style.display = 'block';
    tabs[i].classList.add("tabheader__item_active");
  }
  hideTabContent();
  showTabContent();
  tabsparent.addEventListener('click', e => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  function hideSliderContent() {
    offer_slides.forEach(slide => {
      slide.style.display = 'none';
    });
  }
  function showSliderContent(i = 0) {
    offer_slides[i].style.display = 'block';
  }
  hideSliderContent();
  showSliderContent();
  offer_slide_next_btn.addEventListener('click', e => {
    let curNum = +offer_current_slide.textContent - 1;
    if (curNum == 3) {
      offer_current_slide.textContent = "01";
      hideSliderContent();
      showSliderContent(0);
    } else {
      hideSliderContent();
      offer_current_slide.textContent = `0${curNum + 2}`;
      showSliderContent(curNum + 1);
    }
  });
  offer_slide_prev_btn.addEventListener('click', e => {
    let curNum = +offer_current_slide.textContent - 1;
    if (curNum == 0) {
      offer_current_slide.textContent = "04";
      hideSliderContent();
      showSliderContent(3);
    } else {
      hideSliderContent();
      offer_current_slide.textContent = `0${curNum - 2}`;
      showSliderContent(curNum - 1);
    }
  });
});
/******/ })()
;
//# sourceMappingURL=script.js.map