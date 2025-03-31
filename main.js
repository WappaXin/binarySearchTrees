/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/buildTree.js":
/*!**************************!*\
  !*** ./src/buildTree.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildTree: () => (/* binding */ buildTree)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n\n\nfunction buildTree(array, start = 0, end = array.length - 1 ){\n    if(start > end) return null;\n    let midPoint = start + Math.floor((end - start)/2);\n    console.log(array[midPoint]);\n    \n    let root = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node(array[midPoint]);\n\n    root.left = buildTree(array , start , midPoint - 1);\n    root.right = buildTree(array, midPoint + 1 , end);\n\n    return root;\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYnVpbGRUcmVlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlDOztBQUUxQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDBDQUFJOztBQUV2QjtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2J1aWxkVHJlZS5qcz81NmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5vZGUgfSBmcm9tIFwiLi9ub2RlLmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZFRyZWUoYXJyYXksIHN0YXJ0ID0gMCwgZW5kID0gYXJyYXkubGVuZ3RoIC0gMSApe1xuICAgIGlmKHN0YXJ0ID4gZW5kKSByZXR1cm4gbnVsbDtcbiAgICBsZXQgbWlkUG9pbnQgPSBzdGFydCArIE1hdGguZmxvb3IoKGVuZCAtIHN0YXJ0KS8yKTtcbiAgICBjb25zb2xlLmxvZyhhcnJheVttaWRQb2ludF0pO1xuICAgIFxuICAgIGxldCByb290ID0gbmV3IE5vZGUoYXJyYXlbbWlkUG9pbnRdKTtcblxuICAgIHJvb3QubGVmdCA9IGJ1aWxkVHJlZShhcnJheSAsIHN0YXJ0ICwgbWlkUG9pbnQgLSAxKTtcbiAgICByb290LnJpZ2h0ID0gYnVpbGRUcmVlKGFycmF5LCBtaWRQb2ludCArIDEgLCBlbmQpO1xuXG4gICAgcmV0dXJuIHJvb3Q7XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/buildTree.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree */ \"./src/tree.js\");\n/* harmony import */ var _prettyPrint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prettyPrint */ \"./src/prettyPrint.js\");\n\n\n\nconst array = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];\nconst tree = new _tree__WEBPACK_IMPORTED_MODULE_0__.Tree(array);\n\nconsole.log((0,_prettyPrint__WEBPACK_IMPORTED_MODULE_1__.prettyPrint)(tree.root));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTJCO0FBQ2lCOztBQUU1QztBQUNBLGlCQUFpQix1Q0FBSTs7QUFFckIsWUFBWSx5REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VHJlZX0gZnJvbSAnLi90cmVlJ1xuaW1wb3J0IHsgcHJldHR5UHJpbnQgfSBmcm9tICcuL3ByZXR0eVByaW50JztcblxuY29uc3QgYXJyYXkgPSBbMSwgNywgNCwgMjMsIDgsIDksIDQsIDMsIDUsIDcsIDksIDY3LCA2MzQ1LCAzMjRdO1xuY29uc3QgdHJlZSA9IG5ldyBUcmVlKGFycmF5KTtcblxuY29uc29sZS5sb2cocHJldHR5UHJpbnQodHJlZS5yb290KSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sortAndDeleteDuplicatesOf: () => (/* binding */ sortAndDeleteDuplicatesOf)\n/* harmony export */ });\nfunction sortAndDeleteDuplicatesOf(array){\n    let mergedArray = mergeSort(array);\n    console.log(mergedArray);\n    return mergedArray;\n} \n\nfunction mergeSort(unsortedArray){\n    const low = 1;\n    const high = unsortedArray.length;\n\n    if(low === high) return unsortedArray;\n\n    let midpoint;\n    if(high%2 === 0){midpoint = high/2;}\n    if(high%2 === 1){midpoint = Math.floor(high/2);}\n\n    const leftArray = mergeSort(unsortedArray.slice(0,midpoint));\n    const rightArray = mergeSort(unsortedArray.slice(midpoint));\n\n    const mergedArray = merge(leftArray , rightArray);\n\n    return mergedArray;\n}\n\nfunction merge(arrayA, arrayB){\n    let i = 0;\n    let j = 0;\n    let mergedArray = [];\n    let itemsInMergedArray = arrayA.length + arrayB.length;\n\n    for(let a = 0 ; a < itemsInMergedArray ; a++){\n\n        if(i === arrayA.length){\n            for(let b = j ; b < arrayB.length ; b++){\n                mergedArray.push(arrayB[b]);\n            }\n        }else if(j === arrayB.length){\n            for(let b = i ; b < arrayA.length ; b++){\n                mergedArray.push(arrayA[b]);\n            }\n        }\n\n        if(mergedArray.length === itemsInMergedArray) return mergedArray;\n\n        if(arrayA[i] < arrayB[j]){\n            mergedArray.push(arrayA[i++]);\n        }else if(arrayA[i] > arrayB[j]){\n            mergedArray.push(arrayB[j++]);\n        }else if(arrayA[i] === arrayB[j]){\n            // only push one if duplicates exist\n            mergedArray.push(arrayA[i++]);\n            j++;\n            itemsInMergedArray--;\n        }\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVyZ2VTb3J0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixxQkFBcUI7O0FBRXJCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQix5QkFBeUI7O0FBRTdDO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QixvQkFBb0I7QUFDaEQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWVyZ2VTb3J0LmpzP2Q0ZTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNvcnRBbmREZWxldGVEdXBsaWNhdGVzT2YoYXJyYXkpe1xuICAgIGxldCBtZXJnZWRBcnJheSA9IG1lcmdlU29ydChhcnJheSk7XG4gICAgY29uc29sZS5sb2cobWVyZ2VkQXJyYXkpO1xuICAgIHJldHVybiBtZXJnZWRBcnJheTtcbn0gXG5cbmZ1bmN0aW9uIG1lcmdlU29ydCh1bnNvcnRlZEFycmF5KXtcbiAgICBjb25zdCBsb3cgPSAxO1xuICAgIGNvbnN0IGhpZ2ggPSB1bnNvcnRlZEFycmF5Lmxlbmd0aDtcblxuICAgIGlmKGxvdyA9PT0gaGlnaCkgcmV0dXJuIHVuc29ydGVkQXJyYXk7XG5cbiAgICBsZXQgbWlkcG9pbnQ7XG4gICAgaWYoaGlnaCUyID09PSAwKXttaWRwb2ludCA9IGhpZ2gvMjt9XG4gICAgaWYoaGlnaCUyID09PSAxKXttaWRwb2ludCA9IE1hdGguZmxvb3IoaGlnaC8yKTt9XG5cbiAgICBjb25zdCBsZWZ0QXJyYXkgPSBtZXJnZVNvcnQodW5zb3J0ZWRBcnJheS5zbGljZSgwLG1pZHBvaW50KSk7XG4gICAgY29uc3QgcmlnaHRBcnJheSA9IG1lcmdlU29ydCh1bnNvcnRlZEFycmF5LnNsaWNlKG1pZHBvaW50KSk7XG5cbiAgICBjb25zdCBtZXJnZWRBcnJheSA9IG1lcmdlKGxlZnRBcnJheSAsIHJpZ2h0QXJyYXkpO1xuXG4gICAgcmV0dXJuIG1lcmdlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBtZXJnZShhcnJheUEsIGFycmF5Qil7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBqID0gMDtcbiAgICBsZXQgbWVyZ2VkQXJyYXkgPSBbXTtcbiAgICBsZXQgaXRlbXNJbk1lcmdlZEFycmF5ID0gYXJyYXlBLmxlbmd0aCArIGFycmF5Qi5sZW5ndGg7XG5cbiAgICBmb3IobGV0IGEgPSAwIDsgYSA8IGl0ZW1zSW5NZXJnZWRBcnJheSA7IGErKyl7XG5cbiAgICAgICAgaWYoaSA9PT0gYXJyYXlBLmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IobGV0IGIgPSBqIDsgYiA8IGFycmF5Qi5sZW5ndGggOyBiKyspe1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goYXJyYXlCW2JdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2UgaWYoaiA9PT0gYXJyYXlCLmxlbmd0aCl7XG4gICAgICAgICAgICBmb3IobGV0IGIgPSBpIDsgYiA8IGFycmF5QS5sZW5ndGggOyBiKyspe1xuICAgICAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goYXJyYXlBW2JdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG1lcmdlZEFycmF5Lmxlbmd0aCA9PT0gaXRlbXNJbk1lcmdlZEFycmF5KSByZXR1cm4gbWVyZ2VkQXJyYXk7XG5cbiAgICAgICAgaWYoYXJyYXlBW2ldIDwgYXJyYXlCW2pdKXtcbiAgICAgICAgICAgIG1lcmdlZEFycmF5LnB1c2goYXJyYXlBW2krK10pO1xuICAgICAgICB9ZWxzZSBpZihhcnJheUFbaV0gPiBhcnJheUJbal0pe1xuICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheUJbaisrXSk7XG4gICAgICAgIH1lbHNlIGlmKGFycmF5QVtpXSA9PT0gYXJyYXlCW2pdKXtcbiAgICAgICAgICAgIC8vIG9ubHkgcHVzaCBvbmUgaWYgZHVwbGljYXRlcyBleGlzdFxuICAgICAgICAgICAgbWVyZ2VkQXJyYXkucHVzaChhcnJheUFbaSsrXSk7XG4gICAgICAgICAgICBqKys7XG4gICAgICAgICAgICBpdGVtc0luTWVyZ2VkQXJyYXktLTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/mergeSort.js\n");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Node: () => (/* binding */ Node)\n/* harmony export */ });\nclass Node{\n    constructor(data){\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbm9kZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbm9kZS5qcz8xMWU3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOb2Rle1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpe1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLmxlZnQgPSBudWxsO1xuICAgICAgICB0aGlzLnJpZ2h0ID0gbnVsbDtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/node.js\n");

/***/ }),

/***/ "./src/prettyPrint.js":
/*!****************************!*\
  !*** ./src/prettyPrint.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prettyPrint: () => (/* binding */ prettyPrint)\n/* harmony export */ });\nconst prettyPrint = (node, prefix = \"\", isLeft = true) => {\n    if (node === null) {\n      return;\n    }\n    if (node.right !== null) {\n      prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n    }\n    console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n    if (node.left !== null) {\n      prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n    }\n  };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJldHR5UHJpbnQuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsT0FBTyxFQUFFLHlCQUF5QjtBQUNuRTtBQUNBLG1CQUFtQixPQUFPLEVBQUUseUJBQXlCLEVBQUUsVUFBVTtBQUNqRTtBQUNBLGdDQUFnQyxPQUFPLEVBQUUseUJBQXlCO0FBQ2xFO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJldHR5UHJpbnQuanM/Y2IzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJldHR5UHJpbnQgPSAobm9kZSwgcHJlZml4ID0gXCJcIiwgaXNMZWZ0ID0gdHJ1ZSkgPT4ge1xuICAgIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBwcmV0dHlQcmludChub2RlLnJpZ2h0LCBgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUgiAgIFwiIDogXCIgICAgXCJ9YCwgZmFsc2UpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgJHtwcmVmaXh9JHtpc0xlZnQgPyBcIuKUlOKUgOKUgCBcIiA6IFwi4pSM4pSA4pSAIFwifSR7bm9kZS5kYXRhfWApO1xuICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgIHByZXR0eVByaW50KG5vZGUubGVmdCwgYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCIgICAgXCIgOiBcIuKUgiAgIFwifWAsIHRydWUpO1xuICAgIH1cbiAgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/prettyPrint.js\n");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tree: () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _buildTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildTree */ \"./src/buildTree.js\");\n/* harmony import */ var _mergeSort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mergeSort */ \"./src/mergeSort.js\");\n\n\n\nclass Tree{\n    constructor(array){\n        this.root = (0,_buildTree__WEBPACK_IMPORTED_MODULE_0__.buildTree)((0,_mergeSort__WEBPACK_IMPORTED_MODULE_1__.sortAndDeleteDuplicatesOf)(array));\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDZ0I7O0FBRWpEO0FBQ1A7QUFDQSxvQkFBb0IscURBQVMsQ0FBQyxxRUFBeUI7QUFDdkQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy90cmVlLmpzPzk3NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnVpbGRUcmVlIH0gZnJvbSBcIi4vYnVpbGRUcmVlXCI7XG5pbXBvcnQgeyBzb3J0QW5kRGVsZXRlRHVwbGljYXRlc09mIH0gZnJvbSBcIi4vbWVyZ2VTb3J0XCI7XG5cbmV4cG9ydCBjbGFzcyBUcmVle1xuICAgIGNvbnN0cnVjdG9yKGFycmF5KXtcbiAgICAgICAgdGhpcy5yb290ID0gYnVpbGRUcmVlKHNvcnRBbmREZWxldGVEdXBsaWNhdGVzT2YoYXJyYXkpKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tree.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;