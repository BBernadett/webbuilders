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

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./styles.css\");\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', () => {\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.initForm)();\r\n})\n\n//# sourceURL=webpack://webuilders/./app.js?");

/***/ }),

/***/ "./cards.js":
/*!******************!*\
  !*** ./cards.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCard: () => (/* binding */ addCard)\n/* harmony export */ });\n/* harmony import */ var _src_icons_respo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/icons/respo.png */ \"./src/icons/respo.png\");\n/* harmony import */ var _src_icons_clock_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/icons/clock.png */ \"./src/icons/clock.png\");\n/* harmony import */ var _src_icons_modern_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/icons/modern.png */ \"./src/icons/modern.png\");\n/* harmony import */ var _src_icons_clear_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/icons/clear.png */ \"./src/icons/clear.png\");\n/* harmony import */ var _src_mockups_resp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/mockups/resp.png */ \"./src/mockups/resp.png\");\n/* harmony import */ var _src_mockups_school_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/mockups/school.png */ \"./src/mockups/school.png\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst addCard = () => {\r\n    intro();\r\n    offer();\r\n    jobs();\r\n}\r\n\r\nconst intro = () => {\r\n    const introBox = document.getElementById('secIntro');\r\n    introBox.insertAdjacentHTML('afterbegin', `\r\n        <div >\r\n            <h1>Nincs még weboldalad vagy elégedetlen vagy a jelenlegivel?</h1>\r\n            <h3>Szeretnél egyedi, bevételnövelő, modern weboldalt?</h3>\r\n            <h4>Kérj árajánlatot és elkészítjük számodra azt a weboldalt, amellyel igazán sikeresen fogod tudni értékesíteni vállalkozásod \r\n            szolgáltatásait, termékeit.</h4>\r\n        \r\n        <button id=\"bid\" >Megvalósítom az ötletem</button>  \r\n        </div>\r\n        \r\n    `)\r\n}\r\n\r\nconst offer= ()=>{\r\n    const offerBox = document.getElementById('offer');\r\n    \r\n    offerBox.insertAdjacentHTML(`afterbegin`, `\r\n    <div class=\"offerContainer\">\r\n    <h3 class=\"offerTitle\">Egy hatékony weboldal...</h3>\r\n    <div class=\"cardBox\">\r\n        <div class=\"cards\">\r\n        <h3>Reszponzív</h3>\r\n        <img src=\"${_src_icons_respo_png__WEBPACK_IMPORTED_MODULE_0__}\" class=\"cardPics\">\r\n            <p>Optimális megjelenést biztosít a legkülönfélébb eszközökön. pl.: laptop, mobil, asztali számítógép, tablet</p>\r\n        </div>\r\n        <div class=\"cards\">\r\n            <h3>Gyors</h3>\r\n            <img src=\"${_src_icons_clock_png__WEBPACK_IMPORTED_MODULE_1__}\" class=\"cardPics\">\r\n            <p>A maximális felhasználói élmény érdekében villámgyors.</p>\r\n        </div>\r\n    </div>\r\n    <div>\r\n    <img src=\"${_src_mockups_resp_png__WEBPACK_IMPORTED_MODULE_4__}\" class=\"respoPhone\">\r\n    </div>\r\n    <div class=\"cardBox\">\r\n        <div class=\"cards\">\r\n            <h3>Átlátható</h3>\r\n            <img src=\"${_src_icons_clear_png__WEBPACK_IMPORTED_MODULE_3__}\" class=\"cardPics\">\r\n            <p>Struktúrált, jól átlátható, könnyen kezelhető a célközönség számára.</p>\r\n        </div>\r\n        <div class=\"cards\">\r\n            <h3>Modern</h3>\r\n            <img src=\"${_src_icons_modern_png__WEBPACK_IMPORTED_MODULE_2__}\" class=\"cardPics\">\r\n            <p>Interakcióra ösztönző, letisztult, modern megjelenés és felépítés.</p>\r\n        </div>\r\n    </div>\r\n    </div>\r\n    `)\r\n}\r\n\r\nconst jobs = () => {\r\n    const jobs = document.getElementById('jobs');\r\n    jobs.insertAdjacentHTML('afterbegin', `\r\n    <div>\r\n        <h3 class=\"jobsText\">Munkáink</h3>\r\n        <p class=\"jobsText\">Lorem Ipsum is simply dummy text of the printing and\r\n        typesetting industry. Lorem Ipsum has been the\r\n        industry's standard dummy text ever since the 1500s,\r\n        when an unknown printer took a galley of type and\r\n        scrambled it to make a type specimen book. </p>\r\n    </div>\r\n    <div class=\"mockupBox\">\r\n    <img src=\"${_src_mockups_school_png__WEBPACK_IMPORTED_MODULE_5__}\" class=\"mockups\">\r\n    </div>\r\n    `)\r\n}\r\n\r\nconst price = () => {\r\n    const price = document.getElementById('price');\r\n    price.insertAdjacentHTML('afterbegin', `\r\n    <zizi-card id=\"z3\">\r\n        <div class=\"firstCard\">\r\n            <h1>Árak</h1>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license \r\n        \r\n        (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z\"/></svg>\r\n        </div>\r\n        <div class=\"card-content\">            \r\n            <div>\r\n                <p>\r\n                    Lorem Ipsum is simply dummy text of the printing and\r\n                    typesetting industry. Lorem Ipsum has been the\r\n                    industry's standard dummy text ever since the 1500s,\r\n                    when an unknown printer took a galley of type and\r\n                    scrambled it to make a type specimen book. It has\r\n                    survived not only five centuries, but also the leap into\r\n                    electronic typesetting, remaining essentially unchanged.\r\n                    It was popularised in the 1960s with the release of\r\n                    Letraset sheets containing Lorem Ipsum passages, and\r\n                    more recently with desktop publishing software like\r\n                    Aldus PageMaker including versions of Lorem Ipsum.\r\n                </p>\r\n            </div>            \r\n        </div>\r\n    </zizi>\r\n    `)\r\n}\r\n\r\nconst contact = () => {\r\n    const contact = document.getElementById('contact')\r\n    contact.insertAdjacentHTML('afterbegin', `\r\n    <zizi-card id=\"z4\">\r\n        <div class=\"firstCard\">\r\n            <h1>Kapcsolat</h1>\r\n            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license \r\n        \r\n            (Commercial License) Copyright 2023 Fonticons, Inc. --><path d=\"M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H336c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32s-32 14.3-32 32v51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V448c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H176c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z\"/></svg>\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <div>\r\n                <p>\r\n                    Lorem Ipsum is simply dummy text of the printing and\r\n                    typesetting industry. Lorem Ipsum has been the\r\n                    industry's standard dummy text ever since the 1500s,\r\n                    when an unknown printer took a galley of type and\r\n                    scrambled it to make a type specimen book. It has\r\n                    survived not only five centuries, but also the leap into\r\n                    electronic typesetting, remaining essentially unchanged.\r\n                    It was popularised in the 1960s with the release of\r\n                    Letraset sheets containing Lorem Ipsum passages, and\r\n                    more recently with desktop publishing software like\r\n                    Aldus PageMaker including versions of Lorem Ipsum.\r\n                </p>\r\n            </div> \r\n        </div>\r\n    </zizi-card>\r\n    `)\r\n}\n\n//# sourceURL=webpack://webuilders/./cards.js?");

/***/ }),

/***/ "./events.js":
/*!*******************!*\
  !*** ./events.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   events: () => (/* binding */ events)\n/* harmony export */ });\nconst events =()=>{\r\n    navActions();\r\n    }\r\n\r\n    const navActions = () =>{\r\n        const burger = document.getElementById('burger');\r\n        const removeNav = document.getElementById('remove-nav');\r\n        const nav = document.getElementById('nav');\r\n        burgerShow(burger, removeNav, nav);\r\n        BurgerRemove(burger, removeNav);\r\n    }\r\n\r\n    const burgerShow = (burger, removeNav, nav)=>{\r\n        burger.addEventListener('click',()=>{\r\n            if(burger.style.display = 'block'){\r\n                burger.style.display = 'none';\r\n                removeNav.style.display = 'block';\r\n                nav.classList.toggle('menu-active');\r\n                }else{\r\n                burger.style.display = 'block';\r\n                removeNav.style.display = 'none';\r\n                \r\n            }\r\n        } )}\r\n\r\n    \r\n    const BurgerRemove =(burger, removeNav) =>{\r\n        removeNav.addEventListener('click',()=>{\r\n            if(removeNav.style.display = 'block'){\r\n                removeNav.style.display = 'none';\r\n                burger.style.display = 'block';\r\n                nav.classList.toggle('menu-active');\r\n            }else{\r\n                removeNav.style.display = 'block';\r\n                burger.style.display = 'none';\r\n            }\r\n        })}\r\n    \r\n    \r\n    \r\n    \n\n//# sourceURL=webpack://webuilders/./events.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initForm: () => (/* binding */ initForm)\n/* harmony export */ });\n/* harmony import */ var _cards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.js */ \"./cards.js\");\n/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./events.js */ \"./events.js\");\n\r\n\r\n\r\nconst initForm = () => {\r\n    (0,_cards_js__WEBPACK_IMPORTED_MODULE_0__.addCard)();\r\n    (0,_events_js__WEBPACK_IMPORTED_MODULE_1__.events)();\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://webuilders/./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles.css ***!
  \**********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! bg.png */ \"./bg.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n    box-sizing: border-box;\\r\\n}\\r\\n\\r\\n:root {\\r\\n    --frst-color: #2c2e2f;\\r\\n    --sec-color: #3c4043;\\r\\n    --thr-color: #8495a6;\\r\\n    --frth-color: #c2f8cb;\\r\\n    --ffth-color: #eaefef;\\r\\n    --shadow-color: rgba(37, 43, 81, 0.7624183462447479);\\r\\n}\\r\\n\\r\\nbody {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    background: #b0b0b0;\\r\\n    font-family: 'Roboto', sans-serif;\\r\\n    font-family: 'Roboto Condensed', sans-serif;\\r\\n}\\r\\n\\r\\nheader {\\r\\n    background: rgb(12, 14, 27);\\r\\n    background: linear-gradient(90deg, rgba(12, 14, 27, 1) 0%, rgba(37, 43, 81, 0.7624183462447479) 100%);\\r\\n    color: var(--sec-color);\\r\\n    position: fixed;\\r\\n    width: 100%;\\r\\n    top: 0;\\r\\n    height: 5rem;\\r\\n    position: relative;\\r\\n    margin-bottom: 1rem;\\r\\n    display: flex;\\r\\n    height: 4.5rem;\\r\\n    justify-content: space-between;\\r\\n    margin-bottom: 0;\\r\\n}\\r\\n\\r\\n#logo{\\r\\n    z-index: 2;\\r\\n    position: absolute;\\r\\n    left: 1rem;\\r\\n    top: 1.5rem;\\r\\n}\\r\\n#burger, #remove-nav {\\r\\n    color: var(--frth-color);\\r\\n    font-size: 2.5rem;\\r\\n    z-index: 2;\\r\\n    position: absolute;\\r\\n    right: 1rem;\\r\\n    top: 1rem;\\r\\n    animation: fadeIn 2s ease-in-out;\\r\\n}\\r\\n\\r\\n#remove-nav{\\r\\n    display: none;\\r\\n    top: 2.5rem;\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\nnav {\\r\\n   opacity: 0.9;\\r\\n    position: absolute;\\r\\n    background: #222;\\r\\n    transition: transform 550ms ease-in-out;\\r\\n    transform: translateY(-60rem);\\r\\n    justify-content: space-around;\\r\\n    align-items: center;\\r\\n    z-index: 1;\\r\\n    box-shadow: 0px 1px 2px rgba(155, 196, 186, 0.5), 0px 2px 4px rgba(155, 196, 186, 0.5), 0px 4px 8px rgba(155, 196, 186, 0.5), 0px 8px 16px rgba(6, 216, 248, 0.5);\\r\\n    top: 4.35rem;\\r\\n    width: 100%;   \\r\\n}\\r\\n\\r\\n\\r\\n.menu-active{\\r\\n    transform: translateY(0);\\r\\n}\\r\\n\\r\\nul {\\r\\n    list-style-type: none;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\npadding: 0;\\r\\n}\\r\\n\\r\\nnav>ul>li {\\r\\n    \\r\\n    border-radius: 5px;\\r\\n    transition: all ease 0.2s;\\r\\n    margin-bottom: 0.3rem;\\r\\n    width: 6rem;\\r\\n}\\r\\n\\r\\nul>li>a {\\r\\n    text-decoration: none;\\r\\n    margin-left: 0.4rem;\\r\\n    line-height: 43px;\\r\\n    font-size: 1.4rem;\\r\\n    font-weight: bold;\\r\\n    color: var(--frth-color);\\r\\n    border-radius: 5px;\\r\\n    \\r\\n}\\r\\n\\r\\nmain {\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    flex-wrap: wrap;\\r\\n    justify-content: space-around;\\r\\n}\\r\\n\\r\\n@keyframes fadeIn {\\r\\n    0% {\\r\\n        opacity: 0;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n        opacity: 1;\\r\\n    }\\r\\n}\\r\\n\\r\\n#secIntro {\\r\\n    background: linear-gradient(90deg, rgba(12, 14, 27, 1) 0%, rgba(37, 43, 81, 0.7624183462447479) 100%);\\r\\n    padding: 2rem;\\r\\n}\\r\\n#secIntro::after {\\r\\n    content: \\\" \\\";\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    width: 100%;\\r\\n    height: 100vw;\\r\\n    opacity: .4;\\r\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n#bid{\\r\\n    display: block;\\r\\n    margin: 0 auto;\\r\\n    background-color: transparent;\\r\\n    border: #eaefef;\\r\\n    padding: 0.5rem;\\r\\n    border-radius: 0.3rem;\\r\\n    border: 1px solid var(--frth-color);\\r\\n    color: var(--frth-color);\\r\\n    font-weight: bold;\\r\\n    box-shadow: inset 0px 2px 5px 1px var(--frth-color);\\r\\n\\r\\n}\\r\\n#bid:hover{\\r\\n    transform: translateY(3px);\\r\\n    box-shadow: inset 0px 2px 5px 1px var(--ffth-color);\\r\\n    color: var(--ffth-color);\\r\\n    border: 1px solid var(--ffth-color);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    text-align: center;\\r\\n    font-size: 2rem;\\r\\n    text-shadow:\\r\\n        1px 1px 1px #919191,\\r\\n        1px 2px 1px #919191,\\r\\n        1px 3px 1px #919191,\\r\\n        1px 18px 6px rgba(16, 16, 16, 0.4),\\r\\n        1px 22px 10px rgba(16, 16, 16, 0.2),\\r\\n        1px 30px 60px rgba(16, 16, 16, 0.4);\\r\\n    color: var(--ffth-color);\\r\\n}\\r\\nh3{\\r\\n    margin: 0;\\r\\n}\\r\\nh3, h4{\\r\\n    color: var(--ffth-color);\\r\\n}\\r\\nh4{\\r\\n    font-size: 1rem;\\r\\n    font-weight: 400;\\r\\n}\\r\\n\\r\\np {\\r\\n    margin: 0;\\r\\n    color: #eaefef;\\r\\n    letter-spacing: 0.03rem;\\r\\n}\\r\\n img{\\r\\n    margin: 1rem auto;\\r\\n    height: 1.7rem;\\r\\n }\\r\\n\\r\\n.respoPhone{\\r\\n    height: 20rem;\\r\\nmargin: 0 auto;\\r\\ndisplay: block;\\r\\n}\\r\\n\\r\\n@keyframes rotate {\\r\\n    0% {\\r\\n        transform: rotate(0);\\r\\n        width: 1.5rem;\\r\\n    }\\r\\n\\r\\n    50% {\\r\\n        transform: rotate(180deg);\\r\\n        width: 2.5rem;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n        transform: rotate(360deg);\\r\\n        width: 1.5rem;\\r\\n    }\\r\\n}\\r\\n\\r\\nsvg {\\r\\n    width: 2rem;\\r\\n    display: block;\\r\\n    margin: 0 auto;\\r\\n    animation: rotate 6s infinite;\\r\\n    filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4));\\r\\n}\\r\\n\\r\\npath {\\r\\n    fill: #60c1d3;\\r\\n}\\r\\n\\r\\n.hideCard {\\r\\n    animation: fadeOut 2.7s ease;\\r\\n    animation-iteration-count: 1\\r\\n}\\r\\n\\r\\n@keyframes fadeOut {\\r\\n    0% {\\r\\n        opacity: 1;\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n        opacity: 0;\\r\\n    }\\r\\n}\\r\\n\\r\\n@keyframes rot {\\r\\n    0% {\\r\\n        transform: rotateY(0);\\r\\n    }\\r\\n\\r\\n    100% {\\r\\n        transform: rotateY(180deg);\\r\\n    }\\r\\n}\\r\\n\\r\\n.flipCard {\\r\\n    animation: rot 4s ease-in-out;\\r\\n}\\r\\n\\r\\n.resPic{\\r\\n    width: 200px;\\r\\n    height: 400px;\\r\\n}\\r\\n\\r\\n#offer{\\r\\n    background: #a5a8ac;\\r\\n}\\r\\n.offerContainer{\\r\\n    margin: 1rem;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: space-around;\\r\\n}\\r\\n.offerTitle{\\r\\n    text-align: center;\\r\\n    color: #272a3d;\\r\\n}\\r\\n\\r\\n.cardBox{\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n.cards{\\r\\n    width: 70%;\\r\\n    padding: 2rem;\\r\\n    box-shadow: inset 1px 3px 5px var(--frth-color);\\r\\n    margin: 1rem auto;\\r\\n    background: #454963;\\r\\n    text-align: center;\\r\\n    height: 13rem;\\r\\n}\\r\\n#jobs{\\r\\n    background: var(--frth-color);\\r\\npadding: 1rem;\\r\\n}\\r\\n.jobsText{\\r\\n    color: var(--shadow-color);\\r\\n}\\r\\n.mockupBox{\\r\\n    display: flex;\\r\\n}\\r\\n.mockups{\\r\\n    height: 16rem;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webuilders/./styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webuilders/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://webuilders/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webuilders/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !./node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!./node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webuilders/./styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webuilders/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webuilders/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webuilders/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webuilders/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webuilders/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webuilders/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./bg.png":
/*!****************!*\
  !*** ./bg.png ***!
  \****************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4c6b50db3d6acdb35303.png\";\n\n//# sourceURL=webpack://webuilders/./bg.png?");

/***/ }),

/***/ "./src/icons/clear.png":
/*!*****************************!*\
  !*** ./src/icons/clear.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5f36076673e75ac6b485.png\";\n\n//# sourceURL=webpack://webuilders/./src/icons/clear.png?");

/***/ }),

/***/ "./src/icons/clock.png":
/*!*****************************!*\
  !*** ./src/icons/clock.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a997b250565fa4f144d9.png\";\n\n//# sourceURL=webpack://webuilders/./src/icons/clock.png?");

/***/ }),

/***/ "./src/icons/modern.png":
/*!******************************!*\
  !*** ./src/icons/modern.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"93a0b024429a4994478c.png\";\n\n//# sourceURL=webpack://webuilders/./src/icons/modern.png?");

/***/ }),

/***/ "./src/icons/respo.png":
/*!*****************************!*\
  !*** ./src/icons/respo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fa8a9eb740a339338aa7.png\";\n\n//# sourceURL=webpack://webuilders/./src/icons/respo.png?");

/***/ }),

/***/ "./src/mockups/resp.png":
/*!******************************!*\
  !*** ./src/mockups/resp.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"88abd23c9fd240f8f5b0.png\";\n\n//# sourceURL=webpack://webuilders/./src/mockups/resp.png?");

/***/ }),

/***/ "./src/mockups/school.png":
/*!********************************!*\
  !*** ./src/mockups/school.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b9b3ac71a425e34fa8ed.png\";\n\n//# sourceURL=webpack://webuilders/./src/mockups/school.png?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;