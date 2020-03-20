/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/*! exports provided: Modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var language = {
  'ru': {
    title: 'Письмо отправлено',
    subject: 'Тема:',
    withoutSubject: 'Без темы',
    desc: 'Описание:',
    withoutDesc: 'Без описания'
  },
  'en': {
    title: 'The letter was sent',
    subject: 'Subject:',
    withoutSubject: 'Without subject',
    desc: 'Description:',
    withoutDesc: 'Without description'
  }
};
var Modal = /*#__PURE__*/function () {
  function Modal(lang, form, data) {
    _classCallCheck(this, Modal);

    this.lang = lang;
    this.data = data;
    this.overlay = '';
    this.modal = '';
    this.form = form;
  }

  _createClass(Modal, [{
    key: "buildModal",
    value: function buildModal() {
      var _this = this;

      this.overlay = this.createDomNode('div', 'overlay');
      this.modal = this.createDomNode('div', 'modal');
      var modalHeader = this.createDomNode('div', 'modal__header');
      var modalContent = this.createDomNode('div', 'modal__content');
      var modalFooter = this.createDomNode('div', 'modal__footer');
      modalHeader.innerHTML = "\n        <div class=\"modal__title\">".concat(language[this.lang].title, "</div>\n    ");

      for (var key in this.data) {
        var node = this.createDomNode('p', 'modal__text');
        node.innerHTML = this.data[key] ? "".concat(language[this.lang][key], " ").concat(this.data[key]) : language[this.lang]['without' + (key.charAt(0).toUpperCase() + key.slice(1))];
        modalContent.append(node);
      }

      modalFooter.innerHTML = "\n    <button class=\"modal__btn\" type=\"submit\">OK</button>\n    ";
      this.overlay.addEventListener('click', function (e) {
        return _this.close(e);
      });
      this.modal.addEventListener('click', function (e) {
        return _this.close(e);
      });
      this.modal.append(modalHeader);
      this.modal.append(modalContent);
      this.modal.append(modalFooter);
      this.overlay.append(this.modal);
      return this.overlay;
    }
  }, {
    key: "createDomNode",
    value: function createDomNode(element) {
      var _node$classList;

      var node = document.createElement(element);

      for (var _len = arguments.length, classes = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        classes[_key - 1] = arguments[_key];
      }

      (_node$classList = node.classList).add.apply(_node$classList, classes);

      return node;
    }
  }, {
    key: "open",
    value: function open() {
      var modal = this.buildModal();
      document.body.append(modal);
    }
  }, {
    key: "close",
    value: function close(e) {
      var classes = e.target.classList;

      if (!this.overlay) {
        return;
      }

      if (classes.contains('overlay') || classes.contains('modal__btn')) {
        this.form.reset();
        this.overlay.remove();
      }
    }
  }]);

  return Modal;
}();

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/Modal */ "./src/js/Modal.js");


window.onload = function () {
  siteScroll();
  addMenuClickHandler(); // Portfolio

  addTagClickHandler();
  addPortfolioClickHandler(); // Form send

  addFormClickHandler();
};

var siteScroll = function siteScroll() {
  document.addEventListener('scroll', function (e) {
    var header = document.querySelector('.header__wrapper');
    var curPos = pageYOffset;
    var links = document.querySelectorAll('.nav__link');
    curPos > 450 ? header.classList.add('header__wrapper_small') : header.classList.remove('header__wrapper_small');
    document.querySelectorAll('[id]').forEach(function (x) {
      if (x.offsetTop - x.offsetHeight * 0.3 <= curPos && x.offsetTop + x.offsetHeight * 0.7 > curPos) {
        document.querySelector('.nav__item_active').classList.remove('nav__item_active');
        document.querySelector("[href=\"#".concat(x.id, "\"]")).parentElement.classList.add('nav__item_active');
      }
    });
  });
};

var shuffleDomEl = function shuffleDomEl(parentNode) {
  for (var i = parentNode.children.length; i >= 0; i--) {
    parentNode.appendChild(parentNode.children[Math.random() * i | 0]);
  }
};

var addMenuClickHandler = function addMenuClickHandler() {
  var navList = document.querySelector('.nav__list');
  navList.addEventListener('click', function (e) {
    if (e.target.closest('.nav__item')) {
      document.querySelectorAll('.nav__item_active').forEach(function (x) {
        x.classList.remove('nav__item_active');
      });
      var navItem = e.target.closest('.nav__item');
      navItem.classList.add('nav__item_active');
    }
  });
};

var addTagClickHandler = function addTagClickHandler() {
  var porfoliosContainer = document.querySelector('.portfolios');
  var tags = document.querySelector('.tags');
  tags.addEventListener('click', function (e) {
    if (e.target.closest('.tag') && !e.target.closest('.tag_active')) {
      document.querySelectorAll('.tag_active').forEach(function (x) {
        x.classList.remove('tag_active');
      });
      var tag = e.target.closest('.tag');
      tag.classList.add('tag_active');
      shuffleDomEl(porfoliosContainer);
    }
  });
};

var addPortfolioClickHandler = function addPortfolioClickHandler() {
  var portfolios = document.querySelector('.portfolios');
  portfolios.addEventListener('click', function (e) {
    if (e.target.closest('.portfolios__item')) {
      var portfolioItem = e.target.closest('.portfolios__item');
      portfolioItem.classList.toggle('portfolios__item_active');
      document.querySelectorAll('.portfolios__item_active').forEach(function (x) {
        if (x !== portfolioItem) x.classList.remove('portfolios__item_active');
      });
    }
  });
};

var addFormClickHandler = function addFormClickHandler() {
  var form = document.querySelector('form');
  form.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
      var name = form.querySelector('[name=name]').value;
      var email = form.querySelector('[name=email]').value;
      var subject = form.querySelector('[name=subject]').value;
      var desc = form.querySelector('[name=desc]').value;

      if (name && email) {
        e.preventDefault();
        var modal = new _js_Modal__WEBPACK_IMPORTED_MODULE_0__["Modal"]('ru', form, {
          subject: subject,
          desc: desc
        });
        modal.open();
      }
    }
  });
};

/***/ }),

/***/ 0:
/*!***************************************************!*\
  !*** multi ./src/script.js ./src/sass/style.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/script.js */"./src/script.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map