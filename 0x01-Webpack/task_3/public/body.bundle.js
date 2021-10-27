(self["webpackChunktask_1"] = self["webpackChunktask_1"] || []).push([["body"],{

/***/ "./modules/body/body.js":
/*!******************************!*\
  !*** ./modules/body/body.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body.css */ "./modules/body/body.css");




jquery__WEBPACK_IMPORTED_MODULE_0___default()('<p>Dashboard data for the students</p>').appendTo("body");
jquery__WEBPACK_IMPORTED_MODULE_0___default()('<button>Click here to get started</button>').appendTo("body");
jquery__WEBPACK_IMPORTED_MODULE_0___default()("<p id='count'></p>").appendTo("body");

jquery__WEBPACK_IMPORTED_MODULE_0___default()('button').on('click', lodash__WEBPACK_IMPORTED_MODULE_1___default().debounce(updateCounter));

let count = 0;
function updateCounter() {
    count += 1;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#count').html(`${count} clicks on the button`);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./modules/body/body.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./modules/body/body.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#count {\r\n    font-weight: bold;\r\n    display: inline;\r\n}", "",{"version":3,"sources":["webpack://./modules/body/body.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,eAAe;AACnB","sourcesContent":["#count {\r\n    font-weight: bold;\r\n    display: inline;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./modules/body/body.css":
/*!*******************************!*\
  !*** ./modules/body/body.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./body.css */ "./node_modules/css-loader/dist/cjs.js!./modules/body/body.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_body_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors","shared"], () => (__webpack_exec__("./modules/body/body.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrXzEvLi9tb2R1bGVzL2JvZHkvYm9keS5qcyIsIndlYnBhY2s6Ly90YXNrXzEvLi9tb2R1bGVzL2JvZHkvYm9keS5jc3MiLCJ3ZWJwYWNrOi8vdGFza18xLy4vbW9kdWxlcy9ib2R5L2JvZHkuY3NzP2QzZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ0E7QUFDSDs7QUFFcEIsNkNBQUM7QUFDRCw2Q0FBQztBQUNELDZDQUFDOztBQUVELDZDQUFDLHVCQUF1QixzREFBVTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0EsSUFBSSw2Q0FBQyxtQkFBbUIsTUFBTTtBQUM5QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLGtEQUFrRCwwQkFBMEIsd0JBQXdCLEtBQUssT0FBTyx3RkFBd0YsWUFBWSxXQUFXLGtDQUFrQywwQkFBMEIsd0JBQXdCLEtBQUssbUJBQW1CO0FBQzNVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQcUQ7QUFDNUYsWUFBeUY7O0FBRXpGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLGtGQUFPOzs7O0FBSXhCLGlFQUFlLHlGQUFjLE1BQU0sRSIsImZpbGUiOiJib2R5LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAkIGZyb20gXCJqcXVlcnlcIjtcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0ICcuL2JvZHkuY3NzJztcclxuXHJcbiQoJzxwPkRhc2hib2FyZCBkYXRhIGZvciB0aGUgc3R1ZGVudHM8L3A+JykuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG4kKCc8YnV0dG9uPkNsaWNrIGhlcmUgdG8gZ2V0IHN0YXJ0ZWQ8L2J1dHRvbj4nKS5hcHBlbmRUbyhcImJvZHlcIik7XHJcbiQoXCI8cCBpZD0nY291bnQnPjwvcD5cIikuYXBwZW5kVG8oXCJib2R5XCIpO1xyXG5cclxuJCgnYnV0dG9uJykub24oJ2NsaWNrJywgXy5kZWJvdW5jZSh1cGRhdGVDb3VudGVyKSk7XHJcblxyXG5sZXQgY291bnQgPSAwO1xyXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyKCkge1xyXG4gICAgY291bnQgKz0gMTtcclxuICAgICQoJyNjb3VudCcpLmh0bWwoYCR7Y291bnR9IGNsaWNrcyBvbiB0aGUgYnV0dG9uYCk7XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNjb3VudCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL21vZHVsZXMvYm9keS9ib2R5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNjb3VudCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JvZHkuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==