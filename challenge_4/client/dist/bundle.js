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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/components/App.jsx":
/*!***************************************!*\
  !*** ./client/src/components/App.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _square_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./square.jsx */ \"./client/src/components/square.jsx\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"container\"\n      }, React.createElement(\"h2\", null, \"game board\"), React.createElement(\"div\", {\n        id: \"row5\",\n        className: \"row\"\n      }, React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 0,\n        y: 5\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 1,\n        y: 5\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 2,\n        y: 5\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 3,\n        y: 5\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 4,\n        y: 5\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 5,\n        y: 5\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 6,\n        y: 5\n      })), React.createElement(\"div\", {\n        id: \"row4\",\n        className: \"row\"\n      }, React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 0,\n        y: 4\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 1,\n        y: 4\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 2,\n        y: 4\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 3,\n        y: 4\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 4,\n        y: 4\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 5,\n        y: 4\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 6,\n        y: 4\n      })), React.createElement(\"div\", {\n        id: \"row3\",\n        className: \"row\"\n      }, React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 0,\n        y: 3\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 1,\n        y: 3\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 2,\n        y: 3\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 3,\n        y: 3\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 4,\n        y: 3\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 5,\n        y: 3\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 6,\n        y: 3\n      })), React.createElement(\"div\", {\n        id: \"row2\",\n        className: \"row\"\n      }, React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 0,\n        y: 2\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 1,\n        y: 2\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 2,\n        y: 2\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 3,\n        y: 2\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 4,\n        y: 2\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 5,\n        y: 2\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 6,\n        y: 2\n      })), React.createElement(\"div\", {\n        id: \"row1\",\n        className: \"row\"\n      }, React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 0,\n        y: 1\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 1,\n        y: 1\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 2,\n        y: 1\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 3,\n        y: 1\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 4,\n        y: 1\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 5,\n        y: 1\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 6,\n        y: 1\n      })), React.createElement(\"div\", {\n        id: \"row0\",\n        className: \"row\"\n      }, React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 0,\n        y: 0\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 1,\n        y: 0\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 2,\n        y: 0\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 3,\n        y: 0\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 4,\n        y: 0\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 5,\n        y: 0\n      }), React.createElement(_square_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        x: 6,\n        y: 0\n      })));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9BcHAuanN4P2U1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNxdWFyZSBmcm9tICcuL3NxdWFyZS5qc3gnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICA8aDI+Z2FtZSBib2FyZDwvaDI+XHJcbiAgICAgICAgPGRpdiBpZD0ncm93NScgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXswfSB5PXs1fSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXsxfSB5PXs1fSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXsyfSB5PXs1fSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXszfSB5PXs1fSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXs0fSB5PXs1fSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXs1fSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXs2fSB5PXs1fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9J3JvdzQnIGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17MH0geT17NH0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17MX0geT17NH0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17Mn0geT17NH0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17M30geT17NH0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17NH0geT17NH0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17NX0geT17NH0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17Nn0geT17NH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPSdyb3czJyBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezB9IHk9ezN9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezF9IHk9ezN9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezJ9IHk9ezN9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezN9IHk9ezN9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezR9IHk9ezN9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezV9IHk9ezN9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezZ9IHk9ezN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD0ncm93MicgY2xhc3NOYW1lPSdyb3cnPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXswfSB5PXsyfSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXsxfSB5PXsyfSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXsyfSB5PXsyfSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXszfSB5PXsyfSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXs0fSB5PXsyfSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXsyfSAvPlxyXG4gICAgICAgICAgPFNxdWFyZSB4PXs2fSB5PXsyfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9J3JvdzEnIGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17MH0geT17MX0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17MX0geT17MX0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17Mn0geT17MX0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17M30geT17MX0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17NH0geT17MX0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17NX0geT17MX0gLz5cclxuICAgICAgICAgIDxTcXVhcmUgeD17Nn0geT17MX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPSdyb3cwJyBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezB9IHk9ezB9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezF9IHk9ezB9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezJ9IHk9ezB9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezN9IHk9ezB9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezR9IHk9ezB9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezV9IHk9ezB9IC8+XHJcbiAgICAgICAgICA8U3F1YXJlIHg9ezZ9IHk9ezB9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7Ozs7QUFwRUE7QUFDQTtBQXNFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/App.jsx\n");

/***/ }),

/***/ "./client/src/components/square.jsx":
/*!******************************************!*\
  !*** ./client/src/components/square.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Square =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(Square, _React$Component);\n\n  function Square(props) {\n    var _this;\n\n    _classCallCheck(this, Square);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Square).call(this, props));\n    _this.state = {\n      red: 0,\n      yellow: 0\n    };\n    return _this;\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"square\"\n      }, \"[  ]\");\n    }\n  }]);\n\n  return Square;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Square);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvc3F1YXJlLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9zcXVhcmUuanN4P2RkOTQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU3F1YXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcmVkOiAwLFxyXG4gICAgICB5ZWxsb3c6IDBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcXVhcmUnPlxyXG4gICAgICAgIFsgIF1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcXVhcmU7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7Ozs7QUFmQTtBQUNBO0FBaUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/components/square.jsx\n");

/***/ }),

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_App_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/App.jsx */ \"./client/src/components/App.jsx\");\n\nReactDOM.render(React.createElement(_components_App_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), document.getElementById('root'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCc7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoIDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcblxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });