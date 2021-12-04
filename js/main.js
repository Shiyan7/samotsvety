"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var benefitsMoreBtns = document.querySelectorAll(".benefits__more");

  function loadBenefits(e) {
    var benefits = e.currentTarget.closest(".benefits");
    var hiddenBenefits = benefits.querySelectorAll(".benefits__item--hidden");
    hiddenBenefits.forEach(function (el) {
      return el.classList.remove("benefits__item--hidden");
    });
    e.currentTarget.remove();
  }

  benefitsMoreBtns === null || benefitsMoreBtns === void 0 ? void 0 : benefitsMoreBtns.forEach(function (btn) {
    btn.addEventListener("click", loadBenefits);
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var burger = document.querySelector(".menu-btn");
  var overlay = document.querySelector(".overlay");
  var nav = document.querySelector(".nav");
  var body = document.body;

  var navOpen = function navOpen() {
    burger.classList.toggle("is-active");
    body.classList.toggle("lock");
    nav.classList.toggle("show");
    overlay.classList.toggle("active");
  };

  var navClose = function navClose() {
    burger.classList.remove("is-active");
    body.classList.remove("lock");
    nav.classList.remove("show");
    overlay.classList.remove("active");
  };

  burger === null || burger === void 0 ? void 0 : burger.addEventListener("click", navOpen);
  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", navClose);
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var cardSliderThumbs = new Swiper(".card-slider__nav", {
    slidesPerView: "auto",
    spaceBetween: 18,
    watchSlidesProgress: true
  });
  new Swiper(".card-slider__main", {
    spaceBetween: 18,
    navigation: {
      nextEl: ".card-slider__btn--next",
      prevEl: ".card-slider__btn--prev"
    },
    thumbs: {
      swiper: cardSliderThumbs
    }
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var moreFilters = document.querySelectorAll(".catalog-filter__more");

  function loadMoreFilters(e) {
    var filtersContent = e.closest(".catalog-filter__content");
    var hiddenFilters = filtersContent.querySelectorAll(".catalog-filter__item--hidden");
    hiddenFilters.forEach(function (el) {
      return el.classList.remove("catalog-filter__item--hidden");
    });
    e.remove();
  }

  moreFilters === null || moreFilters === void 0 ? void 0 : moreFilters.forEach(function (el) {
    el.addEventListener("click", function (e) {
      loadMoreFilters(e.currentTarget);
    });
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var catalogFilterTop = document.querySelectorAll(".catalog-filter__top");
  catalogFilterTop.forEach(function (el) {
    return el.addEventListener("click", toggleFilter);
  });

  function toggleFilter() {
    this.closest(".catalog-filter").classList.toggle("isOpen");
  }
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var collectionsSlider = new Swiper(".collections-section-slider", {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 6,
    breakpoints: {
      577: {
        centeredSlides: false
      },
      769: {
        spaceBetween: 12,
        centeredSlides: false
      }
    },
    scrollbar: {
      el: '.collections-section-slider__scrollbar'
    },
    navigation: {
      nextEl: '.collections-section-slider__btn--next',
      prevEl: '.collections-section-slider__btn--prev'
    }
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var catalogToggle = document.querySelector(".filters-toggle");
  var catalogFilters = document.querySelector(".catalog-filters");
  var catalogFiltersClose = document.querySelector(".catalog-filters__close");

  function toggleFilters() {
    this.classList.toggle("isOpen");
    catalogFilters.classList.toggle("isOpen");
    document.body.classList.toggle("filters-open");
  }

  function hiddenFilters() {
    catalogFilters.classList.remove("isOpen");
    document.body.classList.remove("filters-open");
    catalogToggle.classList.remove("isOpen");
  }

  catalogToggle === null || catalogToggle === void 0 ? void 0 : catalogToggle.addEventListener("click", toggleFilters);
  catalogFiltersClose === null || catalogFiltersClose === void 0 ? void 0 : catalogFiltersClose.addEventListener("click", hiddenFilters);
});
var checboxes = document.querySelectorAll("input[type=checkbox]");
checboxes.forEach(function (el) {
  el.addEventListener("change", function (e) {
    console.log(e.currentTarget);
  });
});
"use strict";

var filtersBtn = document.querySelectorAll(".g-filters__btn");
filtersBtn.forEach(function (el) {
  el.addEventListener("click", function () {
    var filtersPath = el.dataset.filtersPath;
    el.closest(".g-filters").querySelector('.g-filters__btn--active').classList.remove('g-filters__btn--active');
    el.closest(".g-filters").querySelector("[data-filters-path=\"".concat(filtersPath, "\"]")).classList.add('g-filters__btn--active');
    var filtersContent = el.closest(".g-filters").querySelectorAll(".g-filters__content");

    var switchContent = function switchContent(path, element) {
      var _element$closest, _element$closest$quer;

      for (var i = 0; i < filtersContent.length; i++) {
        var _el = filtersContent[i];

        _el.classList.remove('g-filters__content--active');
      }

      (_element$closest = element.closest(".g-filters")) === null || _element$closest === void 0 ? void 0 : (_element$closest$quer = _element$closest.querySelector("[data-filters-target=\"".concat(path, "\"]"))) === null || _element$closest$quer === void 0 ? void 0 : _element$closest$quer.classList.add('g-filters__content--active');
    };

    switchContent(filtersPath, el);
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var footerTitles = document.querySelectorAll(".footer__title");
  footerTitles.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.currentTarget.classList.toggle("active");
      el.closest(".footer__col").querySelector(".footer-menu").classList.toggle("active");
    });
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  new Swiper('.hero-slider', {
    navigation: {
      nextEl: '.hero-slider__btn--next',
      prevEl: '.hero-slider__btn--prev'
    },
    pagination: {
      el: '.hero-slider__pag',
      type: 'bullets',
      clickable: true
    }
  });
});
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.logos').forEach(function (section, index) {
  var w = section.querySelector('.logos-slider .swiper-wrapper');

  var _ref = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -0.2] : [w.scrollWidth * -0.2, 0],
      _ref2 = _slicedToArray(_ref, 2),
      x = _ref2[0],
      xEnd = _ref2[1];

  gsap.fromTo(w, {
    x: x
  }, {
    x: xEnd,
    scrollTrigger: {
      trigger: section,
      scrub: 1
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  new Swiper('.logos-slider', {
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    centeredSlides: true
  });
});
"use strict";

var observer = lozad(".lozad");
observer.observe();
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var searchForm = document.querySelectorAll(".search-form__form");
  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("open-form")) {
      searchForm.forEach(function (el) {
        return el.classList.toggle("active");
      });
    } else if (!e.target.closest(".search-form")) {
      searchForm.forEach(function (el) {
        return el.classList.remove("active");
      });
    }
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var perfectCombinationSlider = document.querySelector(".perfect-combination-slider");

  if (perfectCombinationSlider) {
    var mySwiper;

    var initializeSlider = function initializeSlider() {
      mySwiper = new Swiper(perfectCombinationSlider, {
        slidesPerView: 'auto',
        spaceBetween: 6,
        centeredSlides: true,
        breakpoints: {
          577: {
            centeredSlides: false,
            slidesPerView: 2,
            spaceBetween: 30
          }
        },
        scrollbar: {
          el: '.perfect-combination-slider__scrollbar'
        },
        navigation: {
          nextEl: '.perfect-combination-slider__btn--next',
          prevEl: '.perfect-combination-slider__btn--prev'
        }
      });
    };

    if (window.innerWidth <= 768) {
      initializeSlider();
      perfectCombinationSlider.dataset.mobile = "true";
    }

    var mobileSlider = function mobileSlider() {
      if (window.innerWidth <= 768 && perfectCombinationSlider.dataset.mobile == "false") {
        initializeSlider();
        perfectCombinationSlider.dataset.mobile = "true";
      }

      if (window.innerWidth > 768) {
        perfectCombinationSlider.dataset.mobile = "false";

        if (perfectCombinationSlider.classList.contains("swiper-initialized")) {
          mySwiper.destroy();
        }
      }
    };

    mobileSlider();
    window.addEventListener("resize", function () {
      mobileSlider();
    });
  }
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var moreCategories = document.querySelector(".more-categories");
  var popularCategories = document.querySelector(".popular-categories");
  var hiddenCategories = document.querySelectorAll(".popular-category--hidden");
  moreCategories === null || moreCategories === void 0 ? void 0 : moreCategories.addEventListener("click", function (e) {
    popularCategories.classList.add("active");
    hiddenCategories.forEach(function (el) {
      return el.classList.remove("popular-category--hidden");
    });
    hiddenCategories.forEach(function (el) {
      return el.classList.add("popular-category--active");
    });
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var popularCategoriesSlider = document.querySelector(".popular-categories-slider");

  if (popularCategoriesSlider) {
    var mySwiper;

    var initializeSlider = function initializeSlider() {
      mySwiper = new Swiper(popularCategoriesSlider, {
        slidesPerView: 'auto',
        spaceBetween: 6,
        centeredSlides: true,
        breakpoints: {
          577: {
            centeredSlides: false
          }
        },
        scrollbar: {
          el: '.popular-categories-slider__scrollbar'
        },
        navigation: {
          nextEl: '.popular-categories-slider__btn--next',
          prevEl: '.popular-categories-slider__btn--prev'
        }
      });
    };

    if (window.innerWidth <= 768) {
      initializeSlider();
      popularCategoriesSlider.dataset.mobile = "true";
    }

    var mobileSlider = function mobileSlider() {
      if (window.innerWidth <= 768 && popularCategoriesSlider.dataset.mobile == "false") {
        initializeSlider();
        popularCategoriesSlider.dataset.mobile = "true";
      }

      if (window.innerWidth > 768) {
        popularCategoriesSlider.dataset.mobile = "false";

        if (popularCategoriesSlider.classList.contains("swiper-initialized")) {
          mySwiper.destroy();
        }
      }
    };

    mobileSlider();
    window.addEventListener("resize", function () {
      mobileSlider();
    });
  }
});
"use strict";

var productSlider = function productSlider() {
  var productSlider = new Swiper('.product-slider', {
    allowTouchMove: false,
    slidesPerView: 'auto',
    breakpoints: {
      1025: {
        allowTouchMove: true
      }
    },
    navigation: {
      nextEl: '.product-slider__btn--next',
      prevEl: '.product-slider__btn--prev'
    },
    pagination: {
      el: '.product-slider__pag',
      type: 'bullets',
      clickable: true
    }
  });
};

productSlider();
"use strict";

var rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 999999],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [999999]
    }
  });
  var input0 = document.getElementById('input-0');
  var input1 = document.getElementById('input-1');
  var inputs = [input0, input1];
  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  var setRangeSlider = function setRangeSlider(i, value) {
    var arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach(function (el, index) {
    el.addEventListener('change', function (e) {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var readMore = document.querySelectorAll(".read-more");
  readMore.forEach(function (el) {
    var flag = 0;
    el.addEventListener("click", function (e) {
      var fullText = e.currentTarget.closest(".read-more-wrapper").querySelector(".full-text");
      var text = e.currentTarget.dataset.text;

      if (flag == 0) {
        flag++;
        fullText.classList.add("active");
        e.currentTarget.innerHTML = 'Свернуть';
      } else {
        flag--;
        fullText.classList.remove("active");
        e.currentTarget.innerHTML = text;
      }
    });
  });
});
"use strict";

var fixBlock = document.querySelector('.fix-block');
var fixBlockHeight = fixBlock === null || fixBlock === void 0 ? void 0 : fixBlock.offsetTop;

var toggleFixed = function toggleFixed() {
  if (fixBlockHeight <= window.pageYOffset) {
    fixBlock === null || fixBlock === void 0 ? void 0 : fixBlock.classList.add('fixed');
  } else {
    fixBlock === null || fixBlock === void 0 ? void 0 : fixBlock.classList.remove('fixed');
  }
};

window.addEventListener('scroll', toggleFixed);
toggleFixed();
"use strict";

var selects = document.querySelectorAll(".g-select");
document.addEventListener("DOMContentLoaded", function () {
  if (selects) {
    selects.forEach(function (el) {
      var choices = new Choices(el, {
        itemSelectText: '',
        shouldSort: false,
        noResultsText: 'Не найдено'
      });
    });
  }
});
"use strict";

var simplebars = document.querySelectorAll("[data-simplebar]");

if (simplebars) {
  simplebars.forEach(function (el) {
    new SimpleBar(el);
  });
}
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var sortBy = document.querySelector(".sort-by");
  var sortByCurrent = document.querySelector(".sort-by__current");
  var sortByClose = document.querySelector(".sort-by__close");

  function visibleSort(e) {
    sortBy.classList.add("isOpen");
    document.body.classList.add("sort-open");

    if (e.classList.contains("sort-by__item")) {
      document.querySelectorAll(".sort-by__item").forEach(function (el) {
        return el.classList.remove("active");
      });
      e.classList.add("active");
      var text = e.textContent;
      sortByCurrent.textContent = text;
      hiddenSort();
    }
  }

  function hiddenSort() {
    sortBy === null || sortBy === void 0 ? void 0 : sortBy.classList.remove("isOpen");
    document.body.classList.remove("sort-open");
  }

  document.addEventListener("click", function (e) {
    if (e.target.closest(".open-sort-by") && !e.target.closest(".sort-by__close")) {
      visibleSort(e.target);
    } else if (e.target !== sortBy) {
      hiddenSort();
    }
  });
  sortByClose === null || sortByClose === void 0 ? void 0 : sortByClose.addEventListener("click", hiddenSort);
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var steppers = document.querySelectorAll('.g-stepper');
  steppers.forEach(function (stepper) {
    var stepperInput = stepper.querySelector('.g-stepper__input');
    var stepperBtnUp = stepper.querySelector('.g-stepper__btn--up');
    var stepperBtnDown = stepper.querySelector('.g-stepper__btn--down');
    var count = stepperInput.value;

    if (count <= 1) {
      stepperBtnDown.classList.add('g-stepper__btn--disabled');
    } else {
      stepperBtnDown.classList.remove('g-stepper__btn--disabled');
    }

    var isNotApple = function isNotApple() {
      if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return false;
      }

      return true;
    };

    function allowNumbersOnly(e) {
      var code = e.which ? e.which : e.keyCode;

      if (code > 31 && (code < 48 || code > 57)) {
        e.preventDefault();
      }
    }

    stepperInput.addEventListener('keyup', function (e) {
      var self = e.currentTarget;

      if (self.value == '0') {
        self.value = 1;
      }

      if (isNotApple) {
        self.style.width = "".concat(self.value.length + 1, "ex");
      } else {
        self.style.width = "".concat(self.value.length + 2, "ex");
      }

      count = stepperInput.value;

      if (count == 1) {
        stepperBtnDown.classList.add('g-stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('g-stepper__btn--disabled');
      }
    });
    stepperInput.addEventListener('keypress', function (e) {
      allowNumbersOnly(e);
    });
    stepperInput.addEventListener('change', function (e) {
      var self = e.currentTarget;

      if (!self.value) {
        self.value = 1;
      }

      count = stepperInput.value;

      if (count == 1) {
        stepperBtnDown.classList.add('g-stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('g-stepper__btn--disabled');
      }
    });
    stepperBtnUp.addEventListener('click', function (e) {
      e.preventDefault();
      count++;

      if (count == 1) {
        stepperBtnDown.classList.add('g-stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('g-stepper__btn--disabled');
      }

      stepperInput.value = count;

      if (isNotApple) {
        stepperInput.style.width = "".concat(stepperInput.value.length + 1, "ex");
      } else {
        stepperInput.style.width = "".concat(stepperInput.value.length + 2, "ex");
      }
    });
    stepperBtnDown.addEventListener('click', function (e) {
      e.preventDefault();
      count--;

      if (count == 1) {
        stepperBtnDown.classList.add('g-stepper__btn--disabled');
      } else {
        stepperBtnDown.classList.remove('g-stepper__btn--disabled');
      }

      stepperInput.value = count;

      if (isNotApple) {
        stepperInput.style.width = "".concat(stepperInput.value.length + 1, "ex");
      } else {
        stepperInput.style.width = "".concat(stepperInput.value.length + 2, "ex");
      }
    });
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  var moreTabsBtn = document.querySelectorAll(".g-tabs__btn--more");

  var moreTabs = function moreTabs(e, hiddenTabs) {
    e.classList.toggle("active");
    e.closest(".g-tabs").classList.toggle("active");
    hiddenTabs.forEach(function (el) {
      return el.classList.toggle("g-tabs__item--hidden");
    });
  };

  moreTabsBtn === null || moreTabsBtn === void 0 ? void 0 : moreTabsBtn.forEach(function (btn) {
    var hiddenTabs = btn.closest(".g-tabs").querySelectorAll(".g-tabs__item--hidden");
    btn.addEventListener("click", function (e) {
      moreTabs(e.currentTarget, hiddenTabs);
    });
  });
});
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  /* Variables */
  var toggleLocationBtns = document.querySelectorAll(".toggle-location");
  var regionSelection = document.querySelector(".region-selection");
  var regionSelectionBtns = document.querySelectorAll(".js-region-selection__btn");
  var regionSelectionChoice = document.querySelectorAll(".region-selection__choice");
  var regionSelectionClose = document.querySelector(".region-selection__close");
  var body = document.body;
  /* Functions */

  function toggleLocation() {
    regionSelection.classList.toggle("isOpen");
    body.classList.toggle("lock");
  }

  function hiddenLocation() {
    regionSelection.classList.remove("isOpen");
    body.classList.remove("lock");
  }

  function changeLocation(e) {
    regionSelectionChoice.forEach(function (el) {
      return el.textContent = e.currentTarget.textContent;
    });
    hiddenLocation();
  }
  /* Events */


  toggleLocationBtns.forEach(function (btn) {
    btn.addEventListener("click", toggleLocation);
  });
  regionSelectionBtns.forEach(function (btn) {
    btn.addEventListener("click", changeLocation);
  });
  regionSelectionClose.addEventListener("click", hiddenLocation);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hiddenLocation();
  });
  /* document.addEventListener("click", (e) => {
      if(e.target.classList.contains("region-selection")) {
          hiddenLocation();
      }
  }) */
});
"use strict";

/* productSlider(); */
document.addEventListener("DOMContentLoaded", function () {
  var waresSlider = document.querySelectorAll(".wares-slider");

  if (waresSlider) {
    waresSlider.forEach(function (el) {
      var mySwiper;

      var initializeSlider = function initializeSlider() {
        mySwiper = new Swiper(el, {
          slidesPerView: 2,
          loop: true,
          spaceBetween: 15,
          breakpoints: {
            769: {
              slidesPerView: 2
            },
            1025: {
              slidesPerView: 4
            }
          },
          navigation: {
            nextEl: '.wares-slider__btn--next',
            prevEl: '.wares-slider__btn--prev'
          }
        });
        mySwiper.on('slideChange', function () {
          productSlider();
        });
      };

      if (window.innerWidth <= 576) {
        if (el.classList.contains("swiper-initialized")) {
          mySwiper.destroy();
        }

        el.dataset.mobile = "true";
      }

      var mobileSlider = function mobileSlider() {
        if (window.innerWidth <= 576 && el.dataset.mobile == "false") {
          el.dataset.mobile = "true";

          if (el.classList.contains("swiper-initialized")) {
            mySwiper.destroy();
          }
        }

        if (window.innerWidth >= 576) {
          initializeSlider();
          el.dataset.mobile = "false";
        }
      };

      mobileSlider();
      window.addEventListener("resize", function () {
        mobileSlider();
      });
    });
  }
});
"use strict";
//# sourceMappingURL=main.js.map