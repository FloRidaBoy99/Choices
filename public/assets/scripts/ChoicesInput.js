/*! choices.js v4.0.0 | (c) 2018 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ 
(function webpackUniversalModuleDefinition(root, factory) {
   //CommonJS2
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
   //AMD
	else if(typeof define === 'function' && define.amd)
		define([], factory);
   //CommonJS
	else if(typeof exports === 'object')
		exports["ChoicesInput"] = factory();
   //Window
	else
		root["ChoicesInput"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/public/assets/scripts/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */

/**
 * Get a random number between a range
 * @param  {Number} min Minimum range
 * @param  {Number} max Maximum range
 * @return {Number}     Random number
 */
var getRandomNumber = exports.getRandomNumber = function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * Generates a string of random chars
 * @param  {Number} length Length of the string to generate
 * @return {String} String of random chars
 */
var generateChars = exports.generateChars = function generateChars(length) {
  var chars = '';

  for (var i = 0; i < length; i++) {
    var randomChar = getRandomNumber(0, 36);
    chars += randomChar.toString(36);
  }

  return chars;
};

/**
 * Generates a unique id based on an element
 * @param  {HTMLElement} element Element to generate the id from
 * @param  {String} Prefix for the Id
 * @return {String} Unique Id
 */
var generateId = exports.generateId = function generateId(element, prefix) {
  var id = element.id || element.name && element.name + '-' + generateChars(2) || generateChars(4);
  id = id.replace(/(:|\.|\[|\]|,)/g, '');
  id = prefix + '-' + id;

  return id;
};

/**
 * Gets the type of an object
 * Why not use typeof? See here: http: //bonsaiden.github.io/JavaScript-Garden/#types.typeof
 * @param  {Object}  obj  Object to check
 * @return {Boolean}
 */
var getType = exports.getType = function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
};

/**
 * Tests the type of an object
 * @param  {String}  type Type to test object against
 * @param  {Object}  obj  Object to be tested
 * @return {Boolean}
 */
var isType = exports.isType = function isType(type, obj) {
  var clas = getType(obj);
  return obj !== undefined && obj !== null && clas === type;
};

/**
 * Tests to see if a passed object is an element
 * @param  {Object}  obj  Object to be tested
 * @return {Boolean}
 */
var isElement = exports.isElement = function isElement(element) {
  return element instanceof Element;
};

/**
 * Merges unspecified amount of objects into new object
 * @private
 * @return {Object} Merged object of arguments
 */
var extend = exports.extend = function extend() {
  var extended = {};
  var length = arguments.length;

  /**
   * Merge one object into another
   * @param  {Object} obj  Object to merge into extended object
   */
  var merge = function merge(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // If deep merge and property is an object, merge properties
        if (isType('Object', obj[prop])) {
          extended[prop] = extend(true, extended[prop], obj[prop]);
        } else {
          extended[prop] = obj[prop];
        }
      }
    }
  };

  // Loop through each passed argument
  for (var i = 0; i < length; i++) {
    // store argument at position i
    var obj = arguments[i];

    // If we are in fact dealing with an object, merge it.
    if (isType('Object', obj)) {
      merge(obj);
    }
  }

  return extended;
};

var wrap = exports.wrap = function wrap(element, wrapper) {
  wrapper = wrapper || document.createElement('div');
  if (element.nextSibling) {
    element.parentNode.insertBefore(wrapper, element.nextSibling);
  } else {
    element.parentNode.appendChild(wrapper);
  }
  return wrapper.appendChild(element);
};

/**
 * Find ancestor in DOM tree
 * @param  {NodeElement} el  Element to start search from
 * @param  {[type]} cls Class of parent
 * @return {NodeElement}     Found parent element
 */
var findAncestor = exports.findAncestor = function findAncestor(el, cls) {
  while ((el = el.parentElement) && !el.classList.contains(cls)) {}
  return el;
};

/**
 * Find ancestor in DOM tree by attribute name
 * @param  {NodeElement} el  Element to start search from
 * @param  {string} attr Attribute name of parent
 * @return {?NodeElement}     Found parent element or null
 */
var findAncestorByAttrName = exports.findAncestorByAttrName = function findAncestorByAttrName(el, attr) {
  var target = el;

  while (target) {
    if (target.hasAttribute(attr)) {
      return target;
    }

    target = target.parentElement;
  }

  return null;
};

/**
 * Get the next or previous element from a given start point
 * @param  {HTMLElement} startEl    Element to start position from
 * @param  {String}      className  The class we will look through
 * @param  {Number}      direction  Positive next element, negative previous element
 * @return {[HTMLElement}           Found element
 */
var getAdjacentEl = exports.getAdjacentEl = function getAdjacentEl(startEl, className) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (!startEl || !className) return;

  var parent = startEl.parentNode.parentNode;
  var children = Array.from(parent.querySelectorAll(className));

  var startPos = children.indexOf(startEl);
  var operatorDirection = direction > 0 ? 1 : -1;

  return children[startPos + operatorDirection];
};

/**
 * Determine whether an element is within
 * @param  {HTMLElement} el        Element to test
 * @param  {HTMLElement} parent    Scrolling parent
 * @param  {Number} direction      Whether element is visible from above or below
 * @return {Boolean}
 */
var isScrolledIntoView = exports.isScrolledIntoView = function isScrolledIntoView(el, parent) {
  var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (!el) return;

  var isVisible = void 0;

  if (direction > 0) {
    // In view from bottom
    isVisible = parent.scrollTop + parent.offsetHeight >= el.offsetTop + el.offsetHeight;
  } else {
    // In view from top
    isVisible = el.offsetTop >= parent.scrollTop;
  }

  return isVisible;
};

/**
 * Escapes html in the string
 * @param  {String} html Initial string/html
 * @return {String}  Sanitised string
 */
var stripHTML = exports.stripHTML = function stripHTML(html) {
  if (!isType('String', html)) {
    return html;
  }

  return html.replace(/&/g, '&amp;').replace(/>/g, '&rt;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
};

/**
 * Turn a string into a node
 * @param  {String} String to convert
 * @return {HTMLElement}   Converted node element
 */
var strToEl = exports.strToEl = function () {
  var tmpEl = document.createElement('div');
  return function (str) {
    var cleanedInput = str.trim();
    var r = void 0;
    tmpEl.innerHTML = cleanedInput;
    r = tmpEl.children[0];

    while (tmpEl.firstChild) {
      tmpEl.removeChild(tmpEl.firstChild);
    }

    return r;
  };
}();

/**
 * Determines the width of a passed input based on its value and passes
 * it to the supplied callback function.
 */
var calcWidthOfInput = exports.calcWidthOfInput = function calcWidthOfInput(input, callback) {
  var value = input.value || input.placeholder;
  var width = input.offsetWidth;

  if (value) {
    var testEl = strToEl('<span>' + stripHTML(value) + '</span>');
    testEl.style.position = 'absolute';
    testEl.style.padding = '0';
    testEl.style.top = '-9999px';
    testEl.style.left = '-9999px';
    testEl.style.width = 'auto';
    testEl.style.whiteSpace = 'pre';

    if (document.body.contains(input) && window.getComputedStyle) {
      var inputStyle = window.getComputedStyle(input);

      if (inputStyle) {
        testEl.style.fontSize = inputStyle.fontSize;
        testEl.style.fontFamily = inputStyle.fontFamily;
        testEl.style.fontWeight = inputStyle.fontWeight;
        testEl.style.fontStyle = inputStyle.fontStyle;
        testEl.style.letterSpacing = inputStyle.letterSpacing;
        testEl.style.textTransform = inputStyle.textTransform;
        testEl.style.padding = inputStyle.padding;
      }
    }

    document.body.appendChild(testEl);

    requestAnimationFrame(function () {
      if (value && testEl.offsetWidth !== input.offsetWidth) {
        width = testEl.offsetWidth + 4;
      }

      document.body.removeChild(testEl);

      callback.call(undefined, width + 'px');
    });
  } else {
    callback.call(undefined, width + 'px');
  }
};

/**
 * Sorting function for current and previous string
 * @param  {String} a Current value
 * @param  {String} b Next value
 * @return {Number}   -1 for after previous,
 *                    1 for before,
 *                    0 for same location
 */
var sortByAlpha = exports.sortByAlpha = function sortByAlpha(a, b) {
  var labelA = (a.label || a.value).toLowerCase();
  var labelB = (b.label || b.value).toLowerCase();

  if (labelA < labelB) {
    return -1;
  }

  if (labelA > labelB) {
    return 1;
  }

  return 0;
};

/**
 * Sort by numeric score
 * @param  {Object} a Current value
 * @param  {Object} b Next value
 * @return {Number}   -1 for after previous,
 *                    1 for before,
 *                    0 for same location
 */
var sortByScore = exports.sortByScore = function sortByScore(a, b) {
  return a.score - b.score;
};

/**
 * Dispatch native event
 * @param  {NodeElement} element Element to trigger event on
 * @param  {String} type         Type of event to trigger
 * @param  {Object} customArgs   Data to pass with event
 * @return {Object}              Triggered event
 */
var dispatchEvent = exports.dispatchEvent = function dispatchEvent(element, type) {
  var customArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  var event = new CustomEvent(type, {
    detail: customArgs,
    bubbles: true,
    cancelable: true
  });

  return element.dispatchEvent(event);
};

/**
 * Tests value against a regular expression
 * @param  {string} value   Value to test
 * @return {Boolean}        Whether test passed/failed
 * @private
 */
var regexFilter = exports.regexFilter = function regexFilter(value, regex) {
  if (!value || !regex) {
    return false;
  }

  var expression = new RegExp(regex.source, 'i');
  return expression.test(value);
};

var getWindowHeight = exports.getWindowHeight = function getWindowHeight() {
  var body = document.body;
  var html = document.documentElement;
  return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
};

var reduceToValues = exports.reduceToValues = function reduceToValues(items) {
  var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'value';

  var values = items.reduce(function (prev, current) {
    prev.push(current[key]);
    return prev;
  }, []);

  return values;
};

/**
 * Fetch properties from object
 * @param {Object} object Related object
 * @param {String} path   Path to value
 */
var fetchFromObject = exports.fetchFromObject = function fetchFromObject(object, path) {
  var index = path.indexOf('.');

  if (index > -1) {
    return fetchFromObject(object[path.substring(0, index)], path.substr(index + 1));
  }

  return object[path];
};

var isIE11 = exports.isIE11 = function isIE11() {
  return !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
};

var existsInArray = exports.existsInArray = function existsInArray(array, value) {
  var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'value';
  return array.some(function (item) {
    if (isType('String', value)) {
      return item[key] === value.trim();
    }

    return item[key] === value;
  });
};

/**
 * Deep clone an object
 * @param  {Object} obj Object to clone
 * @return {Object}     Clone of the object
 * @private
 */
var cloneObject = exports.cloneObject = function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SCROLLING_SPEED = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = undefined;

var _utils = __webpack_require__(0);

var DEFAULT_CLASSNAMES = exports.DEFAULT_CLASSNAMES = {
  containerOuter: 'choices',
  containerInner: 'choices__inner',
  input: 'choices__input',
  inputCloned: 'choices__input--cloned',
  list: 'choices__list',
  listItems: 'choices__list--multiple',
  listSingle: 'choices__list--single',
  listDropdown: 'choices__list--dropdown',
  item: 'choices__item',
  itemSelectable: 'choices__item--selectable',
  itemDisabled: 'choices__item--disabled',
  itemChoice: 'choices__item--choice',
  placeholder: 'choices__placeholder',
  group: 'choices__group',
  groupHeading: 'choices__heading',
  button: 'choices__button',
  activeState: 'is-active',
  focusState: 'is-focused',
  openState: 'is-open',
  disabledState: 'is-disabled',
  highlightedState: 'is-highlighted',
  hiddenState: 'is-hidden',
  flippedState: 'is-flipped',
  loadingState: 'is-loading',
  noResults: 'has-no-results',
  noChoices: 'has-no-choices'
};

var DEFAULT_CONFIG = exports.DEFAULT_CONFIG = {
  items: [],
  choices: [],
  silent: false,
  renderChoiceLimit: -1,
  maxItemCount: -1,
  addItems: true,
  removeItems: true,
  removeItemButton: false,
  editItems: false,
  duplicateItemsAllowed: true,
  delimiter: ',',
  paste: true,
  searchEnabled: true,
  searchChoices: true,
  searchFloor: 1,
  searchResultLimit: 4,
  searchFields: ['label', 'value'],
  position: 'auto',
  resetScrollPosition: true,
  regexFilter: null,
  shouldSort: true,
  shouldSortItems: false,
  placeholder: true,
  placeholderValue: null,
  searchPlaceholderValue: null,
  prependValue: null,
  appendValue: null,
  renderSelectedChoices: 'auto',
  loadingText: 'Loading...',
  noResultsText: 'No results found',
  noChoicesText: 'No choices to choose from',
  itemSelectText: 'Press to select',
  uniqueItemText: 'Only unique values can be added.',
  addItemText: function addItemText(value) {
    return 'Press Enter to add <b>"' + (0, _utils.stripHTML)(value) + '"</b>';
  },
  maxItemText: function maxItemText(maxItemCount) {
    return 'Only ' + maxItemCount + ' values can be added.';
  },
  itemComparer: function itemComparer(choice, item) {
    return choice === item;
  },
  fuseOptions: {
    includeScore: true
  },
  callbackOnInit: null,
  callbackOnCreateTemplates: null
};

var EVENTS = exports.EVENTS = {
  showDropdown: 'showDropdown',
  hideDropdown: 'hideDropdown',
  change: 'change',
  choice: 'choice',
  search: 'search',
  addItem: 'addItem',
  removeItem: 'removeItem',
  highlightItem: 'highlightItem'
};

var ACTION_TYPES = exports.ACTION_TYPES = {
  ADD_CHOICE: 'ADD_CHOICE',
  FILTER_CHOICES: 'FILTER_CHOICES',
  ACTIVATE_CHOICES: 'ACTIVATE_CHOICES',
  CLEAR_CHOICES: 'CLEAR_CHOICES',
  ADD_GROUP: 'ADD_GROUP',
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  HIGHLIGHT_ITEM: 'HIGHLIGHT_ITEM',
  CLEAR_ALL: 'CLEAR_ALL'
};

var KEY_CODES = exports.KEY_CODES = {
  BACK_KEY: 46,
  DELETE_KEY: 8,
  ENTER_KEY: 13,
  A_KEY: 65,
  ESC_KEY: 27,
  UP_KEY: 38,
  DOWN_KEY: 40,
  PAGE_UP_KEY: 33,
  PAGE_DOWN_KEY: 34
};

var SCROLLING_SPEED = exports.SCROLLING_SPEED = 4;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(13);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(42);
var toPrimitive = __webpack_require__(43);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(4);
var hide = __webpack_require__(5);
var redefine = __webpack_require__(21);
var ctx = __webpack_require__(22);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(5);
var has = __webpack_require__(9);
var SRC = __webpack_require__(14)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(4).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(44);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(50);
var defined = __webpack_require__(11);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(10);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(11);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(64);

// CONCATENATED MODULE: ./node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ var _root = (root);

// CONCATENATED MODULE: ./node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (Symbol);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

// CONCATENATED MODULE: ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);

// CONCATENATED MODULE: ./node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);

// CONCATENATED MODULE: ./node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);

// CONCATENATED MODULE: ./node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);

// CONCATENATED MODULE: ./node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);

// EXTERNAL MODULE: ./node_modules/symbol-observable/es/index.js
var es = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/redux/es/createStore.js



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore_createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore_createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!lodash_es_isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}
// CONCATENATED MODULE: ./node_modules/redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning_warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ./node_modules/redux/es/combineReducers.js




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!lodash_es_isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
// CONCATENATED MODULE: ./node_modules/redux/es/bindActionCreators.js
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
// CONCATENATED MODULE: ./node_modules/redux/es/compose.js
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
// CONCATENATED MODULE: ./node_modules/redux/es/applyMiddleware.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
// CONCATENATED MODULE: ./node_modules/redux/es/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore_createStore; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 31 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WrappedElement = function () {
  function WrappedElement(_ref) {
    var element = _ref.element,
        classNames = _ref.classNames;

    _classCallCheck(this, WrappedElement);

    Object.assign(this, { element: element, classNames: classNames });

    if (!(0, _utils.isElement)(element)) {
      throw new TypeError('Invalid element passed');
    }

    this.isDisabled = false;
  }

  _createClass(WrappedElement, [{
    key: 'conceal',
    value: function conceal() {
      // Hide passed input
      this.element.classList.add(this.classNames.input, this.classNames.hiddenState);

      // Remove element from tab index
      this.element.tabIndex = '-1';

      // Backup original styles if any
      var origStyle = this.element.getAttribute('style');

      if (origStyle) {
        this.element.setAttribute('data-choice-orig-style', origStyle);
      }

      this.element.setAttribute('aria-hidden', 'true');
      this.element.setAttribute('data-choice', 'active');
    }
  }, {
    key: 'reveal',
    value: function reveal() {
      // Reinstate passed element
      this.element.classList.remove(this.classNames.input, this.classNames.hiddenState);
      this.element.removeAttribute('tabindex');

      // Recover original styles if any
      var origStyle = this.element.getAttribute('data-choice-orig-style');

      if (origStyle) {
        this.element.removeAttribute('data-choice-orig-style');
        this.element.setAttribute('style', origStyle);
      } else {
        this.element.removeAttribute('style');
      }
      this.element.removeAttribute('aria-hidden');
      this.element.removeAttribute('data-choice');

      // Re-assign values - this is weird, I know
      this.element.value = this.element.value;
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.element.removeAttribute('disabled');
      this.element.disabled = false;
      this.isDisabled = false;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.element.setAttribute('disabled', '');
      this.element.disabled = true;
      this.isDisabled = true;
    }
  }, {
    key: 'triggerEvent',
    value: function triggerEvent(eventType, data) {
      (0, _utils.dispatchEvent)(this.element, eventType, data);
    }
  }, {
    key: 'type',
    get: function get() {
      return this.element.type;
    }
  }, {
    key: 'value',
    get: function get() {
      return this.element.value;
    }
  }]);

  return WrappedElement;
}();

exports.default = WrappedElement;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TEMPLATES = undefined;

var _classnames = __webpack_require__(79);

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TEMPLATES = exports.TEMPLATES = {
  containerOuter: function containerOuter(globalClasses, direction, searchEnabled, passedElementType) {
    var tabIndex = passedElementType === 'select-one' ? 'tabindex="0"' : '';
    var role = passedElementType !== 'text' ? 'role="listbox"' : '';
    var ariaAutoComplete = '';

    if (passedElementType !== 'text' && searchEnabled) {
      role = 'role="combobox"';
      ariaAutoComplete = 'aria-autocomplete="list"';
    }

    return (0, _utils.strToEl)('\n      <div\n        class="' + globalClasses.containerOuter + '"\n        data-type="' + passedElementType + '"\n        ' + role + '\n        ' + tabIndex + '\n        ' + ariaAutoComplete + '\n        aria-haspopup="true"\n        aria-expanded="false"\n        dir="' + direction + '"\n        >\n      </div>\n    ');
  },
  containerInner: function containerInner(globalClasses) {
    return (0, _utils.strToEl)('\n      <div class="' + globalClasses.containerInner + '"></div>\n    ');
  },
  itemList: function itemList(globalClasses, isSelectOneElement) {
    var _classNames;

    var localClasses = (0, _classnames2.default)(globalClasses.list, (_classNames = {}, _defineProperty(_classNames, globalClasses.listSingle, isSelectOneElement), _defineProperty(_classNames, globalClasses.listItems, !isSelectOneElement), _classNames));

    return (0, _utils.strToEl)('\n      <div class="' + localClasses + '"></div>\n    ');
  },
  placeholder: function placeholder(globalClasses, value) {
    return (0, _utils.strToEl)('\n      <div class="' + globalClasses.placeholder + '">\n        ' + value + '\n      </div>\n    ');
  },
  item: function item(globalClasses, data, removeItemButton) {
    var _classNames2;

    var ariaSelected = data.active ? 'aria-selected="true"' : '';
    var ariaDisabled = data.disabled ? 'aria-disabled="true"' : '';

    var localClasses = (0, _classnames2.default)(globalClasses.item, (_classNames2 = {}, _defineProperty(_classNames2, globalClasses.highlightedState, data.highlighted), _defineProperty(_classNames2, globalClasses.itemSelectable, !data.highlighted), _defineProperty(_classNames2, globalClasses.placeholder, data.placeholder), _classNames2));

    if (removeItemButton) {
      var _classNames3;

      localClasses = (0, _classnames2.default)(globalClasses.item, (_classNames3 = {}, _defineProperty(_classNames3, globalClasses.highlightedState, data.highlighted), _defineProperty(_classNames3, globalClasses.itemSelectable, !data.disabled), _defineProperty(_classNames3, globalClasses.placeholder, data.placeholder), _classNames3));

      return (0, _utils.strToEl)('\n        <div\n          class="' + localClasses + '"\n          data-item\n          data-id="' + data.id + '"\n          data-value="' + data.value + '"\n          data-deletable\n          ' + ariaSelected + '\n          ' + ariaDisabled + '\n          >\n          ' + data.label + '<!--\n       --><button\n            type="button"\n            class="' + globalClasses.button + '"\n            data-button\n            aria-label="Remove item: \'' + data.value + '\'"\n            >\n            Remove item\n          </button>\n        </div>\n      ');
    }

    return (0, _utils.strToEl)('\n      <div\n        class="' + localClasses + '"\n        data-item\n        data-id="' + data.id + '"\n        data-value="' + data.value + '"\n        ' + ariaSelected + '\n        ' + ariaDisabled + '\n        >\n        ' + data.label + '\n      </div>\n    ');
  },
  choiceList: function choiceList(globalClasses, isSelectOneElement) {
    var ariaMultiSelectable = !isSelectOneElement ? 'aria-multiselectable="true"' : '';

    return (0, _utils.strToEl)('\n      <div\n        class="' + globalClasses.list + '"\n        dir="ltr"\n        role="listbox"\n        ' + ariaMultiSelectable + '\n        >\n      </div>\n    ');
  },
  choiceGroup: function choiceGroup(globalClasses, data) {
    var ariaDisabled = data.disabled ? 'aria-disabled="true"' : '';
    var localClasses = (0, _classnames2.default)(globalClasses.group, _defineProperty({}, globalClasses.itemDisabled, data.disabled));

    return (0, _utils.strToEl)('\n      <div\n        class="' + localClasses + '"\n        data-group\n        data-id="' + data.id + '"\n        data-value="' + data.value + '"\n        role="group"\n        ' + ariaDisabled + '\n        >\n        <div class="' + globalClasses.groupHeading + '">' + data.value + '</div>\n      </div>\n    ');
  },
  choice: function choice(globalClasses, data, itemSelectText) {
    var _classNames5;

    var role = data.groupId > 0 ? 'role="treeitem"' : 'role="option"';
    var localClasses = (0, _classnames2.default)(globalClasses.item, globalClasses.itemChoice, (_classNames5 = {}, _defineProperty(_classNames5, globalClasses.itemDisabled, data.disabled), _defineProperty(_classNames5, globalClasses.itemSelectable, !data.disabled), _defineProperty(_classNames5, globalClasses.placeholder, data.placeholder), _classNames5));

    return (0, _utils.strToEl)('\n      <div\n        class="' + localClasses + '"\n        data-select-text="' + itemSelectText + '"\n        data-choice\n        data-id="' + data.id + '"\n        data-value="' + data.value + '"\n        ' + (data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + '\n        id="' + data.elementId + '"\n        ' + role + '\n        >\n        ' + data.label + '\n      </div>\n    ');
  },
  input: function input(globalClasses) {
    var localClasses = (0, _classnames2.default)(globalClasses.input, globalClasses.inputCloned);

    return (0, _utils.strToEl)('\n      <input\n        type="text"\n        class="' + localClasses + '"\n        autocomplete="off"\n        autocapitalize="off"\n        spellcheck="false"\n        role="textbox"\n        aria-autocomplete="list"\n        >\n    ');
  },
  dropdown: function dropdown(globalClasses) {
    var localClasses = (0, _classnames2.default)(globalClasses.list, globalClasses.listDropdown);

    return (0, _utils.strToEl)('\n      <div\n        class="' + localClasses + '"\n        aria-expanded="false"\n        >\n      </div>\n    ');
  },
  notice: function notice(globalClasses, label) {
    var _classNames6;

    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    var localClasses = (0, _classnames2.default)(globalClasses.item, globalClasses.itemChoice, (_classNames6 = {}, _defineProperty(_classNames6, globalClasses.noResults, type === 'no-results'), _defineProperty(_classNames6, globalClasses.noChoices, type === 'no-choices'), _classNames6));

    return (0, _utils.strToEl)('\n      <div class="' + localClasses + '">\n        ' + label + '\n      </div>\n    ');
  },
  option: function option(data) {
    return (0, _utils.strToEl)('\n      <option value="' + data.value + '" ' + (data.selected ? 'selected' : '') + ' ' + (data.disabled ? 'disabled' : '') + '>' + data.label + '</option>\n    ');
  }
};

exports.default = TEMPLATES;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = undefined;

var _dropdown = __webpack_require__(73);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _container = __webpack_require__(74);

var _container2 = _interopRequireDefault(_container);

var _input = __webpack_require__(75);

var _input2 = _interopRequireDefault(_input);

var _list = __webpack_require__(76);

var _list2 = _interopRequireDefault(_list);

var _wrappedInput = __webpack_require__(77);

var _wrappedInput2 = _interopRequireDefault(_wrappedInput);

var _wrappedSelect = __webpack_require__(78);

var _wrappedSelect2 = _interopRequireDefault(_wrappedSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Dropdown = _dropdown2.default;
exports.Container = _container2.default;
exports.Input = _input2.default;
exports.List = _list2.default;
exports.WrappedInput = _wrappedInput2.default;
exports.WrappedSelect = _wrappedSelect2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = undefined;

var _constants = __webpack_require__(2);

var addChoice = exports.addChoice = function addChoice(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      groupId = _ref.groupId,
      disabled = _ref.disabled,
      elementId = _ref.elementId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: _constants.ACTION_TYPES.ADD_CHOICE,
    value: value,
    label: label,
    id: id,
    groupId: groupId,
    disabled: disabled,
    elementId: elementId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};

var filterChoices = exports.filterChoices = function filterChoices(results) {
  return {
    type: _constants.ACTION_TYPES.FILTER_CHOICES,
    results: results
  };
};

var activateChoices = exports.activateChoices = function activateChoices() {
  var active = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: _constants.ACTION_TYPES.ACTIVATE_CHOICES,
    active: active
  };
};

var clearChoices = exports.clearChoices = function clearChoices() {
  return {
    type: _constants.ACTION_TYPES.CLEAR_CHOICES
  };
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(38);

__webpack_require__(62);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highlightItem = exports.removeItem = exports.addItem = undefined;

var _constants = __webpack_require__(2);

var addItem = exports.addItem = function addItem(_ref) {
  var value = _ref.value,
      label = _ref.label,
      id = _ref.id,
      choiceId = _ref.choiceId,
      groupId = _ref.groupId,
      customProperties = _ref.customProperties,
      placeholder = _ref.placeholder,
      keyCode = _ref.keyCode;
  return {
    type: _constants.ACTION_TYPES.ADD_ITEM,
    value: value,
    label: label,
    id: id,
    choiceId: choiceId,
    groupId: groupId,
    customProperties: customProperties,
    placeholder: placeholder,
    keyCode: keyCode
  };
};

var removeItem = exports.removeItem = function removeItem(id, choiceId) {
  return {
    type: _constants.ACTION_TYPES.REMOVE_ITEM,
    id: id,
    choiceId: choiceId
  };
};

var highlightItem = exports.highlightItem = function highlightItem(id, highlighted) {
  return {
    type: _constants.ACTION_TYPES.HIGHLIGHT_ITEM,
    id: id,
    highlighted: highlighted
  };
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(55);
module.exports = __webpack_require__(4).Array.from;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(40)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(41)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(10);
var defined = __webpack_require__(11);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(18);
var redefine = __webpack_require__(21);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(15);
var $iterCreate = __webpack_require__(45);
var setToStringTag = __webpack_require__(28);
var getPrototypeOf = __webpack_require__(54);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(19)(function () {
  return Object.defineProperty(__webpack_require__(20)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(12);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(46);
var descriptor = __webpack_require__(13);
var setToStringTag = __webpack_require__(28);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(47);
var enumBugKeys = __webpack_require__(27);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(20)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(53).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(48);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(27);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(23);
var arrayIndexOf = __webpack_require__(51)(false);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(23);
var toLength = __webpack_require__(25);
var toAbsoluteIndex = __webpack_require__(52);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(10);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(29);
var IE_PROTO = __webpack_require__(16)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(22);
var $export = __webpack_require__(18);
var toObject = __webpack_require__(29);
var call = __webpack_require__(56);
var isArrayIter = __webpack_require__(57);
var toLength = __webpack_require__(25);
var createProperty = __webpack_require__(58);
var getIterFn = __webpack_require__(59);

$export($export.S + $export.F * !__webpack_require__(61)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(15);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6);
var createDesc = __webpack_require__(13);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(60);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(15);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill

try {
    var ce = new window.CustomEvent('test');
    ce.preventDefault();
    if (ce.defaultPrevented !== true) {
        // IE has problems with .preventDefault() on custom events
        // http://stackoverflow.com/questions/23349191
        throw new Error('Could not prevent default');
    }
} catch(e) {
  var CustomEvent = function(event, params) {
    var evt, origPrevent;
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: undefined
    };

    evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    origPrevent = evt.preventDefault;
    evt.preventDefault = function () {
      origPrevent.call(this);
      try {
        Object.defineProperty(this, 'defaultPrevented', {
          get: function () {
            return true;
          }
        });
      } catch(e) {
        this.defaultPrevented = true;
      }
    };
    return evt;
  };

  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent; // expose definition to window
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(30);

var _index = __webpack_require__(68);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function () {
  function Store() {
    _classCallCheck(this, Store);

    this._store = (0, _redux.createStore)(_index2.default, window.devToolsExtension ? window.devToolsExtension() : undefined);
  }

  /**
   * Subscribe store to function call (wrapped Redux method)
   * @param  {Function} onChange Function to trigger when state changes
   * @return
   */


  _createClass(Store, [{
    key: 'subscribe',
    value: function subscribe(onChange) {
      this._store.subscribe(onChange);
    }

    /**
     * Dispatch event to store (wrapped Redux method)
     * @param  {Function} action Action function to trigger
     * @return
     */

  }, {
    key: 'dispatch',
    value: function dispatch(action) {
      this._store.dispatch(action);
    }

    /**
     * Get store object (wrapping Redux method)
     * @return {Object} State
     */

  }, {
    key: 'getChoiceById',


    /**
     * Get single choice by it's ID
     * @return {Object} Found choice
     */
    value: function getChoiceById(id) {
      if (id) {
        var choices = this.activeChoices;
        var foundChoice = choices.find(function (choice) {
          return choice.id === parseInt(id, 10);
        });
        return foundChoice;
      }
      return false;
    }

    /**
     * Get group by group id
     * @param  {Number} id Group ID
     * @return {Object}    Group data
     */

  }, {
    key: 'getGroupById',
    value: function getGroupById(id) {
      return this.groups.find(function (group) {
        return group.id === parseInt(id, 10);
      });
    }
  }, {
    key: 'state',
    get: function get() {
      return this._store.getState();
    }

    /**
     * Get items from store
     * @return {Array} Item objects
     */

  }, {
    key: 'items',
    get: function get() {
      return this.state.items;
    }

    /**
     * Get active items from store
     * @return {Array} Item objects
     */

  }, {
    key: 'activeItems',
    get: function get() {
      return this.items.filter(function (item) {
        return item.active === true;
      });
    }

    /**
     * Get highlighted items from store
     * @return {Array} Item objects
     */

  }, {
    key: 'highlightedActiveItems',
    get: function get() {
      return this.items.filter(function (item) {
        return item.active && item.highlighted;
      });
    }

    /**
     * Get choices from store
     * @return {Array} Option objects
     */

  }, {
    key: 'choices',
    get: function get() {
      return this.state.choices;
    }

    /**
     * Get active choices from store
     * @return {Array} Option objects
     */

  }, {
    key: 'activeChoices',
    get: function get() {
      var choices = this.choices;
      var values = choices.filter(function (choice) {
        return choice.active === true;
      });

      return values;
    }

    /**
     * Get selectable choices from store
     * @return {Array} Option objects
     */

  }, {
    key: 'selectableChoices',
    get: function get() {
      return this.choices.filter(function (choice) {
        return choice.disabled !== true;
      });
    }

    /**
     * Get choices that can be searched (excluding placeholders)
     * @return {Array} Option objects
     */

  }, {
    key: 'searchableChoices',
    get: function get() {
      return this.selectableChoices.filter(function (choice) {
        return choice.placeholder !== true;
      });
    }

    /**
     * Get placeholder choice from store
     * @return {Object} Found placeholder
     */

  }, {
    key: 'placeholderChoice',
    get: function get() {
      return [].concat(_toConsumableArray(this.choices)).reverse().find(function (choice) {
        return choice.placeholder === true;
      });
    }

    /**
     * Get groups from store
     * @return {Array} Group objects
     */

  }, {
    key: 'groups',
    get: function get() {
      return this.state.groups;
    }

    /**
     * Get active groups from store
     * @return {Array} Group objects
     */

  }, {
    key: 'activeGroups',
    get: function get() {
      var groups = this.groups;
      var choices = this.choices;

      return groups.filter(function (group) {
        var isActive = group.active === true && group.disabled === false;
        var hasActiveOptions = choices.some(function (choice) {
          return choice.active === true && choice.disabled === false;
        });
        return isActive && hasActiveOptions;
      }, []);
    }
  }]);

  return Store;
}();

exports.default = Store;

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(31)))

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(67);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(31), __webpack_require__(66)(module)))

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(30);

var _items = __webpack_require__(69);

var _items2 = _interopRequireDefault(_items);

var _groups = __webpack_require__(70);

var _groups2 = _interopRequireDefault(_groups);

var _choices = __webpack_require__(71);

var _choices2 = _interopRequireDefault(_choices);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appReducer = (0, _redux.combineReducers)({
  items: _items2.default,
  groups: _groups2.default,
  choices: _choices2.default
});

var rootReducer = function rootReducer(passedState, action) {
  var state = passedState;
  // If we are clearing all items, groups and options we reassign
  // state and then pass that state to our proper reducer. This isn't
  // mutating our actual state
  // See: http://stackoverflow.com/a/35641992
  if (action.type === 'CLEAR_ALL') {
    state = undefined;
  } else if (action.type === 'RESET_TO') {
    return (0, _utils.cloneObject)(action.state);
  }

  return appReducer(state, action);
};

exports.default = rootReducer;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = items;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = exports.defaultState = [];

function items() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_ITEM':
      {
        // Add object to items array
        var newState = [].concat(_toConsumableArray(state), [{
          id: action.id,
          choiceId: action.choiceId,
          groupId: action.groupId,
          value: action.value,
          label: action.label,
          active: true,
          highlighted: false,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);

        return newState.map(function (obj) {
          var item = obj;
          item.highlighted = false;
          return item;
        });
      }

    case 'REMOVE_ITEM':
      {
        // Set item to inactive
        return state.map(function (obj) {
          var item = obj;
          if (item.id === action.id) {
            item.active = false;
          }
          return item;
        });
      }

    case 'HIGHLIGHT_ITEM':
      {
        return state.map(function (obj) {
          var item = obj;
          if (item.id === action.id) {
            item.highlighted = action.highlighted;
          }
          return item;
        });
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = groups;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = exports.defaultState = [];

function groups() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_GROUP':
      {
        return [].concat(_toConsumableArray(state), [{
          id: action.id,
          value: action.value,
          active: action.active,
          disabled: action.disabled
        }]);
      }

    case 'CLEAR_CHOICES':
      {
        return [];
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = choices;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var defaultState = exports.defaultState = [];

function choices() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_CHOICE':
      {
        /*
            A disabled choice appears in the choice dropdown but cannot be selected
            A selected choice has been added to the passed input's value (added as an item)
            An active choice appears within the choice dropdown
         */
        return [].concat(_toConsumableArray(state), [{
          id: action.id,
          elementId: action.elementId,
          groupId: action.groupId,
          value: action.value,
          label: action.label || action.value,
          disabled: action.disabled || false,
          selected: false,
          active: true,
          score: 9999,
          customProperties: action.customProperties,
          placeholder: action.placeholder || false,
          keyCode: null
        }]);
      }

    case 'ADD_ITEM':
      {
        // If all choices need to be activated
        if (action.activateOptions) {
          return state.map(function (obj) {
            var choice = obj;
            choice.active = action.active;
            return choice;
          });
        }

        // When an item is added and it has an associated choice,
        // we want to disable it so it can't be chosen again
        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;
            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = true;
            }
            return choice;
          });
        }

        return state;
      }

    case 'REMOVE_ITEM':
      {
        // When an item is removed and it has an associated choice,
        // we want to re-enable it so it can be chosen again
        if (action.choiceId > -1) {
          return state.map(function (obj) {
            var choice = obj;
            if (choice.id === parseInt(action.choiceId, 10)) {
              choice.selected = false;
            }
            return choice;
          });
        }

        return state;
      }

    case 'FILTER_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj;
          // Set active state based on whether choice is
          // within filtered results
          choice.active = action.results.some(function (_ref) {
            var item = _ref.item,
                score = _ref.score;

            if (item.id === choice.id) {
              choice.score = score;
              return true;
            }
            return false;
          });

          return choice;
        });
      }

    case 'ACTIVATE_CHOICES':
      {
        return state.map(function (obj) {
          var choice = obj;
          choice.active = action.active;
          return choice;
        });
      }

    case 'CLEAR_CHOICES':
      {
        return defaultState;
      }

    default:
      {
        return state;
      }
  }
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(36);

var _constants = __webpack_require__(2);

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ChoicesCore
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var ChoicesCore = function () {
  function ChoicesCore() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-choice]';
    var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ChoicesCore);

    var passedElement = (0, _utils.isType)('String', element) ? document.querySelector(element) : element;

    // If element has already been initialised with Choices, fail silently
    if (passedElement.getAttribute('data-choice') === 'active') {
      console.warn('Trying to initialise Choices on element already initialised');
    }

    this.initialised = false;
    this.config = ChoicesCore._generateConfig(userConfig);
  }

  _createClass(ChoicesCore, null, [{
    key: '_generateConfig',
    value: function _generateConfig(userConfig) {
      var defaultConfig = _extends({}, _constants.DEFAULT_CONFIG, {
        items: [],
        choices: [],
        classNames: _constants.DEFAULT_CLASSNAMES,
        sortFn: _utils.sortByAlpha
      });

      return (0, _utils.extend)(defaultConfig, ChoicesCore.userDefaults, userConfig);
    }
  }]);

  return ChoicesCore;
}();

exports.default = ChoicesCore;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dropdown = function () {
  function Dropdown(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames;

    _classCallCheck(this, Dropdown);

    Object.assign(this, { element: element, type: type, classNames: classNames });

    this.isActive = false;
  }

  /**
   * Determine how far the top of our element is from
   * the top of the window
   * @return {Number} Vertical position
   */


  _createClass(Dropdown, [{
    key: 'distanceFromTopWindow',
    value: function distanceFromTopWindow() {
      this.dimensions = this.element.getBoundingClientRect();
      this.position = Math.ceil(this.dimensions.top + window.pageYOffset + this.element.offsetHeight);
      return this.position;
    }

    /**
     * Find element that matches passed selector
     * @return {HTMLElement}
     */

  }, {
    key: 'getChild',
    value: function getChild(selector) {
      return this.element.querySelector(selector);
    }

    /**
     * Show dropdown to user by adding active state class
     * @return {Object} Class instance
     * @public
     */

  }, {
    key: 'show',
    value: function show() {
      this.element.classList.add(this.classNames.activeState);
      this.element.setAttribute('aria-expanded', 'true');
      this.isActive = true;
      return this;
    }

    /**
     * Hide dropdown from user
     * @return {Object} Class instance
     * @public
     */

  }, {
    key: 'hide',
    value: function hide() {
      this.element.classList.remove(this.classNames.activeState);
      this.element.setAttribute('aria-expanded', 'false');
      this.isActive = false;
      return this;
    }
  }]);

  return Dropdown;
}();

exports.default = Dropdown;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Container = function () {
  function Container(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        position = _ref.position;

    _classCallCheck(this, Container);

    Object.assign(this, { element: element, classNames: classNames, type: type, position: position });

    this.isOpen = false;
    this.isFlipped = false;
    this.isFocussed = false;
    this.isDisabled = false;
    this.isLoading = false;

    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  /**
   * Add event listeners
   */


  _createClass(Container, [{
    key: 'addEventListeners',
    value: function addEventListeners() {
      this.element.addEventListener('focus', this._onFocus);
      this.element.addEventListener('blur', this._onBlur);
    }

    /**
     * Remove event listeners
     */

    /** */

  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      this.element.removeEventListener('focus', this._onFocus);
      this.element.removeEventListener('blur', this._onBlur);
    }

    /**
     * Determine whether container should be flipped
     * based on passed dropdown position
     * @param {Number} dropdownPos
     * @returns
     */

  }, {
    key: 'shouldFlip',
    value: function shouldFlip(dropdownPos) {
      var windowHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utils.getWindowHeight)();

      if (dropdownPos === undefined) {
        return false;
      }

      // If flip is enabled and the dropdown bottom position is
      // greater than the window height flip the dropdown.
      var shouldFlip = false;
      if (this.position === 'auto') {
        shouldFlip = dropdownPos >= windowHeight;
      } else if (this.position === 'top') {
        shouldFlip = true;
      }

      return shouldFlip;
    }

    /**
     * Set active descendant attribute
     * @param {Number} activeDescendant ID of active descendant
     */

  }, {
    key: 'setActiveDescendant',
    value: function setActiveDescendant(activeDescendantID) {
      this.element.setAttribute('aria-activedescendant', activeDescendantID);
    }

    /**
     * Remove active descendant attribute
     */

  }, {
    key: 'removeActiveDescendant',
    value: function removeActiveDescendant() {
      this.element.removeAttribute('aria-activedescendant');
    }
  }, {
    key: 'open',
    value: function open(dropdownPos) {
      this.element.classList.add(this.classNames.openState);
      this.element.setAttribute('aria-expanded', 'true');
      this.isOpen = true;

      if (this.shouldFlip(dropdownPos)) {
        this.element.classList.add(this.classNames.flippedState);
        this.isFlipped = true;
      }
    }
  }, {
    key: 'close',
    value: function close() {
      this.element.classList.remove(this.classNames.openState);
      this.element.setAttribute('aria-expanded', 'false');
      this.removeActiveDescendant();
      this.isOpen = false;

      // A dropdown flips if it does not have space within the page
      if (this.isFlipped) {
        this.element.classList.remove(this.classNames.flippedState);
        this.isFlipped = false;
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (!this.isFocussed) {
        this.element.focus();
      }
    }
  }, {
    key: 'addFocusState',
    value: function addFocusState() {
      this.element.classList.add(this.classNames.focusState);
    }
  }, {
    key: 'removeFocusState',
    value: function removeFocusState() {
      this.element.classList.remove(this.classNames.focusState);
    }

    /**
     * Remove disabled state
     */

  }, {
    key: 'enable',
    value: function enable() {
      this.element.classList.remove(this.classNames.disabledState);
      this.element.removeAttribute('aria-disabled');
      if (this.type === 'select-one') {
        this.element.setAttribute('tabindex', '0');
      }
      this.isDisabled = false;
    }

    /**
     * Set disabled state
     */

  }, {
    key: 'disable',
    value: function disable() {
      this.element.classList.add(this.classNames.disabledState);
      this.element.setAttribute('aria-disabled', 'true');
      if (this.type === 'select-one') {
        this.element.setAttribute('tabindex', '-1');
      }
      this.isDisabled = true;
    }
  }, {
    key: 'wrap',
    value: function wrap(element) {
      (0, _utils.wrap)(element, this.element);
    }
  }, {
    key: 'unwrap',
    value: function unwrap(element) {
      // Move passed element outside this element
      this.element.parentNode.insertBefore(element, this.element);
      // Remove this element
      this.element.parentNode.removeChild(this.element);
    }

    /**
     * Add loading state to element
     */

  }, {
    key: 'addLoadingState',
    value: function addLoadingState() {
      this.element.classList.add(this.classNames.loadingState);
      this.element.setAttribute('aria-busy', 'true');
      this.isLoading = true;
    }

    /**
     * Remove loading state from element
     */

  }, {
    key: 'removeLoadingState',
    value: function removeLoadingState() {
      this.element.classList.remove(this.classNames.loadingState);
      this.element.removeAttribute('aria-busy');
      this.isLoading = false;
    }

    /**
     * Set focussed state
     */

  }, {
    key: '_onFocus',
    value: function _onFocus() {
      this.isFocussed = true;
    }

    /**
     * Remove blurred state
     */

  }, {
    key: '_onBlur',
    value: function _onBlur() {
      this.isFocussed = false;
    }
  }]);

  return Container;
}();

exports.default = Container;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
  function Input(_ref) {
    var element = _ref.element,
        type = _ref.type,
        classNames = _ref.classNames,
        placeholderValue = _ref.placeholderValue;

    _classCallCheck(this, Input);

    Object.assign(this, { element: element, type: type, classNames: classNames, placeholderValue: placeholderValue });

    this.element = element;
    this.classNames = classNames;
    this.isFocussed = this.element === document.activeElement;
    this.isDisabled = false;

    // Bind event listeners
    this._onPaste = this._onPaste.bind(this);
    this._onInput = this._onInput.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
  }

  _createClass(Input, [{
    key: 'addEventListeners',
    value: function addEventListeners() {
      this.element.addEventListener('input', this._onInput);
      this.element.addEventListener('paste', this._onPaste);
      this.element.addEventListener('focus', this._onFocus);
      this.element.addEventListener('blur', this._onBlur);

      if (this.element.form) {
        this.element.form.addEventListener('reset', this._onFormReset);
      }
    }
  }, {
    key: 'removeEventListeners',
    value: function removeEventListeners() {
      this.element.removeEventListener('input', this._onInput);
      this.element.removeEventListener('paste', this._onPaste);
      this.element.removeEventListener('focus', this._onFocus);
      this.element.removeEventListener('blur', this._onBlur);

      if (this.element.form) {
        this.element.form.removeEventListener('reset', this._onFormReset);
      }
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.element.removeAttribute('disabled');
      this.isDisabled = false;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.element.setAttribute('disabled', '');
      this.isDisabled = true;
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (!this.isFocussed) {
        this.element.focus();
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.isFocussed) {
        this.element.blur();
      }
    }

    /**
     * Set value of input to blank
     * @return {Object} Class instance
     * @public
     */

  }, {
    key: 'clear',
    value: function clear() {
      this.element.value = '';

      return this;
    }

    /**
     * Set the correct input width based on placeholder
     * value or input value
     * @return
     */

  }, {
    key: 'setWidth',
    value: function setWidth(enforceWidth) {
      var _this = this;

      var callback = function callback(width) {
        _this.element.style.width = width;
      };

      if (this._placeholderValue) {
        // If there is a placeholder, we only want to set the width of the input when it is a greater
        // length than 75% of the placeholder. This stops the input jumping around.
        var valueHasDesiredLength = this.element.value.length >= this._placeholderValue.length / 1.25;

        if (this.element.value && valueHasDesiredLength || enforceWidth) {
          this.calcWidth(callback);
        }
      } else {
        // If there is no placeholder, resize input to contents
        this.calcWidth(callback);
      }
    }
  }, {
    key: 'calcWidth',
    value: function calcWidth(callback) {
      return (0, _utils.calcWidthOfInput)(this.element, callback);
    }
  }, {
    key: 'setActiveDescendant',
    value: function setActiveDescendant(activeDescendantID) {
      this.element.setAttribute('aria-activedescendant', activeDescendantID);
    }
  }, {
    key: 'removeActiveDescendant',
    value: function removeActiveDescendant() {
      this.element.removeAttribute('aria-activedescendant');
    }
  }, {
    key: '_onInput',
    value: function _onInput() {
      if (this.type !== 'select-one') {
        this.setWidth();
      }
    }
  }, {
    key: '_onPaste',
    value: function _onPaste(event) {
      var target = event.target;
      // Disable pasting into the input if option has been set

      if (target === this.element && this.preventPaste) {
        event.preventDefault();
      }
    }
  }, {
    key: '_onFocus',
    value: function _onFocus() {
      this.isFocussed = true;
    }
  }, {
    key: '_onBlur',
    value: function _onBlur() {
      this.isFocussed = false;
    }
  }, {
    key: 'placeholder',
    set: function set(placeholder) {
      this.element.placeholder = placeholder;
    }
  }, {
    key: 'value',
    set: function set(value) {
      this.element.value = '' + value;
    },
    get: function get() {
      return (0, _utils.stripHTML)(this.element.value);
    }
  }]);

  return Input;
}();

exports.default = Input;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var List = function () {
  function List(_ref) {
    var element = _ref.element;

    _classCallCheck(this, List);

    Object.assign(this, { element: element });

    this.scrollPos = this.element.scrollTop;
    this.height = this.element.offsetHeight;
    this.hasChildren = !!this.element.children;
  }

  _createClass(List, [{
    key: 'clear',
    value: function clear() {
      this.element.innerHTML = '';
    }
  }, {
    key: 'append',
    value: function append(node) {
      this.element.appendChild(node);
    }
  }, {
    key: 'getChild',
    value: function getChild(selector) {
      return this.element.querySelector(selector);
    }
  }, {
    key: 'scrollToTop',
    value: function scrollToTop() {
      this.element.scrollTop = 0;
    }
  }, {
    key: 'scrollToChoice',
    value: function scrollToChoice(choice, direction) {
      var _this = this;

      if (!choice) {
        return;
      }

      var dropdownHeight = this.element.offsetHeight;
      var choiceHeight = choice.offsetHeight;
      // Distance from bottom of element to top of parent
      var choicePos = choice.offsetTop + choiceHeight;
      // Scroll position of dropdown
      var containerScrollPos = this.element.scrollTop + dropdownHeight;
      // Difference between the choice and scroll position
      var endpoint = direction > 0 ? this.element.scrollTop + choicePos - containerScrollPos : choice.offsetTop;

      requestAnimationFrame(function (time) {
        _this._animateScroll(time, endpoint, direction);
      });
    }
  }, {
    key: '_scrollDown',
    value: function _scrollDown(scrollPos, strength, endpoint) {
      var easing = (endpoint - scrollPos) / strength;
      var distance = easing > 1 ? easing : 1;

      this.element.scrollTop = scrollPos + distance;
    }
  }, {
    key: '_scrollUp',
    value: function _scrollUp(scrollPos, strength, endpoint) {
      var easing = (scrollPos - endpoint) / strength;
      var distance = easing > 1 ? easing : 1;

      this.element.scrollTop = scrollPos - distance;
    }
  }, {
    key: '_animateScroll',
    value: function _animateScroll(time, endpoint, direction) {
      var _this2 = this;

      var strength = _constants.SCROLLING_SPEED;
      var choiceListScrollTop = this.element.scrollTop;
      var continueAnimation = false;

      if (direction > 0) {
        this._scrollDown(choiceListScrollTop, strength, endpoint);

        if (choiceListScrollTop < endpoint) {
          continueAnimation = true;
        }
      } else {
        this._scrollUp(choiceListScrollTop, strength, endpoint);

        if (choiceListScrollTop > endpoint) {
          continueAnimation = true;
        }
      }

      if (continueAnimation) {
        requestAnimationFrame(function () {
          _this2._animateScroll(time, endpoint, direction);
        });
      }
    }
  }]);

  return List;
}();

exports.default = List;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _wrappedElement = __webpack_require__(32);

var _wrappedElement2 = _interopRequireDefault(_wrappedElement);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrappedInput = function (_WrappedElement) {
  _inherits(WrappedInput, _WrappedElement);

  function WrappedInput(_ref) {
    var element = _ref.element,
        classNames = _ref.classNames,
        delimiter = _ref.delimiter;

    _classCallCheck(this, WrappedInput);

    var _this = _possibleConstructorReturn(this, (WrappedInput.__proto__ || Object.getPrototypeOf(WrappedInput)).call(this, { element: element, classNames: classNames }));

    _this.delimiter = delimiter;
    return _this;
  }

  _createClass(WrappedInput, [{
    key: 'value',
    set: function set(items) {
      var itemsFiltered = (0, _utils.reduceToValues)(items);
      var itemsFilteredString = itemsFiltered.join(this.delimiter);

      this.element.setAttribute('value', itemsFilteredString);
      this.element.value = itemsFilteredString;
    }

    // @todo figure out why we need this? Perhaps a babel issue
    ,
    get: function get() {
      return _get(WrappedInput.prototype.__proto__ || Object.getPrototypeOf(WrappedInput.prototype), 'value', this);
    }
  }]);

  return WrappedInput;
}(_wrappedElement2.default);

exports.default = WrappedInput;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wrappedElement = __webpack_require__(32);

var _wrappedElement2 = _interopRequireDefault(_wrappedElement);

var _templates = __webpack_require__(33);

var _templates2 = _interopRequireDefault(_templates);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WrappedSelect = function (_WrappedElement) {
  _inherits(WrappedSelect, _WrappedElement);

  function WrappedSelect(_ref) {
    var element = _ref.element,
        classNames = _ref.classNames;

    _classCallCheck(this, WrappedSelect);

    return _possibleConstructorReturn(this, (WrappedSelect.__proto__ || Object.getPrototypeOf(WrappedSelect)).call(this, { element: element, classNames: classNames }));
  }

  _createClass(WrappedSelect, [{
    key: 'appendDocFragment',
    value: function appendDocFragment(fragment) {
      this.element.innerHTML = '';
      this.element.appendChild(fragment);
    }
  }, {
    key: 'placeholderOption',
    get: function get() {
      return this.element.querySelector('option[placeholder]');
    }
  }, {
    key: 'optionGroups',
    get: function get() {
      return Array.from(this.element.getElementsByTagName('OPTGROUP'));
    }
  }, {
    key: 'options',
    get: function get() {
      return Array.from(this.element.options);
    },
    set: function set(options) {
      var fragment = document.createDocumentFragment();
      var addOptionToFragment = function addOptionToFragment(data) {
        // Create a standard select option
        var template = _templates2.default.option(data);
        // Append it to fragment
        fragment.appendChild(template);
      };

      // Add each list item to list
      options.forEach(function (optionData) {
        return addOptionToFragment(optionData);
      });

      this.appendDocFragment(fragment);
    }
  }]);

  return WrappedSelect;
}(_wrappedElement2.default);

exports.default = WrappedSelect;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroup = undefined;

var _constants = __webpack_require__(2);

/* eslint-disable import/prefer-default-export */
var addGroup = exports.addGroup = function addGroup(value, id, active, disabled) {
  return {
    type: _constants.ACTION_TYPES.ADD_GROUP,
    value: value,
    id: id,
    active: active,
    disabled: disabled
  };
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var clearAll = exports.clearAll = function clearAll() {
  return {
    type: 'CLEAR_ALL'
  };
};

var resetTo = exports.resetTo = function resetTo(state) {
  return {
    type: 'RESET_TO',
    state: state
  };
};

/***/ }),
/* 82 */,
/* 83 */,
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(36);

var _store = __webpack_require__(63);

var _store2 = _interopRequireDefault(_store);

var _choicesCore = __webpack_require__(72);

var _choicesCore2 = _interopRequireDefault(_choicesCore);

var _components = __webpack_require__(34);

var _constants = __webpack_require__(2);

var _templates = __webpack_require__(33);

var _choices = __webpack_require__(35);

var _items = __webpack_require__(37);

var _groups = __webpack_require__(80);

var _misc = __webpack_require__(81);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ChoicesInput
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var ChoicesInput = function (_ChoicesCore) {
  _inherits(ChoicesInput, _ChoicesCore);

  function ChoicesInput(element, config) {
    _classCallCheck(this, ChoicesInput);

    var _this = _possibleConstructorReturn(this, (ChoicesInput.__proto__ || Object.getPrototypeOf(ChoicesInput)).call(this, element, config));

    _this._onEnterKey = function (_ref) {
      var target = _ref.target;

      var hasActiveDropdown = _this.dropdown.isActive;
      var activeItems = _this._store.activeItems;
      // If enter key is pressed and the input has a value
      if (target.value) {
        var value = _this.input.value;
        var canAddItem = _this._canAddItem(activeItems, value);

        // All is good, add
        if (canAddItem.response) {
          _this.hideDropdown(true);
          _this._addItem({
            value: value
          });
          _this._triggerChange(value);
          _this.clearInput();
        }
      }

      if (target.hasAttribute('data-button')) {
        _this._handleButtonAction(activeItems, target);
        event.preventDefault();
      }

      if (hasActiveDropdown) {
        event.preventDefault();
        var highlighted = _this.dropdown.getChild('.' + _this.config.classNames.highlightedState);

        // If we have a highlighted choice
        if (highlighted) {
          // add enter keyCode value
          if (activeItems[0]) {
            activeItems[0].keyCode = _constants.KEY_CODES.ENTER_KEY;
          }
          _this._handleChoiceAction(activeItems, highlighted);
        }
      }
    };

    if ((0, _utils.isType)('String', element)) {
      var elements = Array.from(document.querySelectorAll(element));

      // If there are multiple elements, create a new instance
      // for each element besides the first one (as that already has an instance)
      if (elements.length > 1) {
        var _ret;

        return _ret = _this._generateInstances(elements, config), _possibleConstructorReturn(_this, _ret);
      }
    }

    if (!['auto', 'always'].includes(_this.config.renderSelectedChoices)) {
      _this.config.renderSelectedChoices = 'auto';
    }

    _this._isSelectElement = _this._isSelectOneElement || _this._isSelectMultipleElement;

    _this.passedElement = new _components.WrappedInput({
      element: element,
      classNames: _this.config.classNames,
      delimiter: _this.config.delimiter
    });

    _this._store = new _store2.default(_this.render);
    _this._initialState = {};
    _this._currentState = {};
    _this._prevState = {};
    _this._currentValue = '';
    _this._isScrollingOnIe = false;
    _this._highlightPosition = 0;
    _this._wasTap = true;
    _this._placeholderValue = _this._generatePlaceholderValue();
    _this._baseId = (0, _utils.generateId)(_this.passedElement.element, 'choices-');
    _this._direction = _this.passedElement.element.getAttribute('dir') || 'ltr';
    _this._idNames = {
      itemChoice: 'item-choice'
    };
    // Assign preset items from passed object first
    _this._presetItems = _this.config.items;
    // Then add any values passed from attribute
    if (_this.passedElement.value) {
      _this._presetItems = _this._presetItems.concat(_this.passedElement.value.split(_this.config.delimiter));
    }
    _this.render = _this.render.bind(_this);
    _this._onFocus = _this._onFocus.bind(_this);
    _this._onBlur = _this._onBlur.bind(_this);
    _this._onKeyUp = _this._onKeyUp.bind(_this);
    _this._onKeyDown = _this._onKeyDown.bind(_this);
    _this._onClick = _this._onClick.bind(_this);
    _this._onTouchMove = _this._onTouchMove.bind(_this);
    _this._onTouchEnd = _this._onTouchEnd.bind(_this);
    _this._onMouseDown = _this._onMouseDown.bind(_this);
    _this._onMouseOver = _this._onMouseOver.bind(_this);
    _this._onFormReset = _this._onFormReset.bind(_this);

    // Let's go
    _this.init();
    return _this;
  }

  _createClass(ChoicesInput, [{
    key: '_generateInstances',
    value: function _generateInstances(elements, config) {
      return elements.reduce(function (instances, element) {
        instances.push(new ChoicesInput(element, config));
        return instances;
      }, [this]);
    }
  }, {
    key: 'init',
    value: function init() {
      if (this.initialised) {
        return;
      }

      this._createTemplates();
      this._createElements();
      this._createStructure();
      // Set initial state (We need to clone the state because some reducers
      // modify the inner objects properties in the state) 🤢
      this._initialState = (0, _utils.cloneObject)(this._store.state);
      this._store.subscribe(this.render);
      this.render();
      this._addEventListeners();
      this.initialised = true;

      var callbackOnInit = this.config.callbackOnInit;
      // Run callback if it is a function

      if (callbackOnInit && (0, _utils.isType)('Function', callbackOnInit)) {
        callbackOnInit.call(this);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      if (!this.initialised) {
        return;
      }

      this._removeEventListeners();
      this.passedElement.reveal();
      this.containerOuter.unwrap(this.passedElement.element);

      this.clearStore();

      this.config.templates = null;
      this.initialised = false;
    }
  }, {
    key: 'enable',
    value: function enable() {
      if (!this.initialised) {
        return this;
      }

      this.passedElement.enable();

      if (this.containerOuter.isDisabled) {
        this._addEventListeners();
        this.input.enable();
        this.containerOuter.enable();
      }

      return this;
    }
  }, {
    key: 'disable',
    value: function disable() {
      if (!this.initialised) {
        return this;
      }

      this.passedElement.disable();

      if (!this.containerOuter.isDisabled) {
        this._removeEventListeners();
        this.input.disable();
        this.containerOuter.disable();
      }

      return this;
    }
  }, {
    key: 'render',
    value: function render() {
      this._currentState = this._store.state;

      var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
      var shouldRenderItems = this._currentState.items !== this._prevState.items;

      if (!stateChanged) {
        return;
      }

      if (shouldRenderItems) {
        this._renderItems();
      }

      this._prevState = this._currentState;
    }
  }, {
    key: 'highlightItem',
    value: function highlightItem(item) {
      var triggerEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!item) {
        return this;
      }

      var id = item.id,
          _item$groupId = item.groupId,
          groupId = _item$groupId === undefined ? -1 : _item$groupId,
          _item$value = item.value,
          value = _item$value === undefined ? '' : _item$value,
          _item$label = item.label,
          label = _item$label === undefined ? '' : _item$label;

      var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

      this._store.dispatch((0, _items.highlightItem)(id, true));

      if (triggerEvent) {
        this.passedElement.triggerEvent(_constants.EVENTS.highlightItem, {
          id: id,
          value: value,
          label: label,
          groupValue: group && group.value ? group.value : null
        });
      }

      return this;
    }
  }, {
    key: 'unhighlightItem',
    value: function unhighlightItem(item) {
      if (!item) {
        return this;
      }

      var id = item.id,
          _item$groupId2 = item.groupId,
          groupId = _item$groupId2 === undefined ? -1 : _item$groupId2,
          _item$value2 = item.value,
          value = _item$value2 === undefined ? '' : _item$value2,
          _item$label2 = item.label,
          label = _item$label2 === undefined ? '' : _item$label2;

      var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

      this._store.dispatch((0, _items.highlightItem)(id, false));
      this.passedElement.triggerEvent(_constants.EVENTS.highlightItem, {
        id: id,
        value: value,
        label: label,
        groupValue: group && group.value ? group.value : null
      });

      return this;
    }
  }, {
    key: 'highlightAll',
    value: function highlightAll() {
      var _this2 = this;

      this._store.items.forEach(function (item) {
        return _this2.highlightItem(item);
      });
      return this;
    }
  }, {
    key: 'unhighlightAll',
    value: function unhighlightAll() {
      var _this3 = this;

      this._store.items.forEach(function (item) {
        return _this3.unhighlightItem(item);
      });
      return this;
    }
  }, {
    key: 'removeActiveItemsByValue',
    value: function removeActiveItemsByValue(value) {
      var _this4 = this;

      this._store.activeItems.filter(function (item) {
        return item.value === value;
      }).forEach(function (item) {
        return _this4._removeItem(item);
      });

      return this;
    }
  }, {
    key: 'removeActiveItems',
    value: function removeActiveItems(excludedId) {
      var _this5 = this;

      this._store.activeItems.filter(function (_ref2) {
        var id = _ref2.id;
        return id !== excludedId;
      }).forEach(function (item) {
        return _this5._removeItem(item);
      });

      return this;
    }
  }, {
    key: 'removeHighlightedItems',
    value: function removeHighlightedItems() {
      var _this6 = this;

      var triggerEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._store.highlightedActiveItems.forEach(function (item) {
        _this6._removeItem(item);
        // If this action was performed by the user
        // trigger the event
        if (triggerEvent) {
          _this6._triggerChange(item.value);
        }
      });

      return this;
    }
  }, {
    key: 'showDropdown',
    value: function showDropdown(preventInputFocus) {
      var _this7 = this;

      if (this.dropdown.isActive) {
        return this;
      }

      requestAnimationFrame(function () {
        _this7.dropdown.show();
        _this7.containerOuter.open(_this7.dropdown.distanceFromTopWindow());

        if (!preventInputFocus) {
          _this7.input.focus();
        }

        _this7.passedElement.triggerEvent(_constants.EVENTS.showDropdown, {});
      });

      return this;
    }
  }, {
    key: 'hideDropdown',
    value: function hideDropdown(preventInputBlur) {
      var _this8 = this;

      if (!this.dropdown.isActive) {
        return this;
      }

      requestAnimationFrame(function () {
        _this8.dropdown.hide();
        _this8.containerOuter.close();

        if (!preventInputBlur) {
          _this8.input.removeActiveDescendant();
          _this8.input.blur();
        }

        _this8.passedElement.triggerEvent(_constants.EVENTS.hideDropdown, {});
      });

      return this;
    }
  }, {
    key: 'toggleDropdown',
    value: function toggleDropdown() {
      if (this.dropdown.isActive) {
        this.hideDropdown();
      } else {
        this.showDropdown();
      }

      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      var valueOnly = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var values = this._store.activeItems.reduce(function (selectedItems, item) {
        var itemValue = valueOnly ? item.value : item;
        selectedItems.push(itemValue);
        return selectedItems;
      }, []);

      return values;
    }
  }, {
    key: 'setValue',
    value: function setValue(args) {
      var _this9 = this;

      if (!this.initialised) {
        return this;
      }

      [].concat(_toConsumableArray(args)).forEach(function (value) {
        return _this9._setChoiceOrItem(value);
      });
      return this;
    }
  }, {
    key: 'clearInput',
    value: function clearInput() {
      this.input.clear();
      this.input.setWidth();
      return this;
    }
  }, {
    key: '_createItemsFragment',
    value: function _createItemsFragment(items) {
      var _this10 = this;

      var fragment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Create fragment to add elements to
      var _config = this.config,
          shouldSortItems = _config.shouldSortItems,
          sortFn = _config.sortFn,
          removeItemButton = _config.removeItemButton;

      var itemListFragment = fragment || document.createDocumentFragment();

      // If sorting is enabled, filter items
      if (shouldSortItems) {
        items.sort(sortFn);
      }

      // Update the value of the hidden input
      this.passedElement.value = items;

      var addItemToFragment = function addItemToFragment(item) {
        // Create new list element
        var listItem = _this10._getTemplate('item', item, removeItemButton);
        // Append it to list
        itemListFragment.appendChild(listItem);
      };

      // Add each list item to list
      items.forEach(function (item) {
        return addItemToFragment(item);
      });

      return itemListFragment;
    }
  }, {
    key: '_triggerChange',
    value: function _triggerChange(value) {
      if (value === undefined || value === null) {
        return;
      }

      this.passedElement.triggerEvent(_constants.EVENTS.change, {
        value: value
      });
    }
  }, {
    key: '_handleButtonAction',
    value: function _handleButtonAction(activeItems, element) {
      if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) {
        return;
      }

      var itemId = element.parentNode.getAttribute('data-id');
      var itemToRemove = activeItems.find(function (item) {
        return item.id === parseInt(itemId, 10);
      });

      // Remove item associated with button
      this._removeItem(itemToRemove);
      this._triggerChange(itemToRemove.value);
    }
  }, {
    key: '_handleItemAction',
    value: function _handleItemAction(activeItems, element) {
      var _this11 = this;

      var hasShiftKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!activeItems || !element || !this.config.removeItems) {
        return;
      }

      var passedId = element.getAttribute('data-id');

      // We only want to select one item with a click
      // so we deselect any items that aren't the target
      // unless shift is being pressed
      activeItems.forEach(function (item) {
        if (item.id === parseInt(passedId, 10) && !item.highlighted) {
          _this11.highlightItem(item);
        } else if (!hasShiftKey && item.highlighted) {
          _this11.unhighlightItem(item);
        }
      });

      // Focus input as without focus, a user cannot do anything with a
      // highlighted item
      this.input.focus();
    }
  }, {
    key: '_handleChoiceAction',
    value: function _handleChoiceAction(activeItems, element) {
      if (!activeItems || !element) {
        return;
      }

      // If we are clicking on an option
      var id = element.getAttribute('data-id');
      var choice = this._store.getChoiceById(id);
      var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : null;

      // Update choice keyCode
      choice.keyCode = passedKeyCode;

      this.passedElement.triggerEvent(_constants.EVENTS.choice, {
        choice: choice
      });

      if (choice && !choice.selected && !choice.disabled) {
        var canAddItem = this._canAddItem(activeItems, choice.value);

        if (canAddItem.response) {
          this._addItem({
            value: choice.value,
            label: choice.label,
            choiceId: choice.id,
            groupId: choice.groupId,
            customProperties: choice.customProperties,
            placeholder: choice.placeholder,
            keyCode: choice.keyCode
          });

          this._triggerChange(choice.value);
        }
      }

      this.clearInput();
    }
  }, {
    key: '_handleBackspace',
    value: function _handleBackspace(activeItems) {
      if (!this.config.removeItems || !activeItems) {
        return;
      }

      var lastItem = activeItems[activeItems.length - 1];
      var hasHighlightedItems = activeItems.some(function (item) {
        return item.highlighted;
      });

      // If editing the last item is allowed and there are not other selected items,
      // we can edit the item value. Otherwise if we can remove items, remove all selected items
      if (this.config.editItems && !hasHighlightedItems && lastItem) {
        this.input.value = lastItem.value;
        this.input.setWidth();
        this._removeItem(lastItem);
        this._triggerChange(lastItem.value);
      } else {
        if (!hasHighlightedItems) {
          // Highlight last item if none already highlighted
          this.highlightItem(lastItem, false);
        }
        this.removeHighlightedItems(true);
      }
    }
  }, {
    key: '_handleLoadingState',
    value: function _handleLoadingState() {
      var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (isLoading) {
        this.containerOuter.addLoadingState();
        this.input.placeholder = this.config.loadingText;
      } else {
        this.containerOuter.removeLoadingState();
        this.input.placeholder = this._placeholderValue || '';
      }
    }
  }, {
    key: '_canAddItem',
    value: function _canAddItem(activeItems, value) {
      var canAddItem = true;
      var notice = (0, _utils.isType)('Function', this.config.addItemText) ? this.config.addItemText(value) : this.config.addItemText;

      var isDuplicateValue = (0, _utils.existsInArray)(activeItems, value);

      if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
        // If there is a max entry limit and we have reached that limit
        // don't update
        canAddItem = false;
        notice = (0, _utils.isType)('Function', this.config.maxItemText) ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
      }

      if (this.config.regexFilter && this.config.addItems && canAddItem) {
        // If a user has supplied a regular expression filter
        // determine whether we can update based on whether
        // our regular expression passes
        canAddItem = (0, _utils.regexFilter)(value, this.config.regexFilter);
      }

      if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
        canAddItem = false;
        notice = (0, _utils.isType)('Function', this.config.uniqueItemText) ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
      }

      return {
        response: canAddItem,
        notice: notice
      };
    }
  }, {
    key: '_addEventListeners',
    value: function _addEventListeners() {
      document.addEventListener('keyup', this._onKeyUp);
      document.addEventListener('keydown', this._onKeyDown);
      document.addEventListener('click', this._onClick);
      document.addEventListener('touchmove', this._onTouchMove);
      document.addEventListener('touchend', this._onTouchEnd);
      document.addEventListener('mousedown', this._onMouseDown);
      document.addEventListener('mouseover', this._onMouseOver);

      this.input.element.addEventListener('focus', this._onFocus);
      this.input.element.addEventListener('blur', this._onBlur);

      if (this.input.element.form) {
        this.input.element.form.addEventListener('reset', this._onFormReset);
      }

      this.input.addEventListeners();
    }
  }, {
    key: '_removeEventListeners',
    value: function _removeEventListeners() {
      document.removeEventListener('keyup', this._onKeyUp);
      document.removeEventListener('keydown', this._onKeyDown);
      document.removeEventListener('click', this._onClick);
      document.removeEventListener('touchmove', this._onTouchMove);
      document.removeEventListener('touchend', this._onTouchEnd);
      document.removeEventListener('mousedown', this._onMouseDown);
      document.removeEventListener('mouseover', this._onMouseOver);

      this.input.element.removeEventListener('focus', this._onFocus);
      this.input.element.removeEventListener('blur', this._onBlur);

      if (this.input.element.form) {
        this.input.element.form.removeEventListener('reset', this._onFormReset);
      }

      this.input.removeEventListeners();
    }
  }, {
    key: '_onDirectionKey',
    value: function _onDirectionKey(_ref3) {
      var keyCode = _ref3.keyCode,
          metaKey = _ref3.metaKey;

      var hasActiveDropdown = this.dropdown.isActive;
      var downKey = _constants.KEY_CODES.DOWN_KEY;
      var pageUpKey = _constants.KEY_CODES.PAGE_UP_KEY;
      var pageDownKey = _constants.KEY_CODES.PAGE_DOWN_KEY;

      // If up or down key is pressed, traverse through options
      if (hasActiveDropdown) {
        this.showDropdown();

        var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
        var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
        var selectableChoiceIdentifier = '[data-choice-selectable]';

        var nextEl = void 0;
        if (skipKey) {
          if (directionInt > 0) {
            nextEl = Array.from(this.dropdown.element.querySelectorAll(selectableChoiceIdentifier)).pop();
          } else {
            nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
          }
        } else {
          var currentEl = this.dropdown.element.querySelector('.' + this.config.classNames.highlightedState);
          if (currentEl) {
            nextEl = (0, _utils.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
          } else {
            nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
          }
        }

        if (nextEl) {
          // We prevent default to stop the cursor moving
          // when pressing the arrow
          if (!(0, _utils.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) {
            this.choiceList.scrollToChoice(nextEl, directionInt);
          }
          this._highlightChoice(nextEl);
        }

        // Prevent default to maintain cursor position whilst
        // traversing dropdown options
        event.preventDefault();
      }
    }
  }, {
    key: '_onDeleteKey',
    value: function _onDeleteKey(_ref4) {
      var target = _ref4.target;

      var hasFocusedInput = this.input.isFocussed;
      var activeItems = this._store.activeItems;
      // If backspace or delete key is pressed and the input has no value
      if (hasFocusedInput && !target.value) {
        this._handleBackspace(activeItems);
        event.preventDefault();
      }
    }
  }, {
    key: '_onEscapeKey',
    value: function _onEscapeKey() {
      this.hideDropdown(true);
      this.containerOuter.focus();
    }
  }, {
    key: '_onAKey',
    value: function _onAKey(_ref5) {
      var ctrlKey = _ref5.ctrlKey,
          metaKey = _ref5.metaKey;

      var hasItems = this.itemList.hasChildren;
      var ctrlDownKey = ctrlKey || metaKey;
      // If CTRL + A or CMD + A have been pressed and there are items to select
      if (ctrlDownKey && hasItems) {
        if (this.config.removeItems && !this.input.value && this.input.element === document.activeElement) {
          // Highlight items
          this.highlightAll();
        }
      }
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      var _keyDownActions;

      var target = event.target,
          keyCode = event.keyCode,
          ctrlKey = event.ctrlKey,
          metaKey = event.metaKey;


      if (target !== this.input.element && !this.containerOuter.element.contains(target)) {
        return;
      }

      var backKey = _constants.KEY_CODES.BACK_KEY,
          deleteKey = _constants.KEY_CODES.DELETE_KEY,
          enterKey = _constants.KEY_CODES.ENTER_KEY,
          aKey = _constants.KEY_CODES.A_KEY,
          escapeKey = _constants.KEY_CODES.ESC_KEY,
          upKey = _constants.KEY_CODES.UP_KEY,
          downKey = _constants.KEY_CODES.DOWN_KEY,
          pageUpKey = _constants.KEY_CODES.PAGE_UP_KEY,
          pageDownKey = _constants.KEY_CODES.PAGE_DOWN_KEY;

      // Map keys to key actions

      var keyDownActions = (_keyDownActions = {}, _defineProperty(_keyDownActions, aKey, this._onAKey), _defineProperty(_keyDownActions, enterKey, this._onEnterKey), _defineProperty(_keyDownActions, escapeKey, this._onEscapeKey), _defineProperty(_keyDownActions, upKey, this._onDirectionKey), _defineProperty(_keyDownActions, pageUpKey, this._onDirectionKey), _defineProperty(_keyDownActions, downKey, this._onDirectionKey), _defineProperty(_keyDownActions, pageDownKey, this._onDirectionKey), _defineProperty(_keyDownActions, deleteKey, this._onDeleteKey), _defineProperty(_keyDownActions, backKey, this._onDeleteKey), _keyDownActions);

      // If keycode has a function, run it
      if (keyDownActions[keyCode]) {
        keyDownActions[keyCode]({ target: target, keyCode: keyCode, ctrlKey: ctrlKey, metaKey: metaKey });
      }
    }
  }, {
    key: '_onKeyUp',
    value: function _onKeyUp(_ref6) {
      var target = _ref6.target;

      if (target !== this.input.element) {
        return;
      }

      var value = this.input.value;
      var activeItems = this._store.activeItems;
      var canAddItem = this._canAddItem(activeItems, value);

      // We are typing into a text input and have a value, we want to show a dropdown
      // notice. Otherwise hide the dropdown
      if (value) {
        if (canAddItem.notice) {
          var dropdownItem = this._getTemplate('notice', canAddItem.notice);
          this.dropdown.element.innerHTML = dropdownItem.outerHTML;
        }

        if (canAddItem.response === true) {
          this.showDropdown(true);
        } else if (!canAddItem.notice) {
          this.hideDropdown(true);
        }
      } else {
        this.hideDropdown(true);
      }
    }
  }, {
    key: '_onTouchMove',
    value: function _onTouchMove() {
      if (this._wasTap === true) {
        this._wasTap = false;
      }
    }
  }, {
    key: '_onTouchEnd',
    value: function _onTouchEnd(event) {
      var target = event.target || event.touches[0].target;

      // If a user tapped within our container...
      if (this._wasTap === true && this.containerOuter.element.contains(target)) {
        // ...and we aren't dealing with a single select box, show dropdown/focus input

        var containerWasTarget = target === this.containerOuter.element || target === this.containerInner.element;

        if (containerWasTarget) {
          // If text element, we only want to focus the input
          this.input.focus();
        }
        // Prevents focus event firing
        event.stopPropagation();
      }

      this._wasTap = true;
    }
  }, {
    key: '_onMouseDown',
    value: function _onMouseDown(event) {
      var target = event.target,
          shiftKey = event.shiftKey;
      // If we have our mouse down on the scrollbar and are on IE11...

      if (target === this.choiceList && (0, _utils.isIE11)()) {
        this._isScrollingOnIe = true;
      }

      if (!this.containerOuter.element.contains(target) || target === this.input.element) {
        return;
      }

      var activeItems = this._store.activeItems;
      var hasShiftKey = shiftKey;

      var buttonTarget = (0, _utils.findAncestorByAttrName)(target, 'data-button');
      var itemTarget = (0, _utils.findAncestorByAttrName)(target, 'data-item');
      var choiceTarget = (0, _utils.findAncestorByAttrName)(target, 'data-choice');

      if (buttonTarget) {
        this._handleButtonAction(activeItems, buttonTarget);
      } else if (itemTarget) {
        this._handleItemAction(activeItems, itemTarget, hasShiftKey);
      } else if (choiceTarget) {
        this._handleChoiceAction(activeItems, choiceTarget);
      }

      event.preventDefault();
    }
  }, {
    key: '_onMouseOver',
    value: function _onMouseOver(_ref7) {
      var target = _ref7.target;

      var targetWithinDropdown = target === this.dropdown || this.dropdown.element.contains(target);
      var shouldHighlightChoice = targetWithinDropdown && target.hasAttribute('data-choice');

      if (shouldHighlightChoice) {
        this._highlightChoice(target);
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(_ref8) {
      var target = _ref8.target;

      if (this.containerOuter.element.contains(target)) {
        if (!this.dropdown.isActive && document.activeElement !== this.input.element) {
          this.input.focus();
        }
      } else {
        var hasHighlightedItems = this._store.highlightedActiveItems;

        if (hasHighlightedItems) {
          this.unhighlightAll();
        }

        this.containerOuter.removeFocusState();
        this.hideDropdown(true);
      }
    }
  }, {
    key: '_onFocus',
    value: function _onFocus(_ref9) {
      var target = _ref9.target;

      if (target === this.input.element) {
        this.containerOuter.addFocusState();
      }
    }
  }, {
    key: '_onBlur',
    value: function _onBlur(_ref10) {
      var target = _ref10.target;

      if (this.containerOuter.element.contains(target) && !this._isScrollingOnIe) {
        var activeItems = this._store.activeItems;
        var hasHighlightedItems = activeItems.some(function (item) {
          return item.highlighted;
        });

        if (target === this.input.element) {
          this.containerOuter.removeFocusState();
          if (hasHighlightedItems) {
            this.unhighlightAll();
          }
          this.hideDropdown(true);
        }
      } else {
        // On IE11, clicking the scollbar blurs our input and thus
        // closes the dropdown. To stop this, we refocus our input
        // if we know we are on IE *and* are scrolling.
        this._isScrollingOnIe = false;
        this.input.element.focus();
      }
    }
  }, {
    key: '_onFormReset',
    value: function _onFormReset() {
      this._store.dispatch((0, _misc.resetTo)(this._initialState));
    }
  }, {
    key: '_highlightChoice',
    value: function _highlightChoice() {
      var _this12 = this;

      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

      if (!choices.length) {
        return;
      }

      var passedEl = el;
      var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll('.' + this.config.classNames.highlightedState));

      // Remove any highlighted choices
      highlightedChoices.forEach(function (choice) {
        choice.classList.remove(_this12.config.classNames.highlightedState);
        choice.setAttribute('aria-selected', 'false');
      });

      if (passedEl) {
        this._highlightPosition = choices.indexOf(passedEl);
      } else {
        // Highlight choice based on last known highlight location
        if (choices.length > this._highlightPosition) {
          // If we have an option to highlight
          passedEl = choices[this._highlightPosition];
        } else {
          // Otherwise highlight the option before
          passedEl = choices[choices.length - 1];
        }

        if (!passedEl) {
          passedEl = choices[0];
        }
      }

      passedEl.classList.add(this.config.classNames.highlightedState);
      passedEl.setAttribute('aria-selected', 'true');

      if (this.dropdown.isActive) {
        // IE11 ignores aria-label and blocks virtual keyboard
        // if aria-activedescendant is set without a dropdown
        this.input.setActiveDescendant(passedEl.id);
        this.containerOuter.setActiveDescendant(passedEl.id);
      }
    }
  }, {
    key: '_addItem',
    value: function _addItem(_ref11) {
      var value = _ref11.value,
          _ref11$label = _ref11.label,
          label = _ref11$label === undefined ? null : _ref11$label,
          _ref11$choiceId = _ref11.choiceId,
          choiceId = _ref11$choiceId === undefined ? -1 : _ref11$choiceId,
          _ref11$groupId = _ref11.groupId,
          groupId = _ref11$groupId === undefined ? -1 : _ref11$groupId,
          _ref11$customProperti = _ref11.customProperties,
          customProperties = _ref11$customProperti === undefined ? null : _ref11$customProperti,
          _ref11$placeholder = _ref11.placeholder,
          placeholder = _ref11$placeholder === undefined ? false : _ref11$placeholder,
          _ref11$keyCode = _ref11.keyCode,
          keyCode = _ref11$keyCode === undefined ? null : _ref11$keyCode;

      var passedValue = (0, _utils.isType)('String', value) ? value.trim() : value;

      var passedKeyCode = keyCode;
      var passedCustomProperties = customProperties;
      var items = this._store.items;
      var passedLabel = label || passedValue;
      var passedOptionId = parseInt(choiceId, 10) || -1;
      var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
      var id = items ? items.length + 1 : 1;

      // If a prepended value has been passed, prepend it
      if (this.config.prependValue) {
        passedValue = this.config.prependValue + passedValue.toString();
      }

      // If an appended value has been passed, append it
      if (this.config.appendValue) {
        passedValue += this.config.appendValue.toString();
      }

      this._store.dispatch((0, _items.addItem)({
        value: passedValue,
        label: passedLabel,
        id: id,
        choiceId: passedOptionId,
        groupId: groupId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: passedKeyCode
      }));

      // Trigger change event
      if (group && group.value) {
        this.passedElement.triggerEvent(_constants.EVENTS.addItem, {
          id: id,
          value: passedValue,
          label: passedLabel,
          customProperties: passedCustomProperties,
          groupValue: group.value,
          keyCode: passedKeyCode
        });
      } else {
        this.passedElement.triggerEvent(_constants.EVENTS.addItem, {
          id: id,
          value: passedValue,
          label: passedLabel,
          customProperties: passedCustomProperties,
          keyCode: passedKeyCode
        });
      }

      return this;
    }
  }, {
    key: '_removeItem',
    value: function _removeItem(item) {
      if (!item || !(0, _utils.isType)('Object', item)) {
        return this;
      }

      var id = item.id,
          value = item.value,
          label = item.label,
          choiceId = item.choiceId,
          groupId = item.groupId;

      var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;

      this._store.dispatch((0, _items.removeItem)(id, choiceId));

      if (group && group.value) {
        this.passedElement.triggerEvent(_constants.EVENTS.removeItem, {
          id: id,
          value: value,
          label: label,
          groupValue: group.value
        });
      } else {
        this.passedElement.triggerEvent(_constants.EVENTS.removeItem, {
          id: id,
          value: value,
          label: label
        });
      }

      return this;
    }
  }, {
    key: '_addChoice',
    value: function _addChoice(_ref12) {
      var value = _ref12.value,
          _ref12$label = _ref12.label,
          label = _ref12$label === undefined ? null : _ref12$label,
          _ref12$isSelected = _ref12.isSelected,
          isSelected = _ref12$isSelected === undefined ? false : _ref12$isSelected,
          _ref12$isDisabled = _ref12.isDisabled,
          isDisabled = _ref12$isDisabled === undefined ? false : _ref12$isDisabled,
          _ref12$groupId = _ref12.groupId,
          groupId = _ref12$groupId === undefined ? -1 : _ref12$groupId,
          _ref12$customProperti = _ref12.customProperties,
          customProperties = _ref12$customProperti === undefined ? null : _ref12$customProperti,
          _ref12$placeholder = _ref12.placeholder,
          placeholder = _ref12$placeholder === undefined ? false : _ref12$placeholder,
          _ref12$keyCode = _ref12.keyCode,
          keyCode = _ref12$keyCode === undefined ? null : _ref12$keyCode;

      if (typeof value === 'undefined' || value === null) {
        return;
      }

      // Generate unique id
      var choices = this._store.choices;
      var choiceLabel = label || value;
      var choiceId = choices ? choices.length + 1 : 1;
      var choiceElementId = this._baseId + '-' + this._idNames.itemChoice + '-' + choiceId;

      this._store.dispatch((0, _choices.addChoice)({
        value: value,
        label: choiceLabel,
        id: choiceId,
        groupId: groupId,
        disabled: isDisabled,
        elementId: choiceElementId,
        customProperties: customProperties,
        placeholder: placeholder,
        keyCode: keyCode
      }));

      if (isSelected) {
        this._addItem({
          value: value,
          label: choiceLabel,
          choiceId: choiceId,
          customProperties: customProperties,
          placeholder: placeholder,
          keyCode: keyCode
        });
      }
    }
  }, {
    key: '_clearChoices',
    value: function _clearChoices() {
      this._store.dispatch((0, _choices.clearChoices)());
    }
  }, {
    key: '_addGroup',
    value: function _addGroup(_ref13) {
      var _this13 = this;

      var group = _ref13.group,
          id = _ref13.id,
          _ref13$valueKey = _ref13.valueKey,
          valueKey = _ref13$valueKey === undefined ? 'value' : _ref13$valueKey,
          _ref13$labelKey = _ref13.labelKey,
          labelKey = _ref13$labelKey === undefined ? 'label' : _ref13$labelKey;

      var groupChoices = (0, _utils.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
      var groupId = id || Math.floor(new Date().valueOf() * Math.random());
      var isDisabled = group.disabled ? group.disabled : false;

      if (groupChoices) {
        this._store.dispatch((0, _groups.addGroup)(group.label, groupId, true, isDisabled));

        var addGroupChoices = function addGroupChoices(choice) {
          var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

          _this13._addChoice({
            value: choice[valueKey],
            label: (0, _utils.isType)('Object', choice) ? choice[labelKey] : choice.innerHTML,
            isSelected: choice.selected,
            isDisabled: isOptDisabled,
            groupId: groupId,
            customProperties: choice.customProperties,
            placeholder: choice.placeholder
          });
        };

        groupChoices.forEach(addGroupChoices);
      } else {
        this._store.dispatch((0, _groups.addGroup)(group.label, group.id, false, group.disabled));
      }
    }
  }, {
    key: '_getTemplate',
    value: function _getTemplate(template) {
      var _templates$template;

      if (!template) {
        return null;
      }

      var _config2 = this.config,
          templates = _config2.templates,
          classNames = _config2.classNames;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_templates$template = templates[template]).call.apply(_templates$template, [this, classNames].concat(args));
    }
  }, {
    key: '_createTemplates',
    value: function _createTemplates() {
      var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;

      var userTemplates = {};

      if (callbackOnCreateTemplates && (0, _utils.isType)('Function', callbackOnCreateTemplates)) {
        userTemplates = callbackOnCreateTemplates.call(this, _utils.strToEl);
      }

      this.config.templates = (0, _utils.extend)(_templates.TEMPLATES, userTemplates);
    }
  }, {
    key: '_createElements',
    value: function _createElements() {
      this.containerOuter = new _components.Container({
        element: this._getTemplate('containerOuter', this._direction, false, 'text'),
        classNames: this.config.classNames,
        type: 'text',
        position: this.config.position
      });

      this.containerInner = new _components.Container({
        element: this._getTemplate('containerInner'),
        classNames: this.config.classNames,
        type: 'text',
        position: this.config.position
      });

      this.input = new _components.Input({
        element: this._getTemplate('input'),
        classNames: this.config.classNames,
        type: 'text'
      });

      this.choiceList = new _components.List({
        element: this._getTemplate('choiceList', false // isSelectOneElement
        )
      });

      this.itemList = new _components.List({
        element: this._getTemplate('itemList', false // isSelectOneElement
        )
      });

      this.dropdown = new _components.Dropdown({
        element: this._getTemplate('dropdown'),
        classNames: this.config.classNames,
        type: 'text'
      });
    }
  }, {
    key: '_createStructure',
    value: function _createStructure() {
      // Hide original element
      this.passedElement.conceal();
      // Wrap input in container preserving DOM ordering
      this.containerInner.wrap(this.passedElement.element);
      // Wrapper inner container with outer container
      this.containerOuter.wrap(this.containerInner.element);

      if (this._placeholderValue) {
        this.input.placeholder = this._placeholderValue;
        this.input.setWidth(true);
      }

      if (!this.config.addItems) {
        this.disable();
      }

      this.containerOuter.element.appendChild(this.containerInner.element);
      this.containerOuter.element.appendChild(this.dropdown.element);
      this.containerInner.element.appendChild(this.itemList.element);
      this.containerInner.element.appendChild(this.input.element);

      this._addPredefinedItems();
    }
  }, {
    key: '_addPredefinedItems',
    value: function _addPredefinedItems() {
      var _this14 = this;

      var handlePresetItem = function handlePresetItem(item) {
        var itemType = (0, _utils.getType)(item);
        if (itemType === 'Object' && item.value) {
          _this14._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else if (itemType === 'String') {
          _this14._addItem({
            value: item
          });
        }
      };

      this._presetItems.forEach(function (item) {
        return handlePresetItem(item);
      });
    }
  }, {
    key: '_setChoiceOrItem',
    value: function _setChoiceOrItem(item) {
      var _this15 = this;

      var itemType = (0, _utils.getType)(item).toLowerCase();
      var handleType = {
        object: function object() {
          if (!item.value) {
            return;
          }

          _this15._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        },
        string: function string() {
          _this15._addItem({ value: item });
        }
      };

      handleType[itemType]();
    }
  }, {
    key: '_generatePlaceholderValue',
    value: function _generatePlaceholderValue() {
      return this.config.placeholder ? this.config.placeholderValue || this.passedElement.element.getAttribute('placeholder') : false;
    }
  }, {
    key: '_renderItems',
    value: function _renderItems() {
      var activeItems = this._store.activeItems || [];
      this.itemList.clear();

      if (activeItems.length) {
        // Create a fragment to store our list items
        // (so we don't have to update the DOM for each item)
        var itemListFragment = this._createItemsFragment(activeItems);

        // If we have items to add, append them
        if (itemListFragment.childNodes) {
          this.itemList.append(itemListFragment);
        }
      }
    }
  }]);

  return ChoicesInput;
}(_choicesCore2.default);

module.exports = ChoicesInput;

/***/ })
/******/ ]);
});
//# sourceMappingURL=ChoicesInput.js.map