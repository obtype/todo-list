/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body{\n    height: 100vh;\n    margin: 0px;\n\n    font-family: 'Young Serif';\n    /* choose a better font after break! */\n\n}\n\ndiv.content{\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    grid-template-rows: 1fr 30px;\n    height: 100%;\n}\n\n.sidebar{\n    background-color: lightblue;\n    padding: 30px;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n}\n\n\n.sidebar .project .title {\n    font-size: 25px;\n}\n\n.sidebar .default .title {\n    font-size: 20px;\n}\n\n\n.sidebar > .title {\n    font-size: 40px;\n    margin-bottom: 50px;\n}\n\n\n.project li {\n    font-size: 20px;\n    list-style-type: none;\n}\n\n.dashboard{\n    background-color: papayawhip;\n    padding: 60px;\n}\n\n.dashboard > .title {\n    font-size: 40px;\n    /* padding-left: 60px; */\n}\n\n.title{\n    font-size: 30px;\n}\n\n.card {\n    background-color: rgb(197, 157, 108);\n    padding: 10px;\n    margin: 10px;\n    border-radius: 5px;\n    font-size: 14px;\n}\n\n\n.card .title{\n    font-size: 16px;\n}\n\n.footer{\n    background-color:rgb(104, 102, 102);\n    grid-column-start: 1;\n    grid-column-end: 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color:#c3f9f1;\n    /* font-family: 'Nabla';  its a sussy font owo*/\n    /* height: 200px;  The height for the footer is actually set from the (grid-template-rows: 1fr 20px;), grid-template-rows property in the parent container. The '20px' is the height*/\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/UI/UI.js":
/*!**********************!*\
  !*** ./src/UI/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUI: () => (/* binding */ createUI)\n/* harmony export */ });\n/* harmony import */ var _intialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./intialize */ \"./src/UI/intialize.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../storage */ \"./src/storage.js\");\n\n\n\n\n\n\n\n// create a function that converts my database array into DOM elements and returns that (attach event listeners and all that jazz so i can actively edit each task from UI as well).\n// then basically create another function that appends those elements to the different project tabs.\n// before that, I need to decide on a way to organize my database array so I can -- done.\n\n\nfunction updateTaskBoard(projectName){\n\n    let Board = document.querySelector('div.card-list');\n    \n    let taskCard = document.createElement('div');\n    let taskTitle = document.createElement('div');\n    let taskPriority = document.createElement('div');\n    let taskDueDate = document.createElement('div');\n    \n    taskCard.classList.add('card');\n    taskTitle.classList.add('title');\n    taskPriority.classList.add('priority');\n    taskDueDate.classList.add('duedate');\n\n    taskCard.appendChild(taskTitle);\n    taskCard.appendChild(taskPriority);\n    taskCard.appendChild(taskDueDate);\n\n    _storage__WEBPACK_IMPORTED_MODULE_1__.arrayRef[projectName].forEach(task => {\n        let card = taskCard.cloneNode(true);\n\n        card.querySelector('.title').textContent = `Title: ${task.getTitle()}`;\n        card.querySelector('.priority').textContent = `Priority: ${task.getPriority()}`;\n        card.querySelector('.duedate').textContent = `Due date: ${task.getDueDate()}`;\n        \n\n\n        Board.appendChild(card);\n\n    });\n}\n\n\n\n\n\nfunction createUI(){\n    (0,_intialize__WEBPACK_IMPORTED_MODULE_0__.initPage)();\n\n    updateTaskBoard('none');\n\n}\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI/UI.js?");

/***/ }),

/***/ "./src/UI/intialize.js":
/*!*****************************!*\
  !*** ./src/UI/intialize.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initPage: () => (/* binding */ initPage)\n/* harmony export */ });\n\n\n\n\n\n\n\nfunction initSidebar(){\n    let sidebar = document.createElement('div');\n    let sidebarTitle = document.createElement('div');\n\n    //start designing the look and structure of the page Pl0x <3\n    let defaultSec= document.createElement('div');\n    let defaultSecTitle = document.createElement('div');\n\n    let projectSec = document.createElement('div');\n    let projectSecTitle = document.createElement('div');\n    let projectList = document.createElement('ul');\n    let projectListItem1 = document.createElement('li');\n    let projectListItem2 = document.createElement('li');\n\n    \n\n    sidebarTitle.textContent = 'Ink Scrolls'\n    projectSecTitle.textContent = 'Your Projects';\n    defaultSecTitle.textContent = 'Default List';\n    projectListItem1.textContent = 'Project 1';\n    projectListItem2.textContent = 'Project 2';\n\n\n    sidebar.classList.add('sidebar');\n    sidebarTitle.classList.add('title');\n    defaultSec.classList.add('default');\n    defaultSecTitle.classList.add('title');\n    projectSec.classList.add('project');\n    projectSecTitle.classList.add('title');\n    \n\n\n    projectSec.appendChild(projectSecTitle);\n    projectSec.appendChild(projectList);\n    \n    projectList.appendChild(projectListItem1);\n    projectList.appendChild(projectListItem2);\n\n    defaultSec.appendChild(defaultSecTitle);\n\n    sidebar.appendChild(sidebarTitle);\n    sidebar.appendChild(defaultSec);    \n    sidebar.appendChild(projectSec);\n\n\n\n    return sidebar;\n\n}\n\nfunction initDashBoard(){\n    let dashboard = document.createElement('div');\n    let title = document.createElement('div');\n    let mainContent = document.createElement('div');\n    let mainContentTitle = document.createElement('div');\n    let mainContentCards = document.createElement('div');\n\n\n    title.classList.add('title');\n    dashboard.classList.add('dashboard');\n    mainContent.classList.add('main');\n    mainContentTitle.classList.add('title');\n    mainContentCards.classList.add('card-list');\n\n\n\n    title.textContent = 'Welcome back, Scribe Master!';\n    mainContentTitle.textContent = \"Your (Project's) notes\";\n\n    mainContent.appendChild(mainContentTitle);\n    mainContent.appendChild(mainContentCards);\n\n    \n    dashboard.appendChild(title);\n    dashboard.appendChild(mainContent);\n    return dashboard;\n\n}\n\nfunction initFooter(){\n    let footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    let center = document.createElement('div');\n    center.classList.add('center');\n    center.textContent = 'An Obtype creation.';\n\n    footer.appendChild(center);\n\n\n    return footer;\n}\n\n\n\n\nfunction initPage(){\n    let content = document.querySelector('div.content');\n    //Create the initalizing function in this file. make all the necessary functions to create the header(maybe), sidebar, footer, etc. Basically all the things that dont really need to be dynamic... ig? lol <3\n\n\n\n    content.appendChild(initSidebar());\n    content.appendChild(initDashBoard());\n    content.appendChild(initFooter());\n\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI/intialize.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal */ \"./src/internal.js\");\n/* harmony import */ var _UI_UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI/UI */ \"./src/UI/UI.js\");\n\n\n\n\n\n_UI_UI__WEBPACK_IMPORTED_MODULE_2__.createUI();\n//TaskManager.createTestTasks(5);\n\nconsole.log(_internal__WEBPACK_IMPORTED_MODULE_1__.arrayRef);\n\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/internal.js":
/*!*************************!*\
  !*** ./src/internal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* reexport safe */ _task__WEBPACK_IMPORTED_MODULE_0__.Task),\n/* harmony export */   TaskManager: () => (/* reexport safe */ _task__WEBPACK_IMPORTED_MODULE_0__.TaskManager),\n/* harmony export */   arrayRef: () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_1__.arrayRef),\n/* harmony export */   storageManager: () => (/* reexport safe */ _storage__WEBPACK_IMPORTED_MODULE_1__.storageManager)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\n//import { main } from \"./UI\";\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/internal.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayRef: () => (/* binding */ arrayRef),\n/* harmony export */   storageManager: () => (/* binding */ storageManager)\n/* harmony export */ });\n/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ \"./src/internal.js\");\n\n\n\n\nlet storageManager = function(){\n    let arraysOfAllTasks = {\n        'unsorted' : [],\n        'none' : [],\n    }; //{\"car\": 1},2,{\"lol\": 4},5\n\n    let sortArray = function(){\n        \n        arraysOfAllTasks['unsorted'].forEach((task) => {\n            arraysOfAllTasks[task.getProject()].push(task);\n        })\n\n        arraysOfAllTasks['unsorted'] = [];\n\n    }\n    \n    let reloadDataFromStorage = function(){\n        if(!localStorage.getItem('database array')){\n            console.log(\"The local storage is emptyyy\")\n            arraysOfAllTasks = {\n                'unsorted' : [],\n                'none' : [],\n                'house chores' : [new _internal__WEBPACK_IMPORTED_MODULE_0__.Task('bobo task')],\n            };\n        }\n        else{\n            arraysOfAllTasks = JSON.parse(localStorage.getItem('database array'));\n\n            for(let tasklist in arraysOfAllTasks){\n                arraysOfAllTasks[tasklist].forEach((task) => {\n                    Object.assign(Object.getPrototypeOf(task), _internal__WEBPACK_IMPORTED_MODULE_0__.Task.prototype);\n                })\n            }\n\n           /*  arraysOfAllTasks.forEach((task) => {\n                Object.assign(Object.getPrototypeOf(task), Task.prototype);\n            }) */\n        }\n    }\n\n    let saveDataToStorage = function(){\n        if(arraysOfAllTasks['unsorted'].length !== 0){\n            \n            console.log('This fucker shouldnt be running fml')\n            //figure out why tf this if statement is running smh.\n            sortArray();\n        }\n\n\n\n        localStorage.setItem('database array', JSON.stringify(arraysOfAllTasks));\n    }\n\n\n    reloadDataFromStorage();\n    //saveDataToStorage();\n    return{\n        arraysOfAllTasks,\n        saveDataToStorage,\n        \n    }\n\n\n}();\n\nlet arrayRef = storageManager.arraysOfAllTasks;\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   TaskManager: () => (/* binding */ TaskManager)\n/* harmony export */ });\n/* harmony import */ var _internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./internal */ \"./src/internal.js\");\n\n\n\n\n/* let Task = function(title, description = null, dueDate = null, priority = null, notes = null){\n\n\tconst setTitle = function(newtitle){\n\t\tthis.title = newtitle;\n\t}\n\n\tconst getTitle = function(){\n\t\treturn this.title;\n\t}\n\n\n\n\treturn{\n\t\ttitle,\n\t\tgetTitle,\n\t\tsetTitle,\n\t\tdescription,\n\t\tdueDate,\n\t\tpriority,\n\t\tnotes\n\t}\n} */\n\nlet Task = function (title, project = null,description = null, dueDate = null, priority = null, notes = null) {\n\n\tthis.title = title;\n\tthis.project = project;\n\tthis.description = description;\n\tthis.dueDate = dueDate;\n\tthis.priority = priority;\n\tthis.notes = notes;\n\n\n};\n\n//The factory function above will create Task type objects when it is called using the 'new' keyword, eg. \n// let test_task = new Task('Cool Title');\n//The below lines are adding all the get and set functions to the prototype of the Task function so that they can be used attached to the stored tasks later on and can be executed when needed. (the functions aren't stored in the .JSON storage so thats why we need to do this. Also, functions should be stored on the prototype anyways to save space lol.)  \n\nTask.prototype.setTitle = function (newTitle) {\n\tthis.title = newTitle;\n\t_internal__WEBPACK_IMPORTED_MODULE_0__.storageManager.saveDataToStorage();\n\tconsole.log(\"saved new title to the database\");\n}\n\nTask.prototype.getTitle = function () {\n\treturn this.title;\n}\n\nTask.prototype.setProject = function (newProject) {\n\tthis.project = newProject;\n\t_internal__WEBPACK_IMPORTED_MODULE_0__.storageManager.saveDataToStorage();\n}\n\nTask.prototype.getProject = function () {\n\treturn this.project;\n}\n\nTask.prototype.setDescription = function (newDescription) {\n\tthis.description = newDescription;\n\t_internal__WEBPACK_IMPORTED_MODULE_0__.storageManager.saveDataToStorage();\n}\n\nTask.prototype.getDescription = function () {\n\treturn this.description;\n}\n\nTask.prototype.setDueDate = function (newDueDate) {\n\tthis.dueDate = newDueDate;\n\t_internal__WEBPACK_IMPORTED_MODULE_0__.storageManager.saveDataToStorage();\n}\n\nTask.prototype.getDueDate = function () {\n\treturn this.dueDate;\n}\n\nTask.prototype.setPriority = function (newPriority) {\n\tthis.priority = newPriority;\n\t_internal__WEBPACK_IMPORTED_MODULE_0__.storageManager.saveDataToStorage();\n}\n\nTask.prototype.getPriority = function () {\n\treturn this.priority;\n}\n\nTask.prototype.setNotes = function (newNotes) {\n\tthis.notes = newNotes;\n\t_internal__WEBPACK_IMPORTED_MODULE_0__.storageManager.saveDataToStorage();\n}\n\nTask.prototype.getNotes = function () {\n\treturn this.notes;\n}\n\n\nlet test1 = new Task('test task');\nconsole.log(test1)\n\nlet TaskManager = function () {\n\n\n\tconst createTestTasks = function (num){\n\t\tfor(let i = 0; i < num; i++){\n\t\t\tcreateTask(`Test task ${i} hoho <3`);\n\t\t}\n\t}\n\n\t\n\tconst createTask = function (title, project ='none') { \n\t\tlet task = new Task(title, project);\n\t\t\n\t\t_internal__WEBPACK_IMPORTED_MODULE_0__.arrayRef['unsorted'].push(task);\n\t\t_internal__WEBPACK_IMPORTED_MODULE_0__.storageManager.saveDataToStorage();\n\n\t\treturn task;\n\t}\n\tconst deleteTask = function (title) {\n\n\t\tconsole.log(\"Before deletion length\", _internal__WEBPACK_IMPORTED_MODULE_0__.arrayRef.length);\n\t\t\n\n\t\tfor(let i = 0; i < _internal__WEBPACK_IMPORTED_MODULE_0__.arrayRef.length; i++){\n\t\t\tif(_internal__WEBPACK_IMPORTED_MODULE_0__.arrayRef[i].title === title){\n\t\t\t\t_internal__WEBPACK_IMPORTED_MODULE_0__.arrayRef.splice(i,1);\n\t\t\t\ti -= 1;\n\t\t\t\tconsole.log(\"item deleted.\");\n\t\t\t}\n\t\t}\n\n\t\tconsole.log(\"After deletion length\", _internal__WEBPACK_IMPORTED_MODULE_0__.arrayRef.length);\n\t\t_internal__WEBPACK_IMPORTED_MODULE_0__.storageManager.saveDataToStorage();\n\t}\n\n\t// Basically a default task is a task without any (parent) project that it belongs to. I guess I shouldnt realy make a different function for a project task; instead, I should just change the function to createTask() and make the default project parameter = 'none'\n\n\t\n\n\n\treturn {\n\t\tcreateTask,\n\t\tdeleteTask,\n\t\tcreateTestTasks,\n\n\n\t}\n}();\n\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;