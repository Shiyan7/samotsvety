/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/filters.js":
/*!******************************************!*\
  !*** ./src/blocks/components/filters.js ***!
  \******************************************/
/*! exports provided: filters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filters", function() { return filters; });
var filters = function filters() {
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
};

/***/ }),

/***/ "./src/blocks/components/lozad.js":
/*!****************************************!*\
  !*** ./src/blocks/components/lozad.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

var observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()(".lozad");
observer.observe();

/***/ }),

/***/ "./src/blocks/components/read-more.js":
/*!********************************************!*\
  !*** ./src/blocks/components/read-more.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/components/scroll.js":
/*!*****************************************!*\
  !*** ./src/blocks/components/scroll.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/components/select.js":
/*!*****************************************!*\
  !*** ./src/blocks/components/select.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);

var selects = document.querySelectorAll(".g-select");
document.addEventListener("DOMContentLoaded", function () {
  if (selects) {
    selects.forEach(function (el) {
      var choices = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(el, {
        itemSelectText: '',
        shouldSort: false,
        noResultsText: 'Не найдено'
      });
    });
  }
});

/***/ }),

/***/ "./src/blocks/components/simlebar.js":
/*!*******************************************!*\
  !*** ./src/blocks/components/simlebar.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var simplebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.esm.js");

var simplebars = document.querySelectorAll("[data-simplebar]");

if (simplebars) {
  simplebars.forEach(function (el) {
    new simplebar__WEBPACK_IMPORTED_MODULE_0__["default"](el);
  });
}

/***/ }),

/***/ "./src/blocks/components/stepper.js":
/*!******************************************!*\
  !*** ./src/blocks/components/stepper.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/components/tabs.js":
/*!***************************************!*\
  !*** ./src/blocks/components/tabs.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/modules/benefits/benefits-more.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/benefits/benefits-more.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/modules/card/card-slider.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/card/card-slider.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fslightbox */ "./node_modules/fslightbox/index.js");
/* harmony import */ var fslightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fslightbox__WEBPACK_IMPORTED_MODULE_1__);


document.addEventListener("DOMContentLoaded", function () {
  var cardSliderThumbs = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".card-slider__nav", {
    module: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Thumbs"]],
    slidesPerView: "auto",
    spaceBetween: 18,
    watchSlidesProgress: true
  });
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](".card-slider__main", {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Thumbs"]],
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

/***/ }),

/***/ "./src/blocks/modules/catalog/catalog-filter-more.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/catalog/catalog-filter-more.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/modules/catalog/catalog-filter-top.js":
/*!**********************************************************!*\
  !*** ./src/blocks/modules/catalog/catalog-filter-top.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var catalogFilterTop = document.querySelectorAll(".catalog-filter__top");
  catalogFilterTop.forEach(function (el) {
    return el.addEventListener("click", toggleFilter);
  });

  function toggleFilter() {
    this.closest(".catalog-filter").classList.toggle("isOpen");
  }
});

/***/ }),

/***/ "./src/blocks/modules/catalog/filters-toggle.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/catalog/filters-toggle.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/modules/catalog/product-slider.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/catalog/product-slider.js ***!
  \******************************************************/
/*! exports provided: productSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productSlider", function() { return productSlider; });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

var productSlider = function productSlider() {
  var gregerg = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.product-slider', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
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

/***/ }),

/***/ "./src/blocks/modules/catalog/range-slider.js":
/*!****************************************************!*\
  !*** ./src/blocks/modules/catalog/range-slider.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);

var rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(rangeSlider, {
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

/***/ }),

/***/ "./src/blocks/modules/catalog/sort-by.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/catalog/sort-by.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/modules/collections-section/collections-section-slider.js":
/*!******************************************************************************!*\
  !*** ./src/blocks/modules/collections-section/collections-section-slider.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_filters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/filters */ "./src/blocks/components/filters.js");
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");


document.addEventListener("DOMContentLoaded", function () {
  var collectionsSlider = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](".collections-section-slider", {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_1__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_1__["Scrollbar"]],
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
  Object(_components_filters__WEBPACK_IMPORTED_MODULE_0__["filters"])();
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer-menu.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/footer/footer-menu.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var footerTitles = document.querySelectorAll(".footer__title");
  footerTitles.forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.currentTarget.classList.toggle("active");
      el.closest(".footer__col").querySelector(".footer-menu").classList.toggle("active");
    });
  });
});

/***/ }),

/***/ "./src/blocks/modules/header/burger.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/burger.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
  overlay.addEventListener("click", navClose);
});

/***/ }),

/***/ "./src/blocks/modules/header/open-form.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/header/open-form.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/modules/header/toggle-location.js":
/*!******************************************************!*\
  !*** ./src/blocks/modules/header/toggle-location.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/modules/hero/hero-slider.js":
/*!************************************************!*\
  !*** ./src/blocks/modules/hero/hero-slider.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener("DOMContentLoaded", function () {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.hero-slider', {
    modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"]],
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

/***/ }),

/***/ "./src/blocks/modules/logos/logos-slider.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/logos/logos-slider.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




gsap__WEBPACK_IMPORTED_MODULE_2__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["default"]);

var showDemo = function showDemo() {
  gsap__WEBPACK_IMPORTED_MODULE_2__["default"].utils.toArray('.logos').forEach(function (section, index) {
    var w = section.querySelector('.logos-slider .swiper-wrapper');

    var _ref = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -0.2] : [w.scrollWidth * -0.2, 0],
        _ref2 = _slicedToArray(_ref, 2),
        x = _ref2[0],
        xEnd = _ref2[1];

    gsap__WEBPACK_IMPORTED_MODULE_2__["default"].fromTo(w, {
      x: x
    }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 1
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.logos-slider', {
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    centeredSlides: true
  });
});
showDemo();

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! exports provided: GraphModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphModal", function() { return GraphModal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GraphModal = /*#__PURE__*/function () {
  function GraphModal(t) {
    _classCallCheck(this, GraphModal);

    this.options = Object.assign({
      isOpen: function isOpen() {},
      isClose: function isClose() {}
    }, t), this.modal = document.querySelector(".modal"), this.speed = 300, this.animation = "fade", this._reOpen = !1, this._nextContainer = !1, this.modalContainer = !1, this.isOpen = !1, this.previousActiveElement = !1, this._focusElements = ["a[href]", "input", "select", "textarea", "button", "iframe", "[contenteditable]", "[tabindex]:not([tabindex^=\"-\"])"], this._fixBlocks = document.querySelectorAll(".fix-block"), this.events();
  }

  _createClass(GraphModal, [{
    key: "events",
    value: function events() {
      this.modal && (document.addEventListener("click", function (t) {
        var e = t.target.closest("[data-graph-path]");

        if (e) {
          var _t = e.dataset.graphPath,
              s = e.dataset.graphAnimation,
              i = e.dataset.graphSpeed;
          return this.animation = s || "fade", this.speed = i ? parseInt(i) : 300, this._nextContainer = document.querySelector("[data-graph-target=\"".concat(_t, "\"]")), void this.open();
        }

        t.target.closest(".modal__close") && this.close();
      }.bind(this)), window.addEventListener("keydown", function (t) {
        27 == t.keyCode && this.isOpen && this.close(), 9 == t.which && this.isOpen && this.focusCatch(t);
      }.bind(this)), this.modal.addEventListener("click", function (t) {
        t.target.classList.contains("modal__container") || t.target.closest(".modal__container") || !this.isOpen || this.close();
      }.bind(this)));
    }
  }, {
    key: "open",
    value: function open(t) {
      var _this = this;

      if (this.previousActiveElement = document.activeElement, this.isOpen) return this.reOpen = !0, void this.close();
      this.modalContainer = this._nextContainer, t && (this.modalContainer = document.querySelector("[data-graph-target=\"".concat(t, "\"]"))), this.modal.style.setProperty("--transition-time", "".concat(this.speed / 1e3, "s")), this.modal.classList.add("is-open"), this.disableScroll(), this.modalContainer.classList.add("modal-open"), this.modalContainer.classList.add(this.animation), setTimeout(function () {
        _this.options.isOpen(_this), _this.modalContainer.classList.add("animate-open"), _this.isOpen = !0, _this.focusTrap();
      }, this.speed);
    }
  }, {
    key: "close",
    value: function close() {
      this.modalContainer && (this.modalContainer.classList.remove("animate-open"), this.modalContainer.classList.remove(this.animation), this.modal.classList.remove("is-open"), this.modalContainer.classList.remove("modal-open"), this.enableScroll(), this.options.isClose(this), this.isOpen = !1, this.focusTrap(), this.reOpen && (this.reOpen = !1, this.open()));
    }
  }, {
    key: "focusCatch",
    value: function focusCatch(t) {
      var e = this.modalContainer.querySelectorAll(this._focusElements),
          s = Array.prototype.slice.call(e),
          i = s.indexOf(document.activeElement);
      t.shiftKey && 0 === i && (s[s.length - 1].focus(), t.preventDefault()), t.shiftKey || i !== s.length - 1 || (s[0].focus(), t.preventDefault());
    }
  }, {
    key: "focusTrap",
    value: function focusTrap() {
      var t = this.modalContainer.querySelectorAll(this._focusElements);
      this.isOpen ? t.length && t[0].focus() : this.previousActiveElement.focus();
    }
  }, {
    key: "disableScroll",
    value: function disableScroll() {
      document.body.classList.add("lock");
    }
  }, {
    key: "enableScroll",
    value: function enableScroll() {
      document.body.classList.remove("lock");
    }
  }]);

  return GraphModal;
}();
/* Setup */

new GraphModal();

/***/ }),

/***/ "./src/blocks/modules/perfect-combination/perfect-combination-slider.js":
/*!******************************************************************************!*\
  !*** ./src/blocks/modules/perfect-combination/perfect-combination-slider.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener("DOMContentLoaded", function () {
  var perfectCombinationSlider = document.querySelector(".perfect-combination-slider");

  if (perfectCombinationSlider) {
    var mySwiper;

    var initializeSlider = function initializeSlider() {
      mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](perfectCombinationSlider, {
        slidesPerView: 'auto',
        spaceBetween: 6,
        centeredSlides: true,
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"]],
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

/***/ }),

/***/ "./src/blocks/modules/popular-categories/popular-categories-more.js":
/*!**************************************************************************!*\
  !*** ./src/blocks/modules/popular-categories/popular-categories-more.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/blocks/modules/popular-categories/popular-categories-slider.js":
/*!****************************************************************************!*\
  !*** ./src/blocks/modules/popular-categories/popular-categories-slider.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

document.addEventListener("DOMContentLoaded", function () {
  var popularCategoriesSlider = document.querySelector(".popular-categories-slider");

  if (popularCategoriesSlider) {
    var mySwiper;

    var initializeSlider = function initializeSlider() {
      mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](popularCategoriesSlider, {
        slidesPerView: 'auto',
        spaceBetween: 6,
        centeredSlides: true,
        modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"], swiper__WEBPACK_IMPORTED_MODULE_0__["Scrollbar"]],
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

/***/ }),

/***/ "./src/blocks/modules/wares/wares-slider.js":
/*!**************************************************!*\
  !*** ./src/blocks/modules/wares/wares-slider.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _catalog_product_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../catalog/product-slider */ "./src/blocks/modules/catalog/product-slider.js");


document.addEventListener("DOMContentLoaded", function () {
  var waresSlider = document.querySelectorAll(".wares-slider");

  if (waresSlider) {
    waresSlider.forEach(function (el) {
      var mySwiper;

      var initializeSlider = function initializeSlider() {
        mySwiper = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"](el, {
          slidesPerView: 2,
          loop: true,
          spaceBetween: 15,
          modules: [swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]],
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
          Object(_catalog_product_slider__WEBPACK_IMPORTED_MODULE_1__["productSlider"])();
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

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_components_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/components/select */ "./src/blocks/components/select.js");
/* harmony import */ var _blocks_components_simlebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../blocks/components/simlebar */ "./src/blocks/components/simlebar.js");
/* harmony import */ var _blocks_components_read_more__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../blocks/components/read-more */ "./src/blocks/components/read-more.js");
/* harmony import */ var _blocks_components_read_more__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_read_more__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _blocks_components_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../blocks/components/scroll */ "./src/blocks/components/scroll.js");
/* harmony import */ var _blocks_components_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _blocks_components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../blocks/components/tabs */ "./src/blocks/components/tabs.js");
/* harmony import */ var _blocks_components_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_components_lozad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/components/lozad */ "./src/blocks/components/lozad.js");
/* harmony import */ var _blocks_components_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../blocks/components/stepper */ "./src/blocks/components/stepper.js");
/* harmony import */ var _blocks_components_stepper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_stepper__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_open_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/open-form */ "./src/blocks/modules/header/open-form.js");
/* harmony import */ var _modules_header_open_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_open_form__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_toggle_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/toggle-location */ "./src/blocks/modules/header/toggle-location.js");
/* harmony import */ var _modules_header_toggle_location__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_toggle_location__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_header_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/header/burger */ "./src/blocks/modules/header/burger.js");
/* harmony import */ var _modules_header_burger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_header_burger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_hero_hero_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/hero/hero-slider */ "./src/blocks/modules/hero/hero-slider.js");
/* harmony import */ var _modules_logos_logos_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/logos/logos-slider */ "./src/blocks/modules/logos/logos-slider.js");
/* harmony import */ var _modules_benefits_benefits_more__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/benefits/benefits-more */ "./src/blocks/modules/benefits/benefits-more.js");
/* harmony import */ var _modules_benefits_benefits_more__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_benefits_benefits_more__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_collections_section_collections_section_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/collections-section/collections-section-slider */ "./src/blocks/modules/collections-section/collections-section-slider.js");
/* harmony import */ var _modules_popular_categories_popular_categories_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/popular-categories/popular-categories-slider */ "./src/blocks/modules/popular-categories/popular-categories-slider.js");
/* harmony import */ var _modules_popular_categories_popular_categories_more__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/popular-categories/popular-categories-more */ "./src/blocks/modules/popular-categories/popular-categories-more.js");
/* harmony import */ var _modules_popular_categories_popular_categories_more__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_popular_categories_popular_categories_more__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_footer_footer_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/footer/footer-menu */ "./src/blocks/modules/footer/footer-menu.js");
/* harmony import */ var _modules_footer_footer_menu__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer_menu__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_catalog_filters_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/catalog/filters-toggle */ "./src/blocks/modules/catalog/filters-toggle.js");
/* harmony import */ var _modules_catalog_filters_toggle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_filters_toggle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_catalog_sort_by__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/catalog/sort-by */ "./src/blocks/modules/catalog/sort-by.js");
/* harmony import */ var _modules_catalog_sort_by__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_sort_by__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_catalog_catalog_filter_top__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/catalog/catalog-filter-top */ "./src/blocks/modules/catalog/catalog-filter-top.js");
/* harmony import */ var _modules_catalog_catalog_filter_top__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_catalog_filter_top__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_catalog_catalog_filter_more__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/catalog/catalog-filter-more */ "./src/blocks/modules/catalog/catalog-filter-more.js");
/* harmony import */ var _modules_catalog_catalog_filter_more__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_catalog_catalog_filter_more__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_catalog_range_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/catalog/range-slider */ "./src/blocks/modules/catalog/range-slider.js");
/* harmony import */ var _modules_catalog_product_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/catalog/product-slider */ "./src/blocks/modules/catalog/product-slider.js");
/* harmony import */ var _modules_card_card_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/card/card-slider */ "./src/blocks/modules/card/card-slider.js");
/* harmony import */ var _modules_perfect_combination_perfect_combination_slider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/perfect-combination/perfect-combination-slider */ "./src/blocks/modules/perfect-combination/perfect-combination-slider.js");
/* harmony import */ var _modules_wares_wares_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/wares/wares-slider */ "./src/blocks/modules/wares/wares-slider.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");





















/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");



/***/ })

/******/ });
//# sourceMappingURL=main.js.map