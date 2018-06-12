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
		exports["Choices"] = factory();
   //Window
	else
		root["Choices"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(33)('wks');
var uid = __webpack_require__(17);
var Symbol = __webpack_require__(3).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


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

var core = module.exports = { version: '2.5.6' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = exports.ChoicesSelectMultiple = exports.ChoicesSelectOne = exports.ChoicesInput = undefined;

var _choicesInput = __webpack_require__(69);

var _choicesInput2 = _interopRequireDefault(_choicesInput);

var _choicesSelectOne = __webpack_require__(80);

var _choicesSelectOne2 = _interopRequireDefault(_choicesSelectOne);

var _choicesSelectMultiple = __webpack_require__(82);

var _choicesSelectMultiple2 = _interopRequireDefault(_choicesSelectMultiple);

var _dropdown = __webpack_require__(83);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _container = __webpack_require__(84);

var _container2 = _interopRequireDefault(_container);

var _input = __webpack_require__(85);

var _input2 = _interopRequireDefault(_input);

var _list = __webpack_require__(86);

var _list2 = _interopRequireDefault(_list);

var _wrappedInput = __webpack_require__(87);

var _wrappedInput2 = _interopRequireDefault(_wrappedInput);

var _wrappedSelect = __webpack_require__(88);

var _wrappedSelect2 = _interopRequireDefault(_wrappedSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ChoicesSelect from './choices-select';
exports.ChoicesInput = _choicesInput2.default;
exports.ChoicesSelectOne = _choicesSelectOne2.default;
exports.ChoicesSelectMultiple = _choicesSelectMultiple2.default;
exports.Dropdown = _dropdown2.default;
exports.Container = _container2.default;
exports.Input = _input2.default;
exports.List = _list2.default;
exports.WrappedInput = _wrappedInput2.default;
exports.WrappedSelect = _wrappedSelect2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(16);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(8);
var IE8_DOM_DEFINE = __webpack_require__(48);
var toPrimitive = __webpack_require__(49);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(26)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = undefined;

var _constants = __webpack_require__(1);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highlightItem = exports.removeItem = exports.addItem = undefined;

var _constants = __webpack_require__(1);

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
/* 13 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(33)('keys');
var uid = __webpack_require__(17);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = __webpack_require__(37);

var _index = __webpack_require__(75);

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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addGroup = undefined;

var _constants = __webpack_require__(1);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(44);

__webpack_require__(68);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(4);
var hide = __webpack_require__(6);
var redefine = __webpack_require__(28);
var ctx = __webpack_require__(29);
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
/* 26 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var hide = __webpack_require__(6);
var has = __webpack_require__(10);
var SRC = __webpack_require__(17)('src');
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(50);
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
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(56);
var defined = __webpack_require__(14);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(13);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(4);
var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(24) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(10);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/lodash-es/_freeGlobal.js
var _freeGlobal = __webpack_require__(70);

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

// EXTERNAL MODULE: ./node_modules/symbol-observable/index.js
var symbol_observable = __webpack_require__(71);
var symbol_observable_default = /*#__PURE__*/__webpack_require__.n(symbol_observable);

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
    }, _ref[symbol_observable_default.a] = function () {
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
  }, _ref2[symbol_observable_default.a] = observable, _ref2;
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
/* 38 */
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fuse = __webpack_require__(81);

var _fuse2 = _interopRequireDefault(_fuse);

var _components = __webpack_require__(5);

var _templates = __webpack_require__(21);

var _constants = __webpack_require__(1);

var _utils = __webpack_require__(0);

var _items = __webpack_require__(12);

var _choices = __webpack_require__(11);

var _misc = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ChoicesSelect
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */

var ChoicesSelect = function () {
  function ChoicesSelect(element, config) {
    _classCallCheck(this, ChoicesSelect);

    this.initialised = false;
    this.config = config;

    if (!['auto', 'always'].includes(this.config.renderSelectedChoices)) {
      this.config.renderSelectedChoices = 'auto';
    }

    this.passedElement = new _components.WrappedSelect({
      element: element,
      classNames: this.config.classNames
    });

    this._initialState = {};
    this._currentState = {};
    this._prevState = {};
    this._baseId = (0, _utils.generateId)(this.passedElement.element, 'choices-');
    this._idNames = {
      itemChoice: 'item-choice'
    };
    this._currentValue = '';
    this._canSearch = this.config.searchEnabled;
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._direction = this.passedElement.element.getAttribute('dir') || 'ltr';

    // Assign preset choices from passed object
    this._presetChoices = this.config.choices;
    // Assign preset items from passed object first
    this._presetItems = this.config.items;
    // Then add any values passed from attribute
    if (this.passedElement.value) {
      this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
    }
  }

  _createClass(ChoicesSelect, [{
    key: 'showDropdown',
    value: function showDropdown(preventInputFocus) {
      var _this = this;

      if (this.dropdown.isActive) {
        return this;
      }

      requestAnimationFrame(function () {
        _this.dropdown.show();
        _this.containerOuter.open(_this.dropdown.distanceFromTopWindow());

        if (!preventInputFocus && _this._canSearch) {
          _this.input.focus();
        }

        _this.passedElement.triggerEvent(_constants.EVENTS.showDropdown, {});
      });

      return this;
    }
  }, {
    key: 'hideDropdown',
    value: function hideDropdown(preventInputBlur) {
      var _this2 = this;

      if (!this.dropdown.isActive) {
        return this;
      }

      requestAnimationFrame(function () {
        _this2.dropdown.hide();
        _this2.containerOuter.close();

        if (!preventInputBlur && _this2._canSearch) {
          _this2.input.removeActiveDescendant();
          _this2.input.blur();
        }

        _this2.passedElement.triggerEvent(_constants.EVENTS.hideDropdown, {});
      });

      return this;
    }
  }, {
    key: 'toggleDropdown',
    value: function toggleDropdown() {
      this.dropdown.isActive ? this.hideDropdown() : this.showDropdown();
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
      var _this3 = this;

      [].concat(_toConsumableArray(args)).forEach(function (value) {
        return _this3._setChoiceOrItem(value);
      });
      return this;
    }
  }, {
    key: 'removeActiveItems',
    value: function removeActiveItems(excludedId) {
      var _this4 = this;

      this._store.activeItems.filter(function (_ref) {
        var id = _ref.id;
        return id !== excludedId;
      }).forEach(function (item) {
        return _this4._removeItem(item);
      });

      return this;
    }
  }, {
    key: 'clearStore',
    value: function clearStore() {
      this._store.dispatch((0, _misc.clearAll)());
      return this;
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
    key: '_getTemplate',
    value: function _getTemplate(template) {
      var _templates$template;

      if (!template) {
        return null;
      }

      var _config = this.config,
          templates = _config.templates,
          classNames = _config.classNames;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_templates$template = templates[template]).call.apply(_templates$template, [this, classNames].concat(args));
    }
  }, {
    key: '_clearChoices',
    value: function _clearChoices() {
      this._store.dispatch((0, _choices.clearChoices)());
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
    key: '_searchChoices',
    value: function _searchChoices(value) {
      var newValue = (0, _utils.isType)('String', value) ? value.trim() : value;
      var currentValue = (0, _utils.isType)('String', this._currentValue) ? this._currentValue.trim() : this._currentValue;

      if (newValue.length < 1 && newValue === currentValue + ' ') {
        return 0;
      }

      // If new value matches the desired length and is not the same as the current value with a space
      var haystack = this._store.searchableChoices;
      var needle = newValue;
      var keys = [].concat(_toConsumableArray(this.config.searchFields));
      var options = Object.assign(this.config.fuseOptions, { keys: keys });
      var fuse = new _fuse2.default(haystack, options);
      var results = fuse.search(needle);

      this._currentValue = newValue;
      this._highlightPosition = 0;
      this._isSearching = true;
      this._store.dispatch((0, _choices.filterChoices)(results));

      return results.length;
    }
  }, {
    key: '_onFormReset',
    value: function _onFormReset() {
      this._store.dispatch((0, _misc.resetTo)(this._initialState));
    }
  }]);

  return ChoicesSelect;
}();

exports.default = ChoicesSelect;

/***/ }),
/* 40 */
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
/* 41 */
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
    key: 'value',
    get: function get() {
      return this.element.value;
    }
  }]);

  return WrappedElement;
}();

exports.default = WrappedElement;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(43);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(23);

var _constants = __webpack_require__(1);

var _utils = __webpack_require__(0);

var _components = __webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var Choices = function () {
  function Choices() {
    var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '[data-choice]';
    var userConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Choices);

    if ((0, _utils.isType)('String', element)) {
      var elements = Array.from(document.querySelectorAll(element));

      // If there are multiple elements, create a new instance
      // for each element besides the first one (as that already has an instance)
      if (elements.length > 1) {
        return this._generateInstances(elements, userConfig);
      }
    }

    var passedElement = (0, _utils.isType)('String', element) ? document.querySelector(element) : element;

    // If element has already been initialised with Choices, fail silently
    if (passedElement.getAttribute('data-choice') === 'active') {
      console.warn('Trying to initialise Choices on element already initialised');
    }

    var config = Choices._generateConfig(userConfig);

    switch (passedElement.type) {
      case 'select-multiple':
        return new _components.ChoicesSelectMultiple(passedElement, config);

      case 'select-one':
        return new _components.ChoicesSelectOne(passedElement, config);

      case 'text':
        return new _components.ChoicesInput(passedElement, config);

      default:
        throw new TypeError('Unrecognised element passed');
    }
  }

  _createClass(Choices, [{
    key: '_generateInstances',
    value: function _generateInstances(elements, config) {
      return elements.reduce(function (instances, element) {
        instances.push(new Choices(element, config));
        return instances;
      }, [this]);
    }
  }], [{
    key: '_generateConfig',
    value: function _generateConfig(userConfig) {
      var defaultConfig = _extends({}, _constants.DEFAULT_CONFIG, {
        items: [],
        choices: [],
        classNames: _constants.DEFAULT_CLASSNAMES,
        sortFn: _utils.sortByAlpha
      });

      return (0, _utils.extend)(defaultConfig, Choices.userDefaults, userConfig);
    }
  }]);

  return Choices;
}();

module.exports = Choices;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(45);
__webpack_require__(61);
module.exports = __webpack_require__(4).Array.from;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(46)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(47)(String, 'String', function (iterated) {
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13);
var defined = __webpack_require__(14);
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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(25);
var redefine = __webpack_require__(28);
var hide = __webpack_require__(6);
var Iterators = __webpack_require__(18);
var $iterCreate = __webpack_require__(51);
var setToStringTag = __webpack_require__(35);
var getPrototypeOf = __webpack_require__(60);
var ITERATOR = __webpack_require__(2)('iterator');
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(26)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
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
/* 50 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(52);
var descriptor = __webpack_require__(16);
var setToStringTag = __webpack_require__(35);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(8);
var dPs = __webpack_require__(53);
var enumBugKeys = __webpack_require__(34);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(27)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(59).appendChild(iframe);
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(8);
var getKeys = __webpack_require__(54);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(55);
var enumBugKeys = __webpack_require__(34);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);
var toIObject = __webpack_require__(30);
var arrayIndexOf = __webpack_require__(57)(false);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(31);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(30);
var toLength = __webpack_require__(32);
var toAbsoluteIndex = __webpack_require__(58);
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(13);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(3).document;
module.exports = document && document.documentElement;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);
var toObject = __webpack_require__(36);
var IE_PROTO = __webpack_require__(19)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(29);
var $export = __webpack_require__(25);
var toObject = __webpack_require__(36);
var call = __webpack_require__(62);
var isArrayIter = __webpack_require__(63);
var toLength = __webpack_require__(32);
var createProperty = __webpack_require__(64);
var getIterFn = __webpack_require__(65);

$export($export.S + $export.F * !__webpack_require__(67)(function (iter) { Array.from(iter); }), 'Array', {
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(8);
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(18);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(7);
var createDesc = __webpack_require__(16);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(66);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(18);
module.exports = __webpack_require__(4).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(31);
var TAG = __webpack_require__(2)('toStringTag');
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
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
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(23);

var _store = __webpack_require__(20);

var _store2 = _interopRequireDefault(_store);

var _components = __webpack_require__(5);

var _constants = __webpack_require__(1);

var _templates = __webpack_require__(21);

var _choices = __webpack_require__(11);

var _items = __webpack_require__(12);

var _groups = __webpack_require__(22);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * ChoicesInput
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var ChoicesInput = function () {
  function ChoicesInput(element, config) {
    _classCallCheck(this, ChoicesInput);

    this.initialised = false;
    this.config = config;

    if (!['auto', 'always'].includes(this.config.renderSelectedChoices)) {
      this.config.renderSelectedChoices = 'auto';
    }

    this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;

    this.passedElement = new _components.WrappedInput({
      element: element,
      classNames: this.config.classNames,
      delimiter: this.config.delimiter
    });

    this._store = new _store2.default(this.render);
    this._initialState = {};
    this._currentState = {};
    this._prevState = {};
    this._currentValue = '';
    this._isScrollingOnIe = false;
    this._highlightPosition = 0;
    this._wasTap = true;
    this._placeholderValue = this._generatePlaceholderValue();
    this._baseId = (0, _utils.generateId)(this.passedElement.element, 'choices-');
    this._direction = this.passedElement.element.getAttribute('dir') || 'ltr';
    this._idNames = {
      itemChoice: 'item-choice'
    };
    // Assign preset items from passed object first
    this._presetItems = this.config.items;
    // Then add any values passed from attribute
    if (this.passedElement.value) {
      this._presetItems = this._presetItems.concat(this.passedElement.value.split(this.config.delimiter));
    }
    this.render = this.render.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onKeyUp = this._onKeyUp.bind(this);
    this._onKeyDown = this._onKeyDown.bind(this);
    this._onClick = this._onClick.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._onMouseDown = this._onMouseDown.bind(this);
    this._onMouseOver = this._onMouseOver.bind(this);
    this._onFormReset = this._onFormReset.bind(this);

    // Let's go
    this.init();
  }

  _createClass(ChoicesInput, [{
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
      var _this = this;

      this._store.items.forEach(function (item) {
        return _this.highlightItem(item);
      });
      return this;
    }
  }, {
    key: 'unhighlightAll',
    value: function unhighlightAll() {
      var _this2 = this;

      this._store.items.forEach(function (item) {
        return _this2.unhighlightItem(item);
      });
      return this;
    }
  }, {
    key: 'removeActiveItemsByValue',
    value: function removeActiveItemsByValue(value) {
      var _this3 = this;

      this._store.activeItems.filter(function (item) {
        return item.value === value;
      }).forEach(function (item) {
        return _this3._removeItem(item);
      });

      return this;
    }
  }, {
    key: 'removeActiveItems',
    value: function removeActiveItems(excludedId) {
      var _this4 = this;

      this._store.activeItems.filter(function (_ref) {
        var id = _ref.id;
        return id !== excludedId;
      }).forEach(function (item) {
        return _this4._removeItem(item);
      });

      return this;
    }
  }, {
    key: 'removeHighlightedItems',
    value: function removeHighlightedItems() {
      var _this5 = this;

      var triggerEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._store.highlightedActiveItems.forEach(function (item) {
        _this5._removeItem(item);
        // If this action was performed by the user
        // trigger the event
        if (triggerEvent) {
          _this5._triggerChange(item.value);
        }
      });

      return this;
    }
  }, {
    key: 'showDropdown',
    value: function showDropdown(preventInputFocus) {
      var _this6 = this;

      if (this.dropdown.isActive) {
        return this;
      }

      requestAnimationFrame(function () {
        _this6.dropdown.show();
        _this6.containerOuter.open(_this6.dropdown.distanceFromTopWindow());

        if (!preventInputFocus) {
          _this6.input.focus();
        }

        _this6.passedElement.triggerEvent(_constants.EVENTS.showDropdown, {});
      });

      return this;
    }
  }, {
    key: 'hideDropdown',
    value: function hideDropdown(preventInputBlur) {
      var _this7 = this;

      if (!this.dropdown.isActive) {
        return this;
      }

      requestAnimationFrame(function () {
        _this7.dropdown.hide();
        _this7.containerOuter.close();

        if (!preventInputBlur) {
          _this7.input.removeActiveDescendant();
          _this7.input.blur();
        }

        _this7.passedElement.triggerEvent(_constants.EVENTS.hideDropdown, {});
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
      var _this8 = this;

      if (!this.initialised) {
        return this;
      }

      [].concat(_toConsumableArray(args)).forEach(function (value) {
        return _this8._setChoiceOrItem(value);
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
      var _this9 = this;

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
        var listItem = _this9._getTemplate('item', item, removeItemButton);
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
      var _this10 = this;

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
          _this10.highlightItem(item);
        } else if (!hasShiftKey && item.highlighted) {
          _this10.unhighlightItem(item);
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
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      var _this11 = this,
          _keyDownActions;

      var target = event.target,
          keyCode = event.keyCode,
          ctrlKey = event.ctrlKey,
          metaKey = event.metaKey;


      if (target !== this.input.element && !this.containerOuter.element.contains(target)) {
        return;
      }

      var activeItems = this._store.activeItems;
      var hasFocusedInput = this.input.isFocussed;
      var hasActiveDropdown = this.dropdown.isActive;
      var hasItems = this.itemList.hasChildren;
      var backKey = _constants.KEY_CODES.BACK_KEY;
      var deleteKey = _constants.KEY_CODES.DELETE_KEY;
      var enterKey = _constants.KEY_CODES.ENTER_KEY;
      var aKey = _constants.KEY_CODES.A_KEY;
      var escapeKey = _constants.KEY_CODES.ESC_KEY;
      var upKey = _constants.KEY_CODES.UP_KEY;
      var downKey = _constants.KEY_CODES.DOWN_KEY;
      var pageUpKey = _constants.KEY_CODES.PAGE_UP_KEY;
      var pageDownKey = _constants.KEY_CODES.PAGE_DOWN_KEY;
      var ctrlDownKey = ctrlKey || metaKey;

      var onAKey = function onAKey() {
        // If CTRL + A or CMD + A have been pressed and there are items to select
        if (ctrlDownKey && hasItems) {
          if (_this11.config.removeItems && !_this11.input.value && _this11.input.element === document.activeElement) {
            // Highlight items
            _this11.highlightAll();
          }
        }
      };

      var onEnterKey = function onEnterKey() {
        // If enter key is pressed and the input has a value
        if (target.value) {
          var value = _this11.input.value;
          var canAddItem = _this11._canAddItem(activeItems, value);

          // All is good, add
          if (canAddItem.response) {
            _this11.hideDropdown(true);
            _this11._addItem({
              value: value
            });
            _this11._triggerChange(value);
            _this11.clearInput();
          }
        }

        if (target.hasAttribute('data-button')) {
          _this11._handleButtonAction(activeItems, target);
          event.preventDefault();
        }

        if (hasActiveDropdown) {
          event.preventDefault();
          var highlighted = _this11.dropdown.getChild('.' + _this11.config.classNames.highlightedState);

          // If we have a highlighted choice
          if (highlighted) {
            // add enter keyCode value
            if (activeItems[0]) {
              activeItems[0].keyCode = enterKey;
            }
            _this11._handleChoiceAction(activeItems, highlighted);
          }
        }
      };

      var onEscapeKey = function onEscapeKey() {
        if (hasActiveDropdown) {
          _this11.hideDropdown(true);
          _this11.containerOuter.focus();
        }
      };

      var onDirectionKey = function onDirectionKey() {
        // If up or down key is pressed, traverse through options
        if (hasActiveDropdown) {
          _this11.showDropdown();

          var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
          var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
          var selectableChoiceIdentifier = '[data-choice-selectable]';

          var nextEl = void 0;
          if (skipKey) {
            if (directionInt > 0) {
              nextEl = Array.from(_this11.dropdown.element.querySelectorAll(selectableChoiceIdentifier)).pop();
            } else {
              nextEl = _this11.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
          } else {
            var currentEl = _this11.dropdown.element.querySelector('.' + _this11.config.classNames.highlightedState);
            if (currentEl) {
              nextEl = (0, _utils.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
            } else {
              nextEl = _this11.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
          }

          if (nextEl) {
            // We prevent default to stop the cursor moving
            // when pressing the arrow
            if (!(0, _utils.isScrolledIntoView)(nextEl, _this11.choiceList.element, directionInt)) {
              _this11.choiceList.scrollToChoice(nextEl, directionInt);
            }
            _this11._highlightChoice(nextEl);
          }

          // Prevent default to maintain cursor position whilst
          // traversing dropdown options
          event.preventDefault();
        }
      };

      var onDeleteKey = function onDeleteKey() {
        // If backspace or delete key is pressed and the input has no value
        if (hasFocusedInput && !target.value) {
          _this11._handleBackspace(activeItems);
          event.preventDefault();
        }
      };

      // Map keys to key actions
      var keyDownActions = (_keyDownActions = {}, _defineProperty(_keyDownActions, aKey, onAKey), _defineProperty(_keyDownActions, enterKey, onEnterKey), _defineProperty(_keyDownActions, escapeKey, onEscapeKey), _defineProperty(_keyDownActions, upKey, onDirectionKey), _defineProperty(_keyDownActions, pageUpKey, onDirectionKey), _defineProperty(_keyDownActions, downKey, onDirectionKey), _defineProperty(_keyDownActions, pageDownKey, onDirectionKey), _defineProperty(_keyDownActions, deleteKey, onDeleteKey), _defineProperty(_keyDownActions, backKey, onDeleteKey), _keyDownActions);

      // If keycode has a function, run it
      if (keyDownActions[keyCode]) {
        keyDownActions[keyCode]();
      }
    }
  }, {
    key: '_onKeyUp',
    value: function _onKeyUp(_ref2) {
      var target = _ref2.target;

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
    value: function _onMouseOver(_ref3) {
      var target = _ref3.target;

      var targetWithinDropdown = target === this.dropdown || this.dropdown.element.contains(target);
      var shouldHighlightChoice = targetWithinDropdown && target.hasAttribute('data-choice');

      if (shouldHighlightChoice) {
        this._highlightChoice(target);
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(_ref4) {
      var target = _ref4.target;

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
    value: function _onFocus(_ref5) {
      var target = _ref5.target;

      if (target === this.input.element) {
        this.containerOuter.addFocusState();
      }
    }
  }, {
    key: '_onBlur',
    value: function _onBlur(_ref6) {
      var target = _ref6.target;

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
    value: function _addItem(_ref7) {
      var value = _ref7.value,
          _ref7$label = _ref7.label,
          label = _ref7$label === undefined ? null : _ref7$label,
          _ref7$choiceId = _ref7.choiceId,
          choiceId = _ref7$choiceId === undefined ? -1 : _ref7$choiceId,
          _ref7$groupId = _ref7.groupId,
          groupId = _ref7$groupId === undefined ? -1 : _ref7$groupId,
          _ref7$customPropertie = _ref7.customProperties,
          customProperties = _ref7$customPropertie === undefined ? null : _ref7$customPropertie,
          _ref7$placeholder = _ref7.placeholder,
          placeholder = _ref7$placeholder === undefined ? false : _ref7$placeholder,
          _ref7$keyCode = _ref7.keyCode,
          keyCode = _ref7$keyCode === undefined ? null : _ref7$keyCode;

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
    value: function _addChoice(_ref8) {
      var value = _ref8.value,
          _ref8$label = _ref8.label,
          label = _ref8$label === undefined ? null : _ref8$label,
          _ref8$isSelected = _ref8.isSelected,
          isSelected = _ref8$isSelected === undefined ? false : _ref8$isSelected,
          _ref8$isDisabled = _ref8.isDisabled,
          isDisabled = _ref8$isDisabled === undefined ? false : _ref8$isDisabled,
          _ref8$groupId = _ref8.groupId,
          groupId = _ref8$groupId === undefined ? -1 : _ref8$groupId,
          _ref8$customPropertie = _ref8.customProperties,
          customProperties = _ref8$customPropertie === undefined ? null : _ref8$customPropertie,
          _ref8$placeholder = _ref8.placeholder,
          placeholder = _ref8$placeholder === undefined ? false : _ref8$placeholder,
          _ref8$keyCode = _ref8.keyCode,
          keyCode = _ref8$keyCode === undefined ? null : _ref8$keyCode;

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
    value: function _addGroup(_ref9) {
      var _this13 = this;

      var group = _ref9.group,
          id = _ref9.id,
          _ref9$valueKey = _ref9.valueKey,
          valueKey = _ref9$valueKey === undefined ? 'value' : _ref9$valueKey,
          _ref9$labelKey = _ref9.labelKey,
          labelKey = _ref9$labelKey === undefined ? 'label' : _ref9$labelKey;

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
}();

exports.default = ChoicesInput;

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(38)))

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(74);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


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

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38), __webpack_require__(73)(module)))

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(37);

var _items = __webpack_require__(76);

var _items2 = _interopRequireDefault(_items);

var _groups = __webpack_require__(77);

var _groups2 = _interopRequireDefault(_groups);

var _choices = __webpack_require__(78);

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
/* 76 */
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
/* 77 */
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
/* 78 */
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store2 = __webpack_require__(20);

var _store3 = _interopRequireDefault(_store2);

var _components = __webpack_require__(5);

var _choicesSelect = __webpack_require__(39);

var _choicesSelect2 = _interopRequireDefault(_choicesSelect);

var _constants = __webpack_require__(1);

var _choices = __webpack_require__(11);

var _items = __webpack_require__(12);

var _groups = __webpack_require__(22);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ChoicesSelectOne
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var ChoicesSelectOne = function (_ChoicesSelect) {
  _inherits(ChoicesSelectOne, _ChoicesSelect);

  function ChoicesSelectOne(element, config) {
    _classCallCheck(this, ChoicesSelectOne);

    var _this = _possibleConstructorReturn(this, (ChoicesSelectOne.__proto__ || Object.getPrototypeOf(ChoicesSelectOne)).call(this, element, config));

    if (_this.config.shouldSortItems === true) {
      if (!_this.config.silent) {
        console.warn("shouldSortElements: Type of passed element is 'select-one', falling back to false.");
      }

      _this.config.shouldSortItems === false;
    }

    _this._store = new _store3.default(_this.render);

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

  _createClass(ChoicesSelectOne, [{
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
      this.passedElement.options = this._presetChoices;

      this.clearStore();

      this.config.templates = null;
      this.initialised = false;
    }
  }, {
    key: 'enable',
    value: function enable() {
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

      this._renderChoices();

      if (shouldRenderItems) {
        this._renderItems();
      }

      this._prevState = this._currentState;
    }
  }, {
    key: 'setChoiceByValue',
    value: function setChoiceByValue(value) {
      var _this2 = this;

      // If only one value has been passed, convert to array
      var choiceValue = (0, _utils.isType)('Array', value) ? value : [value];

      // Loop through each value and
      choiceValue.forEach(function (val) {
        return _this2._findAndSelectChoiceByValue(val);
      });

      return this;
    }
  }, {
    key: 'setChoices',
    value: function setChoices() {
      var choices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _this3 = this;

      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var replaceChoices = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!choices.length || !value) {
        return this;
      }

      // Clear choices if needed
      if (replaceChoices) {
        this._clearChoices();
      }

      this.containerOuter.removeLoadingState();
      var addGroupsAndChoices = function addGroupsAndChoices(groupOrChoice) {
        if (groupOrChoice.choices) {
          _this3._addGroup({
            group: groupOrChoice,
            id: groupOrChoice.id || null,
            valueKey: value,
            labelKey: label
          });
        } else {
          _this3._addChoice({
            value: groupOrChoice[value],
            label: groupOrChoice[label],
            isSelected: groupOrChoice.selected,
            isDisabled: groupOrChoice.disabled,
            customProperties: groupOrChoice.customProperties,
            placeholder: groupOrChoice.placeholder
          });
        }
      };

      choices.forEach(addGroupsAndChoices);

      return this;
    }
  }, {
    key: 'clearInput',
    value: function clearInput() {
      this.input.clear();

      if (this._canSearch) {
        this._isSearching = false;
        this._store.dispatch((0, _choices.activateChoices)(true));
      }

      return this;
    }
  }, {
    key: 'ajax',
    value: function ajax(fn) {
      var _this4 = this;

      if (!fn) {
        return this;
      }

      requestAnimationFrame(function () {
        return _this4._handleLoadingState(true);
      });
      fn(this._ajaxCallback());

      return this;
    }
  }, {
    key: '_createGroupsFragment',
    value: function _createGroupsFragment(groups, choices, fragment) {
      var _this5 = this;

      var groupFragment = fragment || document.createDocumentFragment();
      var getGroupChoices = function getGroupChoices(group) {
        return choices.filter(function (choice) {
          return choice.groupId === group.id;
        });
      };

      // If sorting is enabled, filter groups
      if (this.config.shouldSort) {
        groups.sort(this.config.sortFn);
      }

      groups.forEach(function (group) {
        var groupChoices = getGroupChoices(group);
        if (groupChoices.length >= 1) {
          var dropdownGroup = _this5._getTemplate('choiceGroup', group);
          groupFragment.appendChild(dropdownGroup);
          _this5._createChoicesFragment(groupChoices, groupFragment, true);
        }
      });

      return groupFragment;
    }
  }, {
    key: '_createChoicesFragment',
    value: function _createChoicesFragment(choices, fragment) {
      var _this6 = this;

      var withinGroup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      // Create a fragment to store our list items (so we don't have to update the DOM for each item)
      var choicesFragment = fragment || document.createDocumentFragment();
      var _config = this.config,
          renderSelectedChoices = _config.renderSelectedChoices,
          searchResultLimit = _config.searchResultLimit,
          renderChoiceLimit = _config.renderChoiceLimit;

      var filter = this._isSearching ? _utils.sortByScore : this.config.sortFn;
      var appendChoice = function appendChoice(choice) {
        var shouldRender = renderSelectedChoices === 'auto' ? !choice.selected : true;
        if (shouldRender) {
          var dropdownItem = _this6._getTemplate('choice', choice, _this6.config.itemSelectText);
          choicesFragment.appendChild(dropdownItem);
        }
      };

      var rendererableChoices = choices;

      // Split array into placeholders and "normal" choices

      var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
        if (choice.placeholder) {
          acc.placeholderChoices.push(choice);
        } else {
          acc.normalChoices.push(choice);
        }
        return acc;
      }, { placeholderChoices: [], normalChoices: [] }),
          placeholderChoices = _rendererableChoices$.placeholderChoices,
          normalChoices = _rendererableChoices$.normalChoices;

      // If sorting is enabled or the user is searching, filter choices


      if (this.config.shouldSort || this._isSearching) {
        normalChoices.sort(filter);
      }

      var choiceLimit = rendererableChoices.length;

      // Prepend placeholeder
      var sortedChoices = [].concat(_toConsumableArray(placeholderChoices), _toConsumableArray(normalChoices));

      if (this._isSearching) {
        choiceLimit = searchResultLimit;
      } else if (renderChoiceLimit > 0 && !withinGroup) {
        choiceLimit = renderChoiceLimit;
      }

      // Add each choice to dropdown within range
      for (var i = 0; i < choiceLimit; i += 1) {
        if (sortedChoices[i]) {
          appendChoice(sortedChoices[i]);
        }
      }

      return choicesFragment;
    }
  }, {
    key: '_createItemsFragment',
    value: function _createItemsFragment(items) {
      var _this7 = this;

      var fragment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Create fragment to add elements to
      var removeItemButton = this.config.removeItemButton;

      var itemListFragment = fragment || document.createDocumentFragment();

      // Update the options of the hidden input
      this.passedElement.options = items;

      var addItemToFragment = function addItemToFragment(item) {
        // Create new list element
        var listItem = _this7._getTemplate('item', item, removeItemButton);
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
    key: '_selectPlaceholderChoice',
    value: function _selectPlaceholderChoice() {
      var placeholderChoice = this._store.placeholderChoice;

      if (placeholderChoice) {
        this._addItem({
          value: placeholderChoice.value,
          label: placeholderChoice.label,
          choiceId: placeholderChoice.id,
          groupId: placeholderChoice.groupId,
          placeholder: placeholderChoice.placeholder
        });

        this._triggerChange(placeholderChoice.value);
      }
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
      this._selectPlaceholderChoice();
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
      var hasActiveDropdown = this.dropdown.isActive;

      // Update choice keyCode
      choice.keyCode = passedKeyCode;

      this.passedElement.triggerEvent(_constants.EVENTS.choice, {
        choice: choice
      });

      if (choice && !choice.selected && !choice.disabled) {
        var canAddItem = this._canAddItem(choice.value);

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

      // We wont to close the dropdown if we are dealing with a single select box
      if (hasActiveDropdown) {
        this.hideDropdown(true);
        this.containerOuter.focus();
      }
    }
  }, {
    key: '_handleLoadingState',
    value: function _handleLoadingState() {
      var isLoading = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      var placeholderItem = this.itemList.getChild('.' + this.config.classNames.placeholder);
      if (isLoading) {
        this.containerOuter.addLoadingState();
        if (!placeholderItem) {
          placeholderItem = this._getTemplate('placeholder', this.config.loadingText);
          this.itemList.append(placeholderItem);
        } else {
          placeholderItem.innerHTML = this.config.loadingText;
        }
      } else {
        this.containerOuter.removeLoadingState();
        placeholderItem.innerHTML = '';
      }
    }
  }, {
    key: '_canAddItem',
    value: function _canAddItem(value) {
      var canAddItem = true;
      var notice = (0, _utils.isType)('Function', this.config.addItemText) ? this.config.addItemText(value) : this.config.addItemText;

      return {
        response: canAddItem,
        notice: notice
      };
    }
  }, {
    key: '_ajaxCallback',
    value: function _ajaxCallback() {
      var _this8 = this;

      return function (results, value, label) {
        if (!results || !value) {
          return;
        }

        var parsedResults = (0, _utils.isType)('Object', results) ? [results] : results;

        if (parsedResults && (0, _utils.isType)('Array', parsedResults) && parsedResults.length) {
          // Remove loading states/text
          _this8._handleLoadingState(false);
          // Add each result as a choice
          parsedResults.forEach(function (result) {
            if (result.choices) {
              _this8._addGroup({
                group: result,
                id: result.id || null,
                valueKey: value,
                labelKey: label
              });
            } else {
              _this8._addChoice({
                value: (0, _utils.fetchFromObject)(result, value),
                label: (0, _utils.fetchFromObject)(result, label),
                isSelected: result.selected,
                isDisabled: result.disabled,
                customProperties: result.customProperties,
                placeholder: result.placeholder
              });
            }
          });

          _this8._selectPlaceholderChoice();
        } else {
          // No results, remove loading state
          _this8._handleLoadingState(false);
        }
      };
    }
  }, {
    key: '_handleSearch',
    value: function _handleSearch(value) {
      if (!value || !this.input.isFocussed) {
        return;
      }

      var choices = this._store.choices;
      var _config2 = this.config,
          searchFloor = _config2.searchFloor,
          searchChoices = _config2.searchChoices;

      var hasUnactiveChoices = choices.some(function (option) {
        return !option.active;
      });

      // Check that we have a value to search and the input was an alphanumeric character
      if (value && value.length >= searchFloor) {
        var resultCount = searchChoices ? this._searchChoices(value) : 0;
        // Trigger search event
        this.passedElement.triggerEvent(_constants.EVENTS.search, {
          value: value,
          resultCount: resultCount
        });
      } else if (hasUnactiveChoices) {
        // Otherwise reset choices to active
        this._isSearching = false;
        this._store.dispatch((0, _choices.activateChoices)(true));
      }
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

      this.containerOuter.element.addEventListener('focus', this._onFocus);
      this.containerOuter.element.addEventListener('blur', this._onBlur);

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

      this.containerOuter.element.removeEventListener('focus', this._onFocus);
      this.containerOuter.element.removeEventListener('blur', this._onBlur);

      this.input.element.removeEventListener('focus', this._onFocus);
      this.input.element.removeEventListener('blur', this._onBlur);

      if (this.input.element.form) {
        this.input.element.form.removeEventListener('reset', this._onFormReset);
      }

      this.input.removeEventListeners();
    }
  }, {
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      var _this9 = this,
          _keyDownActions;

      var target = event.target,
          keyCode = event.keyCode,
          ctrlKey = event.ctrlKey,
          metaKey = event.metaKey;


      if (target !== this.input.element && !this.containerOuter.element.contains(target)) {
        return;
      }

      var activeItems = this._store.activeItems;
      var hasActiveDropdown = this.dropdown.isActive;
      var hasItems = this.itemList.hasChildren;
      var keyString = String.fromCharCode(keyCode);
      var enterKey = _constants.KEY_CODES.ENTER_KEY;
      var aKey = _constants.KEY_CODES.A_KEY;
      var escapeKey = _constants.KEY_CODES.ESC_KEY;
      var upKey = _constants.KEY_CODES.UP_KEY;
      var downKey = _constants.KEY_CODES.DOWN_KEY;
      var pageUpKey = _constants.KEY_CODES.PAGE_UP_KEY;
      var pageDownKey = _constants.KEY_CODES.PAGE_DOWN_KEY;
      var ctrlDownKey = ctrlKey || metaKey;

      // If a user is typing and the dropdown is not active
      if (/[a-zA-Z0-9-_ ]/.test(keyString)) {
        this.showDropdown();
      }

      var onAKey = function onAKey() {
        // If CTRL + A or CMD + A have been pressed and there are items to select
        if (ctrlDownKey && hasItems) {
          _this9._canSearch = false;
          if (_this9.config.removeItems && !_this9.input.value && _this9.input.element === document.activeElement) {
            // Highlight items
            _this9.highlightAll();
          }
        }
      };

      var onEnterKey = function onEnterKey() {
        if (target.hasAttribute('data-button')) {
          _this9._handleButtonAction(activeItems, target);
          event.preventDefault();
        }

        if (hasActiveDropdown) {
          event.preventDefault();
          var highlighted = _this9.dropdown.getChild('.' + _this9.config.classNames.highlightedState);

          // If we have a highlighted choice
          if (highlighted) {
            // add enter keyCode value
            if (activeItems[0]) {
              activeItems[0].keyCode = enterKey;
            }
            _this9._handleChoiceAction(activeItems, highlighted);
          }
        } else {
          // Open single select dropdown if it's not active
          _this9.showDropdown();
          event.preventDefault();
        }
      };

      var onEscapeKey = function onEscapeKey() {
        if (hasActiveDropdown) {
          _this9.hideDropdown(true);
          _this9.containerOuter.focus();
        }
      };

      var onDirectionKey = function onDirectionKey() {
        // If up or down key is pressed, traverse through options
        if (hasActiveDropdown) {
          _this9.showDropdown();
          _this9._canSearch = false;

          var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
          var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
          var selectableChoiceIdentifier = '[data-choice-selectable]';

          var nextEl = void 0;
          if (skipKey) {
            if (directionInt > 0) {
              nextEl = Array.from(_this9.dropdown.element.querySelectorAll(selectableChoiceIdentifier)).pop();
            } else {
              nextEl = _this9.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
          } else {
            var currentEl = _this9.dropdown.element.querySelector('.' + _this9.config.classNames.highlightedState);
            if (currentEl) {
              nextEl = (0, _utils.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
            } else {
              nextEl = _this9.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
          }

          if (nextEl) {
            // We prevent default to stop the cursor moving
            // when pressing the arrow
            if (!(0, _utils.isScrolledIntoView)(nextEl, _this9.choiceList.element, directionInt)) {
              _this9.choiceList.scrollToChoice(nextEl, directionInt);
            }
            _this9._highlightChoice(nextEl);
          }

          // Prevent default to maintain cursor position whilst
          // traversing dropdown options
          event.preventDefault();
        }
      };

      // Map keys to key actions
      var keyDownActions = (_keyDownActions = {}, _defineProperty(_keyDownActions, aKey, onAKey), _defineProperty(_keyDownActions, enterKey, onEnterKey), _defineProperty(_keyDownActions, escapeKey, onEscapeKey), _defineProperty(_keyDownActions, upKey, onDirectionKey), _defineProperty(_keyDownActions, pageUpKey, onDirectionKey), _defineProperty(_keyDownActions, downKey, onDirectionKey), _defineProperty(_keyDownActions, pageDownKey, onDirectionKey), _keyDownActions);

      // If keycode has a function, run it
      if (keyDownActions[keyCode]) {
        keyDownActions[keyCode]();
      }
    }
  }, {
    key: '_onKeyUp',
    value: function _onKeyUp(_ref) {
      var target = _ref.target,
          keyCode = _ref.keyCode;

      if (target !== this.input.element) {
        return;
      }

      var value = this.input.value;
      var canAddItem = this._canAddItem(value);
      var backKey = _constants.KEY_CODES.BACK_KEY;
      var deleteKey = _constants.KEY_CODES.DELETE_KEY;

      // If user has removed value...
      if ((keyCode === backKey || keyCode === deleteKey) && !target.value) {
        if (this._isSearching) {
          this._isSearching = false;
          this._store.dispatch((0, _choices.activateChoices)(true));
        }
      } else if (this._canSearch && canAddItem.response) {
        this._handleSearch(this.input.value);
      }

      this._canSearch = this.config.searchEnabled;
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
        // Prevents focus event firing
        event.stopPropagation();
      }

      this._wasTap = true;
    }
  }, {
    key: '_onMouseDown',
    value: function _onMouseDown(event) {
      var target = event.target;
      // If we have our mouse down on the scrollbar and are on IE11...

      if (target === this.choiceList && (0, _utils.isIE11)()) {
        this._isScrollingOnIe = true;
      }

      if (!this.containerOuter.element.contains(target) || target === this.input.element) {
        return;
      }

      var activeItems = this._store.activeItems;

      var buttonTarget = (0, _utils.findAncestorByAttrName)(target, 'data-button');
      var choiceTarget = (0, _utils.findAncestorByAttrName)(target, 'data-choice');

      if (buttonTarget) {
        this._handleButtonAction(activeItems, buttonTarget);
      } else if (choiceTarget) {
        this._handleChoiceAction(activeItems, choiceTarget);
      }

      event.preventDefault();
    }
  }, {
    key: '_onMouseOver',
    value: function _onMouseOver(_ref2) {
      var target = _ref2.target;

      var targetWithinDropdown = target === this.dropdown || this.dropdown.element.contains(target);
      var shouldHighlightChoice = targetWithinDropdown && target.hasAttribute('data-choice');

      if (shouldHighlightChoice) {
        this._highlightChoice(target);
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(_ref3) {
      var target = _ref3.target;

      if (this.containerOuter.element.contains(target)) {
        if (!this.dropdown.isActive) {
          this.showDropdown();
          this.containerOuter.focus();
        } else if (target !== this.input.element && !this.dropdown.element.contains(target)) {
          this.hideDropdown();
        }
      } else {
        this.containerOuter.removeFocusState();
        this.hideDropdown(true);
      }
    }
  }, {
    key: '_onFocus',
    value: function _onFocus(_ref4) {
      var target = _ref4.target;

      if (!this.containerOuter.element.contains(target)) {
        return;
      }

      this.containerOuter.addFocusState();

      if (target === this.input.element) {
        this.showDropdown(true);
      }
    }
  }, {
    key: '_onBlur',
    value: function _onBlur(_ref5) {
      var target = _ref5.target;

      // If target is something that concerns us
      if (this.containerOuter.element.contains(target) && !this._isScrollingOnIe) {
        this.containerOuter.removeFocusState();
        if (target === this.input.element || target === this.containerOuter.element && !this._canSearch) {
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
    key: '_highlightChoice',
    value: function _highlightChoice() {
      var _this10 = this;

      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

      if (!choices.length) {
        return;
      }

      var choiceToHighlight = el;
      var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll('.' + this.config.classNames.highlightedState));

      // Remove any highlighted choices
      highlightedChoices.forEach(function (choice) {
        choice.classList.remove(_this10.config.classNames.highlightedState);
        choice.setAttribute('aria-selected', 'false');
      });

      if (choiceToHighlight) {
        this._highlightPosition = choices.indexOf(choiceToHighlight);
      } else {
        // Highlight choice based on last known highlight location
        if (choices.length > this._highlightPosition) {
          // If we have an option to highlight
          choiceToHighlight = choices[this._highlightPosition];
        } else {
          // Otherwise highlight the option before
          choiceToHighlight = choices[choices.length - 1];
        }

        if (!choiceToHighlight) {
          choiceToHighlight = choices[0];
        }
      }

      choiceToHighlight.classList.add(this.config.classNames.highlightedState);
      choiceToHighlight.setAttribute('aria-selected', 'true');

      if (this.dropdown.isActive) {
        // IE11 ignores aria-label and blocks virtual keyboard
        // if aria-activedescendant is set without a dropdown
        this.input.setActiveDescendant(choiceToHighlight.id);
        this.containerOuter.setActiveDescendant(choiceToHighlight.id);
      }
    }
  }, {
    key: '_addItem',
    value: function _addItem(_ref6) {
      var value = _ref6.value,
          _ref6$label = _ref6.label,
          label = _ref6$label === undefined ? null : _ref6$label,
          _ref6$choiceId = _ref6.choiceId,
          choiceId = _ref6$choiceId === undefined ? -1 : _ref6$choiceId,
          _ref6$groupId = _ref6.groupId,
          groupId = _ref6$groupId === undefined ? -1 : _ref6$groupId,
          _ref6$customPropertie = _ref6.customProperties,
          customProperties = _ref6$customPropertie === undefined ? null : _ref6$customPropertie,
          _ref6$placeholder = _ref6.placeholder,
          placeholder = _ref6$placeholder === undefined ? false : _ref6$placeholder,
          _ref6$keyCode = _ref6.keyCode,
          keyCode = _ref6$keyCode === undefined ? null : _ref6$keyCode;

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

      this.removeActiveItems(id);

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
    key: '_addChoice',
    value: function _addChoice(_ref7) {
      var value = _ref7.value,
          _ref7$label = _ref7.label,
          label = _ref7$label === undefined ? null : _ref7$label,
          _ref7$isSelected = _ref7.isSelected,
          isSelected = _ref7$isSelected === undefined ? false : _ref7$isSelected,
          _ref7$isDisabled = _ref7.isDisabled,
          isDisabled = _ref7$isDisabled === undefined ? false : _ref7$isDisabled,
          _ref7$groupId = _ref7.groupId,
          groupId = _ref7$groupId === undefined ? -1 : _ref7$groupId,
          _ref7$customPropertie = _ref7.customProperties,
          customProperties = _ref7$customPropertie === undefined ? null : _ref7$customPropertie,
          _ref7$placeholder = _ref7.placeholder,
          placeholder = _ref7$placeholder === undefined ? false : _ref7$placeholder,
          _ref7$keyCode = _ref7.keyCode,
          keyCode = _ref7$keyCode === undefined ? null : _ref7$keyCode;

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
    key: '_addGroup',
    value: function _addGroup(_ref8) {
      var _this11 = this;

      var group = _ref8.group,
          id = _ref8.id,
          _ref8$valueKey = _ref8.valueKey,
          valueKey = _ref8$valueKey === undefined ? 'value' : _ref8$valueKey,
          _ref8$labelKey = _ref8.labelKey,
          labelKey = _ref8$labelKey === undefined ? 'label' : _ref8$labelKey;

      var groupChoices = (0, _utils.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
      var groupId = id || Math.floor(new Date().valueOf() * Math.random());
      var isDisabled = group.disabled ? group.disabled : false;

      if (groupChoices) {
        this._store.dispatch((0, _groups.addGroup)(group.label, groupId, true, isDisabled));

        var addGroupChoices = function addGroupChoices(choice) {
          var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

          _this11._addChoice({
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
    key: '_createElements',
    value: function _createElements() {
      this.containerOuter = new _components.Container({
        element: this._getTemplate('containerOuter', this._direction, this.config.searchEnabled, 'select-one'),
        classNames: this.config.classNames,
        type: 'select-one',
        position: this.config.position
      });

      this.containerInner = new _components.Container({
        element: this._getTemplate('containerInner'),
        classNames: this.config.classNames,
        type: 'select-one',
        position: this.config.position
      });

      this.input = new _components.Input({
        element: this._getTemplate('input'),
        classNames: this.config.classNames,
        type: 'select-one'
      });

      this.choiceList = new _components.List({
        element: this._getTemplate('choiceList', true // isSelectOneElement
        )
      });

      this.itemList = new _components.List({
        element: this._getTemplate('itemList', true // isSelectOneElement
        )
      });

      this.dropdown = new _components.Dropdown({
        element: this._getTemplate('dropdown'),
        classNames: this.config.classNames,
        type: 'select-one'
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

      this.input.placeholder = this.config.searchPlaceholderValue || '';

      if (!this.config.addItems) {
        this.disable();
      }

      this.containerOuter.element.appendChild(this.containerInner.element);
      this.containerOuter.element.appendChild(this.dropdown.element);
      this.containerInner.element.appendChild(this.itemList.element);

      this.dropdown.element.appendChild(this.choiceList.element);
      this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);

      this._addPredefinedChoices();
    }
  }, {
    key: '_addPredefinedChoices',
    value: function _addPredefinedChoices() {
      var _this12 = this;

      var passedGroups = this.passedElement.optionGroups;

      this._highlightPosition = 0;
      this._isSearching = false;

      if (passedGroups && passedGroups.length) {
        // If we have a placeholder option
        var placeholderChoice = this.passedElement.placeholderOption;
        if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') {
          this._addChoice({
            value: placeholderChoice.value,
            label: placeholderChoice.innerHTML,
            isSelected: placeholderChoice.selected,
            isDisabled: placeholderChoice.disabled,
            placeholder: true
          });
        }

        passedGroups.forEach(function (group) {
          return _this12._addGroup({
            group: group,
            id: group.id || null
          });
        });
      } else {
        var passedOptions = this.passedElement.options;
        var filter = this.config.sortFn;
        var allChoices = this._presetChoices;

        // Create array of options from option elements
        passedOptions.forEach(function (o) {
          allChoices.push({
            value: o.value,
            label: o.innerHTML,
            selected: o.selected,
            disabled: o.disabled || o.parentNode.disabled,
            placeholder: o.hasAttribute('placeholder')
          });
        });

        // If sorting is enabled or the user is searching, filter choices
        if (this.config.shouldSort) {
          allChoices.sort(filter);
        }

        // Determine whether there is a selected choice
        var hasSelectedChoice = allChoices.some(function (choice) {
          return choice.selected;
        });
        var handleChoice = function handleChoice(choice, index) {
          var value = choice.value,
              label = choice.label,
              customProperties = choice.customProperties,
              placeholder = choice.placeholder;

          // If the choice is actually a group

          if (choice.choices) {
            _this12._addGroup({
              group: choice,
              id: choice.id || null
            });
          } else {
            // If there is a selected choice already or the choice is not
            // the first in the array, add each choice normally
            // Otherwise pre-select the first choice in the array if it's a single select
            var shouldPreselect = !hasSelectedChoice && index === 0;
            var isSelected = shouldPreselect ? true : choice.selected;
            var isDisabled = shouldPreselect ? false : choice.disabled;

            _this12._addChoice({
              value: value,
              label: label,
              isSelected: isSelected,
              isDisabled: isDisabled,
              customProperties: customProperties,
              placeholder: placeholder
            });
          }
        };

        // Add each choice
        allChoices.forEach(function (choice, index) {
          return handleChoice(choice, index);
        });
      }
    }
  }, {
    key: '_addPredefinedItems',
    value: function _addPredefinedItems() {
      var _this13 = this;

      var handlePresetItem = function handlePresetItem(item) {
        var itemType = (0, _utils.getType)(item);
        if (itemType === 'Object' && item.value) {
          _this13._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else if (itemType === 'String') {
          _this13._addItem({
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
      var _this14 = this;

      var itemType = (0, _utils.getType)(item).toLowerCase();
      var handleType = {
        object: function object() {
          if (!item.value) {
            return;
          }

          _this14._addChoice({
            value: item.value,
            label: item.label,
            isSelected: true,
            isDisabled: false,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        },
        string: function string() {
          _this14._addChoice({
            value: item,
            label: item,
            isSelected: true,
            isDisabled: false
          });
        }
      };

      handleType[itemType]();
    }
  }, {
    key: '_findAndSelectChoiceByValue',
    value: function _findAndSelectChoiceByValue(val) {
      var _this15 = this;

      var choices = this._store.choices;
      // Check 'value' property exists and the choice isn't already selected
      var foundChoice = choices.find(function (choice) {
        return _this15.config.itemComparer(choice.value, val);
      });

      if (foundChoice && !foundChoice.selected) {
        this._addItem({
          value: foundChoice.value,
          label: foundChoice.label,
          id: foundChoice.id,
          groupId: foundChoice.groupId,
          customProperties: foundChoice.customProperties,
          placeholder: foundChoice.placeholder,
          keyCode: foundChoice.keyCode
        });
      }
    }
  }, {
    key: '_renderChoices',
    value: function _renderChoices() {
      var _this16 = this;

      var _store = this._store,
          activeGroups = _store.activeGroups,
          activeChoices = _store.activeChoices;

      var choiceListFragment = document.createDocumentFragment();

      this.choiceList.clear();

      if (this.config.resetScrollPosition) {
        requestAnimationFrame(function () {
          return _this16.choiceList.scrollToTop();
        });
      }

      // If we have grouped options
      if (activeGroups.length >= 1 && !this._isSearching) {
        // If we have a placeholder choice along with groups
        var activePlaceholders = activeChoices.filter(function (activeChoice) {
          return activeChoice.placeholder === true && activeChoice.groupId === -1;
        });
        if (activePlaceholders.length >= 1) {
          choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
        }
        choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
      } else if (activeChoices.length >= 1) {
        choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
      }

      // If we have choices to show
      if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
        var canAddItem = this._canAddItem(this.input.value);

        // ...and we can select them
        if (canAddItem.response) {
          // ...append them and highlight the first choice
          this.choiceList.append(choiceListFragment);
          this._highlightChoice();
        } else {
          // ...otherwise show a notice
          this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
        }
      } else {
        // Otherwise show a notice
        var dropdownItem = void 0;
        var notice = void 0;

        if (this._isSearching) {
          notice = (0, _utils.isType)('Function', this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText;

          dropdownItem = this._getTemplate('notice', notice, 'no-results');
        } else {
          notice = (0, _utils.isType)('Function', this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText;

          dropdownItem = this._getTemplate('notice', notice, 'no-choices');
        }

        this.choiceList.append(dropdownItem);
      }
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

  return ChoicesSelectOne;
}(_choicesSelect2.default);

exports.default = ChoicesSelectOne;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Fuse", [], factory);
	else if(typeof exports === 'object')
		exports["Fuse"] = factory();
	else
		root["Fuse"] = factory();
})(this, function() {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var totalScore = 0;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            totalScore += nScore;
          }
        }

        results[i].score = bestScore === 1 ? totalScore / scoreLen : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      this._log('\n\nOutput:\n\n', JSON.stringify(results));

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _store2 = __webpack_require__(20);

var _store3 = _interopRequireDefault(_store2);

var _components = __webpack_require__(5);

var _choicesSelect = __webpack_require__(39);

var _choicesSelect2 = _interopRequireDefault(_choicesSelect);

var _constants = __webpack_require__(1);

var _choices = __webpack_require__(11);

var _items = __webpack_require__(12);

var _groups = __webpack_require__(22);

var _misc = __webpack_require__(40);

var _utils = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * ChoicesSelectMultiple
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */
var ChoicesSelectMultiple = function (_ChoicesSelect) {
  _inherits(ChoicesSelectMultiple, _ChoicesSelect);

  function ChoicesSelectMultiple(element, config) {
    _classCallCheck(this, ChoicesSelectMultiple);

    var _this = _possibleConstructorReturn(this, (ChoicesSelectMultiple.__proto__ || Object.getPrototypeOf(ChoicesSelectMultiple)).call(this, element, config));

    _this._store = new _store3.default(_this.render);

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

    _this._placeholderValue = _this._generatePlaceholderValue();

    // Let's go
    _this.init();
    return _this;
  }

  _createClass(ChoicesSelectMultiple, [{
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
      this.passedElement.options = this._presetChoices;

      this.clearStore();

      this.config.templates = null;
      this.initialised = false;
    }
  }, {
    key: 'enable',
    value: function enable() {
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

      this._renderChoices();

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
    key: 'removeHighlightedItems',
    value: function removeHighlightedItems() {
      var _this5 = this;

      var triggerEvent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this._store.highlightedActiveItems.forEach(function (item) {
        _this5._removeItem(item);
        // If this action was performed by the user
        // trigger the event
        if (triggerEvent) {
          _this5._triggerChange(item.value);
        }
      });

      return this;
    }
  }, {
    key: 'setChoiceByValue',
    value: function setChoiceByValue(value) {
      var _this6 = this;

      // If only one value has been passed, convert to array
      var choiceValue = (0, _utils.isType)('Array', value) ? value : [value];

      // Loop through each value and
      choiceValue.forEach(function (val) {
        return _this6._findAndSelectChoiceByValue(val);
      });

      return this;
    }
  }, {
    key: 'setChoices',
    value: function setChoices() {
      var choices = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _this7 = this;

      var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var replaceChoices = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

      if (!choices.length || !value) {
        return this;
      }

      // Clear choices if needed
      if (replaceChoices) {
        this._clearChoices();
      }

      this.containerOuter.removeLoadingState();
      var addGroupsAndChoices = function addGroupsAndChoices(groupOrChoice) {
        if (groupOrChoice.choices) {
          _this7._addGroup({
            group: groupOrChoice,
            id: groupOrChoice.id || null,
            valueKey: value,
            labelKey: label
          });
        } else {
          _this7._addChoice({
            value: groupOrChoice[value],
            label: groupOrChoice[label],
            isSelected: groupOrChoice.selected,
            isDisabled: groupOrChoice.disabled,
            customProperties: groupOrChoice.customProperties,
            placeholder: groupOrChoice.placeholder
          });
        }
      };

      choices.forEach(addGroupsAndChoices);

      return this;
    }
  }, {
    key: 'clearInput',
    value: function clearInput() {
      this.input.clear();
      this.input.setWidth();

      if (this._canSearch) {
        this._isSearching = false;
        this._store.dispatch((0, _choices.activateChoices)(true));
      }

      return this;
    }
  }, {
    key: 'ajax',
    value: function ajax(fn) {
      var _this8 = this;

      if (!fn) {
        return this;
      }

      requestAnimationFrame(function () {
        return _this8._handleLoadingState(true);
      });
      fn(this._ajaxCallback());

      return this;
    }
  }, {
    key: '_createGroupsFragment',
    value: function _createGroupsFragment(groups, choices, fragment) {
      var _this9 = this;

      var groupFragment = fragment || document.createDocumentFragment();
      var getGroupChoices = function getGroupChoices(group) {
        return choices.filter(function (choice) {
          return choice.groupId === group.id && (_this9.config.renderSelectedChoices === 'always' || !choice.selected);
        });
      };

      // If sorting is enabled, filter groups
      if (this.config.shouldSort) {
        groups.sort(this.config.sortFn);
      }

      groups.forEach(function (group) {
        var groupChoices = getGroupChoices(group);
        if (groupChoices.length >= 1) {
          var dropdownGroup = _this9._getTemplate('choiceGroup', group);
          groupFragment.appendChild(dropdownGroup);
          _this9._createChoicesFragment(groupChoices, groupFragment, true);
        }
      });

      return groupFragment;
    }
  }, {
    key: '_createChoicesFragment',
    value: function _createChoicesFragment(choices, fragment) {
      var _this10 = this;

      var withinGroup = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      // Create a fragment to store our list items (so we don't have to update the DOM for each item)
      var choicesFragment = fragment || document.createDocumentFragment();
      var _config = this.config,
          renderSelectedChoices = _config.renderSelectedChoices,
          searchResultLimit = _config.searchResultLimit,
          renderChoiceLimit = _config.renderChoiceLimit;

      var filter = this._isSearching ? _utils.sortByScore : this.config.sortFn;
      var appendChoice = function appendChoice(choice) {
        var shouldRender = renderSelectedChoices === 'auto' ? !choice.selected : true;
        if (shouldRender) {
          var dropdownItem = _this10._getTemplate('choice', choice, _this10.config.itemSelectText);
          choicesFragment.appendChild(dropdownItem);
        }
      };

      var rendererableChoices = choices;

      if (renderSelectedChoices === 'auto') {
        rendererableChoices = choices.filter(function (choice) {
          return !choice.selected;
        });
      }

      // Split array into placeholders and "normal" choices

      var _rendererableChoices$ = rendererableChoices.reduce(function (acc, choice) {
        if (choice.placeholder) {
          acc.placeholderChoices.push(choice);
        } else {
          acc.normalChoices.push(choice);
        }
        return acc;
      }, { placeholderChoices: [], normalChoices: [] }),
          placeholderChoices = _rendererableChoices$.placeholderChoices,
          normalChoices = _rendererableChoices$.normalChoices;

      // If sorting is enabled or the user is searching, filter choices


      if (this.config.shouldSort || this._isSearching) {
        normalChoices.sort(filter);
      }

      var choiceLimit = rendererableChoices.length;

      // Prepend placeholeder
      var sortedChoices = [].concat(_toConsumableArray(placeholderChoices), _toConsumableArray(normalChoices));

      if (this._isSearching) {
        choiceLimit = searchResultLimit;
      } else if (renderChoiceLimit > 0 && !withinGroup) {
        choiceLimit = renderChoiceLimit;
      }

      // Add each choice to dropdown within range
      for (var i = 0; i < choiceLimit; i += 1) {
        if (sortedChoices[i]) {
          appendChoice(sortedChoices[i]);
        }
      }

      return choicesFragment;
    }
  }, {
    key: '_createItemsFragment',
    value: function _createItemsFragment(items) {
      var _this11 = this;

      var fragment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      // Create fragment to add elements to
      var _config2 = this.config,
          shouldSortItems = _config2.shouldSortItems,
          sortFn = _config2.sortFn,
          removeItemButton = _config2.removeItemButton;

      var itemListFragment = fragment || document.createDocumentFragment();

      // If sorting is enabled, filter items
      if (shouldSortItems) {
        items.sort(sortFn);
      }

      // Update the options of the hidden input
      this.passedElement.options = items;

      var addItemToFragment = function addItemToFragment(item) {
        // Create new list element
        var listItem = _this11._getTemplate('item', item, removeItemButton);
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
    key: '_selectPlaceholderChoice',
    value: function _selectPlaceholderChoice() {
      var placeholderChoice = this._store.placeholderChoice;

      if (placeholderChoice) {
        this._addItem({
          value: placeholderChoice.value,
          label: placeholderChoice.label,
          choiceId: placeholderChoice.id,
          groupId: placeholderChoice.groupId,
          placeholder: placeholderChoice.placeholder
        });

        this._triggerChange(placeholderChoice.value);
      }
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
      var _this12 = this;

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
          _this12.highlightItem(item);
        } else if (!hasShiftKey && item.highlighted) {
          _this12.unhighlightItem(item);
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
    key: '_ajaxCallback',
    value: function _ajaxCallback() {
      var _this13 = this;

      return function (results, value, label) {
        if (!results || !value) {
          return;
        }

        var parsedResults = (0, _utils.isType)('Object', results) ? [results] : results;

        if (parsedResults && (0, _utils.isType)('Array', parsedResults) && parsedResults.length) {
          // Remove loading states/text
          _this13._handleLoadingState(false);
          // Add each result as a choice
          parsedResults.forEach(function (result) {
            if (result.choices) {
              _this13._addGroup({
                group: result,
                id: result.id || null,
                valueKey: value,
                labelKey: label
              });
            } else {
              _this13._addChoice({
                value: (0, _utils.fetchFromObject)(result, value),
                label: (0, _utils.fetchFromObject)(result, label),
                isSelected: result.selected,
                isDisabled: result.disabled,
                customProperties: result.customProperties,
                placeholder: result.placeholder
              });
            }
          });
        } else {
          // No results, remove loading state
          _this13._handleLoadingState(false);
        }
      };
    }
  }, {
    key: '_handleSearch',
    value: function _handleSearch(value) {
      if (!value || !this.input.isFocussed) {
        return;
      }

      var choices = this._store.choices;
      var _config3 = this.config,
          searchFloor = _config3.searchFloor,
          searchChoices = _config3.searchChoices;

      var hasUnactiveChoices = choices.some(function (option) {
        return !option.active;
      });

      // Check that we have a value to search and the input was an alphanumeric character
      if (value && value.length >= searchFloor) {
        var resultCount = searchChoices ? this._searchChoices(value) : 0;
        // Trigger search event
        this.passedElement.triggerEvent(_constants.EVENTS.search, {
          value: value,
          resultCount: resultCount
        });
      } else if (hasUnactiveChoices) {
        // Otherwise reset choices to active
        this._isSearching = false;
        this._store.dispatch((0, _choices.activateChoices)(true));
      }
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
    key: '_onKeyDown',
    value: function _onKeyDown(event) {
      var _this14 = this,
          _keyDownActions;

      var target = event.target,
          keyCode = event.keyCode,
          ctrlKey = event.ctrlKey,
          metaKey = event.metaKey;


      if (target !== this.input.element && !this.containerOuter.element.contains(target)) {
        return;
      }

      var activeItems = this._store.activeItems;
      var hasFocusedInput = this.input.isFocussed;
      var hasActiveDropdown = this.dropdown.isActive;
      var hasItems = this.itemList.hasChildren;
      var keyString = String.fromCharCode(keyCode);
      var backKey = _constants.KEY_CODES.BACK_KEY;
      var deleteKey = _constants.KEY_CODES.DELETE_KEY;
      var enterKey = _constants.KEY_CODES.ENTER_KEY;
      var aKey = _constants.KEY_CODES.A_KEY;
      var escapeKey = _constants.KEY_CODES.ESC_KEY;
      var upKey = _constants.KEY_CODES.UP_KEY;
      var downKey = _constants.KEY_CODES.DOWN_KEY;
      var pageUpKey = _constants.KEY_CODES.PAGE_UP_KEY;
      var pageDownKey = _constants.KEY_CODES.PAGE_DOWN_KEY;
      var ctrlDownKey = ctrlKey || metaKey;

      // If a user is typing and the dropdown is not active
      if (/[a-zA-Z0-9-_ ]/.test(keyString)) {
        this.showDropdown();
      }

      var onAKey = function onAKey() {
        // If CTRL + A or CMD + A have been pressed and there are items to select
        if (ctrlDownKey && hasItems) {
          _this14._canSearch = false;
          if (_this14.config.removeItems && !_this14.input.value && _this14.input.element === document.activeElement) {
            // Highlight items
            _this14.highlightAll();
          }
        }
      };

      var onEnterKey = function onEnterKey() {
        if (target.hasAttribute('data-button')) {
          _this14._handleButtonAction(activeItems, target);
          event.preventDefault();
        }

        if (hasActiveDropdown) {
          event.preventDefault();
          var highlighted = _this14.dropdown.getChild('.' + _this14.config.classNames.highlightedState);

          // If we have a highlighted choice
          if (highlighted) {
            // add enter keyCode value
            if (activeItems[0]) {
              activeItems[0].keyCode = enterKey;
            }
            _this14._handleChoiceAction(activeItems, highlighted);
          }
        }
      };

      var onEscapeKey = function onEscapeKey() {
        if (hasActiveDropdown) {
          _this14.hideDropdown(true);
          _this14.containerOuter.focus();
        }
      };

      var onDirectionKey = function onDirectionKey() {
        // If up or down key is pressed, traverse through options
        if (hasActiveDropdown) {
          _this14.showDropdown();
          _this14._canSearch = false;

          var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
          var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
          var selectableChoiceIdentifier = '[data-choice-selectable]';

          var nextEl = void 0;
          if (skipKey) {
            if (directionInt > 0) {
              nextEl = Array.from(_this14.dropdown.element.querySelectorAll(selectableChoiceIdentifier)).pop();
            } else {
              nextEl = _this14.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
          } else {
            var currentEl = _this14.dropdown.element.querySelector('.' + _this14.config.classNames.highlightedState);
            if (currentEl) {
              nextEl = (0, _utils.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
            } else {
              nextEl = _this14.dropdown.element.querySelector(selectableChoiceIdentifier);
            }
          }

          if (nextEl) {
            // We prevent default to stop the cursor moving
            // when pressing the arrow
            if (!(0, _utils.isScrolledIntoView)(nextEl, _this14.choiceList.element, directionInt)) {
              _this14.choiceList.scrollToChoice(nextEl, directionInt);
            }
            _this14._highlightChoice(nextEl);
          }

          // Prevent default to maintain cursor position whilst
          // traversing dropdown options
          event.preventDefault();
        }
      };

      var onDeleteKey = function onDeleteKey() {
        // If backspace or delete key is pressed and the input has no value
        if (hasFocusedInput && !target.value) {
          _this14._handleBackspace(activeItems);
          event.preventDefault();
        }
      };

      // Map keys to key actions
      var keyDownActions = (_keyDownActions = {}, _defineProperty(_keyDownActions, aKey, onAKey), _defineProperty(_keyDownActions, enterKey, onEnterKey), _defineProperty(_keyDownActions, escapeKey, onEscapeKey), _defineProperty(_keyDownActions, upKey, onDirectionKey), _defineProperty(_keyDownActions, pageUpKey, onDirectionKey), _defineProperty(_keyDownActions, downKey, onDirectionKey), _defineProperty(_keyDownActions, pageDownKey, onDirectionKey), _defineProperty(_keyDownActions, deleteKey, onDeleteKey), _defineProperty(_keyDownActions, backKey, onDeleteKey), _keyDownActions);

      // If keycode has a function, run it
      if (keyDownActions[keyCode]) {
        keyDownActions[keyCode]();
      }
    }
  }, {
    key: '_onKeyUp',
    value: function _onKeyUp(_ref) {
      var target = _ref.target,
          keyCode = _ref.keyCode;

      if (target !== this.input.element) {
        return;
      }

      var value = this.input.value;
      var activeItems = this._store.activeItems;
      var canAddItem = this._canAddItem(activeItems, value);
      var backKey = _constants.KEY_CODES.BACK_KEY;
      var deleteKey = _constants.KEY_CODES.DELETE_KEY;

      // If user has removed value...
      if ((keyCode === backKey || keyCode === deleteKey) && !target.value) {
        if (this._isSearching) {
          this._isSearching = false;
          this._store.dispatch((0, _choices.activateChoices)(true));
        }
      } else if (this._canSearch && canAddItem.response) {
        this._handleSearch(this.input.value);
      }

      this._canSearch = this.config.searchEnabled;
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
          this.showDropdown();
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
    value: function _onMouseOver(_ref2) {
      var target = _ref2.target;

      var targetWithinDropdown = target === this.dropdown || this.dropdown.element.contains(target);
      var shouldHighlightChoice = targetWithinDropdown && target.hasAttribute('data-choice');

      if (shouldHighlightChoice) {
        this._highlightChoice(target);
      }
    }
  }, {
    key: '_onClick',
    value: function _onClick(_ref3) {
      var target = _ref3.target;

      if (this.containerOuter.element.contains(target)) {
        if (!this.dropdown.isActive) {
          this.showDropdown();
          this.containerOuter.focus();
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
    value: function _onFocus(_ref4) {
      var target = _ref4.target;

      if (target === this.input.element) {
        this.showDropdown(true);
        // If element is a select box, the focused element is the container and the dropdown
        // isn't already open, focus and show dropdown
        this.containerOuter.addFocusState();
      }
    }
  }, {
    key: '_onBlur',
    value: function _onBlur(_ref5) {
      var target = _ref5.target;

      // If target is something that concerns us
      if (this.containerOuter.element.contains(target) && !this._isScrollingOnIe) {
        var activeItems = this._store.activeItems;
        var hasHighlightedItems = activeItems.some(function (item) {
          return item.highlighted;
        });

        if (target === this.input.element) {
          this.containerOuter.removeFocusState();
          this.hideDropdown(true);
          if (hasHighlightedItems) {
            this.unhighlightAll();
          }
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
      var _this15 = this;

      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var choices = Array.from(this.dropdown.element.querySelectorAll('[data-choice-selectable]'));

      if (!choices.length) {
        return;
      }

      var choiceToHighlight = el;
      var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll('.' + this.config.classNames.highlightedState));

      // Remove any highlighted choices
      highlightedChoices.forEach(function (choice) {
        choice.classList.remove(_this15.config.classNames.highlightedState);
        choice.setAttribute('aria-selected', 'false');
      });

      if (choiceToHighlight) {
        this._highlightPosition = choices.indexOf(choiceToHighlight);
      } else {
        // Highlight choice based on last known highlight location
        if (choices.length > this._highlightPosition) {
          // If we have an option to highlight
          choiceToHighlight = choices[this._highlightPosition];
        } else {
          // Otherwise highlight the option before
          choiceToHighlight = choices[choices.length - 1];
        }

        if (!choiceToHighlight) {
          choiceToHighlight = choices[0];
        }
      }

      choiceToHighlight.classList.add(this.config.classNames.highlightedState);
      choiceToHighlight.setAttribute('aria-selected', 'true');

      if (this.dropdown.isActive) {
        // IE11 ignores aria-label and blocks virtual keyboard
        // if aria-activedescendant is set without a dropdown
        this.input.setActiveDescendant(choiceToHighlight.id);
        this.containerOuter.setActiveDescendant(choiceToHighlight.id);
      }
    }
  }, {
    key: '_addItem',
    value: function _addItem(_ref6) {
      var value = _ref6.value,
          _ref6$label = _ref6.label,
          label = _ref6$label === undefined ? null : _ref6$label,
          _ref6$choiceId = _ref6.choiceId,
          choiceId = _ref6$choiceId === undefined ? -1 : _ref6$choiceId,
          _ref6$groupId = _ref6.groupId,
          groupId = _ref6$groupId === undefined ? -1 : _ref6$groupId,
          _ref6$customPropertie = _ref6.customProperties,
          customProperties = _ref6$customPropertie === undefined ? null : _ref6$customPropertie,
          _ref6$placeholder = _ref6.placeholder,
          placeholder = _ref6$placeholder === undefined ? false : _ref6$placeholder,
          _ref6$keyCode = _ref6.keyCode,
          keyCode = _ref6$keyCode === undefined ? null : _ref6$keyCode;

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
    key: '_addChoice',
    value: function _addChoice(_ref7) {
      var value = _ref7.value,
          _ref7$label = _ref7.label,
          label = _ref7$label === undefined ? null : _ref7$label,
          _ref7$isSelected = _ref7.isSelected,
          isSelected = _ref7$isSelected === undefined ? false : _ref7$isSelected,
          _ref7$isDisabled = _ref7.isDisabled,
          isDisabled = _ref7$isDisabled === undefined ? false : _ref7$isDisabled,
          _ref7$groupId = _ref7.groupId,
          groupId = _ref7$groupId === undefined ? -1 : _ref7$groupId,
          _ref7$customPropertie = _ref7.customProperties,
          customProperties = _ref7$customPropertie === undefined ? null : _ref7$customPropertie,
          _ref7$placeholder = _ref7.placeholder,
          placeholder = _ref7$placeholder === undefined ? false : _ref7$placeholder,
          _ref7$keyCode = _ref7.keyCode,
          keyCode = _ref7$keyCode === undefined ? null : _ref7$keyCode;

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
    key: '_addGroup',
    value: function _addGroup(_ref8) {
      var _this16 = this;

      var group = _ref8.group,
          id = _ref8.id,
          _ref8$valueKey = _ref8.valueKey,
          valueKey = _ref8$valueKey === undefined ? 'value' : _ref8$valueKey,
          _ref8$labelKey = _ref8.labelKey,
          labelKey = _ref8$labelKey === undefined ? 'label' : _ref8$labelKey;

      var groupChoices = (0, _utils.isType)('Object', group) ? group.choices : Array.from(group.getElementsByTagName('OPTION'));
      var groupId = id || Math.floor(new Date().valueOf() * Math.random());
      var isDisabled = group.disabled ? group.disabled : false;

      if (groupChoices) {
        this._store.dispatch((0, _groups.addGroup)(group.label, groupId, true, isDisabled));

        var addGroupChoices = function addGroupChoices(choice) {
          var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;

          _this16._addChoice({
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
    key: '_createElements',
    value: function _createElements() {
      this.containerOuter = new _components.Container({
        element: this._getTemplate('containerOuter', this._direction, this.config.searchEnabled, 'select-multiple'),
        classNames: this.config.classNames,
        type: 'select-multiple',
        position: this.config.position
      });

      this.containerInner = new _components.Container({
        element: this._getTemplate('containerInner'),
        classNames: this.config.classNames,
        type: 'select-multiple',
        position: this.config.position
      });

      this.input = new _components.Input({
        element: this._getTemplate('input'),
        classNames: this.config.classNames,
        type: 'select-multiple'
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
        type: 'select-multiple'
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

      this.dropdown.element.appendChild(this.choiceList.element);
      this.containerInner.element.appendChild(this.input.element);

      this._addPredefinedChoices();
    }
  }, {
    key: '_addPredefinedChoices',
    value: function _addPredefinedChoices() {
      var _this17 = this;

      var passedGroups = this.passedElement.optionGroups;

      this._highlightPosition = 0;
      this._isSearching = false;

      if (passedGroups && passedGroups.length) {
        // If we have a placeholder option
        var placeholderChoice = this.passedElement.placeholderOption;
        if (placeholderChoice && placeholderChoice.parentNode.tagName === 'SELECT') {
          this._addChoice({
            value: placeholderChoice.value,
            label: placeholderChoice.innerHTML,
            isSelected: placeholderChoice.selected,
            isDisabled: placeholderChoice.disabled,
            placeholder: true
          });
        }

        passedGroups.forEach(function (group) {
          return _this17._addGroup({
            group: group,
            id: group.id || null
          });
        });
      } else {
        var passedOptions = this.passedElement.options;
        var filter = this.config.sortFn;
        var allChoices = this._presetChoices;

        // Create array of options from option elements
        passedOptions.forEach(function (o) {
          allChoices.push({
            value: o.value,
            label: o.innerHTML,
            selected: o.selected,
            disabled: o.disabled || o.parentNode.disabled,
            placeholder: o.hasAttribute('placeholder')
          });
        });

        // If sorting is enabled or the user is searching, filter choices
        if (this.config.shouldSort) {
          allChoices.sort(filter);
        }

        var handleChoice = function handleChoice(choice) {
          var value = choice.value,
              label = choice.label,
              customProperties = choice.customProperties,
              placeholder = choice.placeholder;

          // If the choice is actually a group

          if (choice.choices) {
            _this17._addGroup({
              group: choice,
              id: choice.id || null
            });
          } else {
            var isSelected = choice.selected;
            var isDisabled = choice.disabled;

            _this17._addChoice({
              value: value,
              label: label,
              isSelected: isSelected,
              isDisabled: isDisabled,
              customProperties: customProperties,
              placeholder: placeholder
            });
          }
        };

        // Add each choice
        allChoices.forEach(function (choice, index) {
          return handleChoice(choice, index);
        });
      }
    }
  }, {
    key: '_addPredefinedItems',
    value: function _addPredefinedItems() {
      var _this18 = this;

      var handlePresetItem = function handlePresetItem(item) {
        var itemType = (0, _utils.getType)(item);
        if (itemType === 'Object' && item.value) {
          _this18._addItem({
            value: item.value,
            label: item.label,
            choiceId: item.id,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        } else if (itemType === 'String') {
          _this18._addItem({
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
      var _this19 = this;

      var itemType = (0, _utils.getType)(item).toLowerCase();
      var handleType = {
        object: function object() {
          if (!item.value) {
            return;
          }

          _this19._addChoice({
            value: item.value,
            label: item.label,
            isSelected: true,
            isDisabled: false,
            customProperties: item.customProperties,
            placeholder: item.placeholder
          });
        },
        string: function string() {
          _this19._addChoice({
            value: item,
            label: item,
            isSelected: true,
            isDisabled: false
          });
        }
      };

      handleType[itemType]();
    }
  }, {
    key: '_findAndSelectChoiceByValue',
    value: function _findAndSelectChoiceByValue(val) {
      var _this20 = this;

      var choices = this._store.choices;
      // Check 'value' property exists and the choice isn't already selected
      var foundChoice = choices.find(function (choice) {
        return _this20.config.itemComparer(choice.value, val);
      });

      if (foundChoice && !foundChoice.selected) {
        this._addItem({
          value: foundChoice.value,
          label: foundChoice.label,
          id: foundChoice.id,
          groupId: foundChoice.groupId,
          customProperties: foundChoice.customProperties,
          placeholder: foundChoice.placeholder,
          keyCode: foundChoice.keyCode
        });
      }
    }
  }, {
    key: '_generatePlaceholderValue',
    value: function _generatePlaceholderValue() {
      return this.config.placeholder ? this.config.placeholderValue || this.passedElement.element.getAttribute('placeholder') : false;
    }
  }, {
    key: '_renderChoices',
    value: function _renderChoices() {
      var _this21 = this;

      var _store = this._store,
          activeGroups = _store.activeGroups,
          activeChoices = _store.activeChoices;

      var choiceListFragment = document.createDocumentFragment();

      this.choiceList.clear();

      if (this.config.resetScrollPosition) {
        requestAnimationFrame(function () {
          return _this21.choiceList.scrollToTop();
        });
      }

      // If we have grouped options
      if (activeGroups.length >= 1 && !this._isSearching) {
        // If we have a placeholder choice along with groups
        var activePlaceholders = activeChoices.filter(function (activeChoice) {
          return activeChoice.placeholder === true && activeChoice.groupId === -1;
        });
        if (activePlaceholders.length >= 1) {
          choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
        }
        choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
      } else if (activeChoices.length >= 1) {
        choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
      }

      // If we have choices to show
      if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
        var activeItems = this._store.activeItems;
        var canAddItem = this._canAddItem(activeItems, this.input.value);

        // ...and we can select them
        if (canAddItem.response) {
          // ...append them and highlight the first choice
          this.choiceList.append(choiceListFragment);
          this._highlightChoice();
        } else {
          // ...otherwise show a notice
          this.choiceList.append(this._getTemplate('notice', canAddItem.notice));
        }
      } else {
        // Otherwise show a notice
        var dropdownItem = void 0;
        var notice = void 0;

        if (this._isSearching) {
          notice = (0, _utils.isType)('Function', this.config.noResultsText) ? this.config.noResultsText() : this.config.noResultsText;

          dropdownItem = this._getTemplate('notice', notice, 'no-results');
        } else {
          notice = (0, _utils.isType)('Function', this.config.noChoicesText) ? this.config.noChoicesText() : this.config.noChoicesText;

          dropdownItem = this._getTemplate('notice', notice, 'no-choices');
        }

        this.choiceList.append(dropdownItem);
      }
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

  return ChoicesSelectMultiple;
}(_choicesSelect2.default);

exports.default = ChoicesSelectMultiple;

/***/ }),
/* 83 */
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
/* 84 */
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
/* 85 */
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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(1);

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
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _wrappedElement = __webpack_require__(41);

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
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wrappedElement = __webpack_require__(41);

var _wrappedElement2 = _interopRequireDefault(_wrappedElement);

var _templates = __webpack_require__(21);

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

/***/ })
/******/ ]);
});
//# sourceMappingURL=choices.js.map