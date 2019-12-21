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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_UI.js":
/*!********************!*\
  !*** ./src/_UI.js ***!
  \********************/
/*! exports provided: UI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UI\", function() { return UI; });\n class UI{\r\n    constructor (){\r\n        this.gameTimer = null;\r\n        this.gameTimerMin = 0;\r\n        this.gameTimerSec = 0;\r\n        this.secondsDom = 0;//DOM seconds mske\r\n        this.minutesDom = 0;//DOM min mske \r\n    }\r\n\r\n    buildDeck (gameDeck){\r\n        const deckElement = document.querySelector('.deck')\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/_UI.js?");

/***/ }),

/***/ "./src/_deck.js":
/*!**********************!*\
  !*** ./src/_deck.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Deck; });\n class Deck {\r\n    constructor (){\r\n        this.cardDeck = [\r\n            {icon : '<i class=\"fas fa-frog\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-frog\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-atom\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-atom\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-bath\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-bath\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-bowling-ball\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-bowling-ball\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-brain\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-brain\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fab fa-forumbee\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fab fa-forumbee\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-gem\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-gem\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-guitar\"></i>', faceUp : false, matched: false},\r\n            {icon : '<i class=\"fas fa-guitar\"></i>', faceUp : false, matched: false},\r\n        ]\r\n    }\r\n\r\n    shuffle (){\r\n     let arr = this.cardDeck;\r\n     for (let i=arr.length-1; i>0, i--;){\r\n        let j = Math.floor(Math.random()*(i+1));\r\n        [arr[i], arr[j]] = [arr[j], arr[i]]\r\n     }\r\n     return arr; \r\n    }\r\n\r\n    isIconMatched (cardDeck, firstCardIndex, secondCardIndex){\r\n        if (cardDeck[firstCardIndex].icon === cardDeck[secondCardIndex].icon){\r\n            return true;\r\n        }   else {\r\n            return false;\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/_deck.js?");

/***/ }),

/***/ "./src/_gamePlay.js":
/*!**************************!*\
  !*** ./src/_gamePlay.js ***!
  \**************************/
/*! exports provided: GamePlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GamePlay\", function() { return GamePlay; });\nclass GamePlay{\r\n    constructor (){\r\n        this.deck = null; \r\n        this.gameDeck = [];\r\n        this.gameUI = null; \r\n        this.moveCount = 0;\r\n        this.flipCount = 0;\r\n        this.matchCount = 0; \r\n        this.firstCard = undefined;\r\n        this.deckFragment = null;\r\n        this.isTurnInProgress = false; \r\n    }\r\n\r\n    setDeck(deck){\r\n        this.deck = deck;\r\n    }\r\n\r\n    setUI (ui){\r\n        this.gameUI = ui;\r\n    }\r\n\r\n}\n\n//# sourceURL=webpack:///./src/_gamePlay.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _deck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_deck */ \"./src/_deck.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_UI */ \"./src/_UI.js\");\n/* harmony import */ var _gamePlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_gamePlay */ \"./src/_gamePlay.js\");\n\r\n\r\n\r\n\r\nconst deck = new _deck__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\nconst gameUI = new _UI__WEBPACK_IMPORTED_MODULE_1__[\"UI\"]();\r\nconst gamePlay = new _gamePlay__WEBPACK_IMPORTED_MODULE_2__[\"GamePlay\"]();\r\n\r\nconsole.log(deck.shuffle());\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });