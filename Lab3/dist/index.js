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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html, body {\n  padding: 0;\n  margin: 0;\n  font-family: 'Open Sans', sans-serif;\n  color: white; }\n\nbody {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #1c4e81;\n  background: linear-gradient(38deg, #1c4e81 0%, #4473a2 100%); }\n\n#mainWrapper {\n  width: 1366px;\n  height: 800px;\n  background-color: #4473A2;\n  display: flex; }\n\n#leftBar {\n  background-color: #1C4E81;\n  width: 380px;\n  height: 100%;\n  padding: 32px;\n  box-sizing: border-box;\n  color: white;\n  display: flex;\n  flex-flow: column; }\n  #leftBar > #searchBar {\n    margin-bottom: 12px; }\n    #leftBar > #searchBar > input {\n      border: none;\n      border-radius: 2px;\n      width: 100%;\n      height: 32px;\n      padding-left: 8px;\n      outline: none; }\n  #leftBar > .function-buttons {\n    margin-bottom: 24px; }\n    #leftBar > .function-buttons > button {\n      background-color: #26b326;\n      font-weight: bold;\n      border-radius: 4px;\n      color: white;\n      border: 0;\n      outline: none;\n      padding: 6px 12px; }\n  #leftBar > #mainInfo {\n    flex-grow: 1;\n    display: flex;\n    flex-flow: column; }\n    #leftBar > #mainInfo > #cityName {\n      font-size: 26px; }\n    #leftBar > #mainInfo > #date {\n      padding-bottom: 32px;\n      font-size: 16px; }\n    #leftBar > #mainInfo > #weatherIcon {\n      flex-grow: 1;\n      font-size: 200px;\n      align-items: center;\n      justify-content: center;\n      display: flex; }\n      #leftBar > #mainInfo > #weatherIcon > img {\n        /*width: 100%;*/ }\n    #leftBar > #mainInfo > #weatherDesc {\n      padding-top: 32px;\n      text-align: center;\n      font-size: 28px; }\n  #leftBar > #minorInfo {\n    height: 160px;\n    margin-top: 48px;\n    border-top: 1px solid white;\n    box-sizing: content-box;\n    display: grid;\n    grid-template-columns: 1fr 1fr; }\n    #leftBar > #minorInfo > div {\n      display: flex;\n      flex-flow: column;\n      justify-content: center; }\n\n#innerWrapper {\n  flex-grow: 1;\n  padding: 32px;\n  display: flex;\n  flex-flow: column; }\n  #innerWrapper .content-container {\n    overflow-y: auto; }\n  #innerWrapper > #innerNav {\n    height: 32px;\n    margin-bottom: 24px; }\n    #innerWrapper > #innerNav > div {\n      display: inline-block;\n      height: 100%;\n      margin-right: 8px; }\n  #innerWrapper #chart {\n    flex-grow: 1; }\n  #innerWrapper #history {\n    flex-grow: 1; }\n    #innerWrapper #history .gridHolder {\n      display: grid;\n      grid-template-columns: 1fr 1fr 1fr;\n      grid-gap: 32px;\n      padding-right: 24px; }\n      #innerWrapper #history .gridHolder .gridElement {\n        height: 240px;\n        border: 2px solid white;\n        text-align: center;\n        display: flex;\n        position: relative;\n        flex-flow: column; }\n        #innerWrapper #history .gridHolder .gridElement:hover {\n          background-color: rgba(255, 255, 255, 0.1);\n          cursor: pointer; }\n        #innerWrapper #history .gridHolder .gridElement span.close-button {\n          position: absolute;\n          right: 0;\n          background-color: white;\n          height: 20px;\n          width: 20px;\n          color: red;\n          font-weight: 600;\n          line-height: 20px; }\n    #innerWrapper #history .gridElement .moreInfo {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      flex-grow: 1;\n      justify-content: center;\n      align-items: center; }\n      #innerWrapper #history .gridElement .moreInfo > div span.temp {\n        font-size: 26px; }\n      #innerWrapper #history .gridElement .moreInfo > div.minorInfo {\n        border-left: 1px solid white;\n        padding-left: 16px; }\n        #innerWrapper #history .gridElement .moreInfo > div.minorInfo span {\n          display: block;\n          text-align: left; }\n          #innerWrapper #history .gridElement .moreInfo > div.minorInfo span.humidity {\n            margin-bottom: 8px; }\n\n.hidden {\n  display: none; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/App.ts":
/*!********************!*\
  !*** ./src/App.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const MainPanel_1 = __webpack_require__(/*! ./MainPanel */ "./src/MainPanel.ts");
const HistoryPanel_1 = __webpack_require__(/*! ./HistoryPanel */ "./src/HistoryPanel.ts");
class App {
    constructor() {
        this.mainPanel = new MainPanel_1.MainPanel();
        this.historyPanel = new HistoryPanel_1.HistoryPanel();
    }
}
exports.App = App;


/***/ }),

/***/ "./src/HistoryPanel.ts":
/*!*****************************!*\
  !*** ./src/HistoryPanel.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HistoryPanel {
    constructor() {
        this.elementsHolder = document.querySelector("#history > .gridHolder");
        if (!this.getLocalstorageData() || this.getLocalstorageData().historyItems === undefined) {
            this.initLocalstorageStructure();
        }
        this.loadPanel();
        this.addSaveListener();
    }
    addSaveListener() {
        document.querySelector("#saveButton").addEventListener("click", () => {
            this.addHistoryData();
        });
    }
    initLocalstorageStructure() {
        const structure = '{ "historyItems": [] }';
        localStorage.setItem("historyWeatherData", structure);
    }
    loadPanel() {
        const data = this.getLocalstorageData();
        this.elementsHolder.innerHTML = "";
        data.historyItems.forEach((panelData) => {
            this.elementsHolder.appendChild(this.createPanelElement(panelData));
        });
    }
    removeHistoryData(cityName) {
        let data = this.getLocalstorageData();
        data.historyItems.forEach((item, index) => {
            if (item.name === cityName) {
                data.historyItems.splice(index, 1);
            }
        });
        localStorage.setItem("historyWeatherData", JSON.stringify(data));
        this.loadPanel();
    }
    createPanelElement(panelData) {
        let wrapper = document.createElement("div");
        wrapper.classList.add("gridElement");
        const cityName = panelData.name;
        const weatherDesc = panelData.weather[0].description;
        const temp = panelData.main.temp;
        const humidity = panelData.main.humidity;
        const pressure = panelData.main.pressure;
        wrapper.innerHTML =
            `<h2 class="city">${cityName}</h2>

            <span class="weather">${weatherDesc}</span>
            
            <span class="close-button">X</span>

            <div class="moreInfo">
              <div>
                <span class="temp">${Math.round(temp)} °C</span>
              </div>

              <div class="minorInfo">
                <div>
                  <span>Wilgotność:</span>
                  <span class="humidity">${humidity}%</span>
                </div>

                <div>
                  <span>Ciśnienie:</span>
                  <span class="pressure">${pressure} hPa</span>
                </div>
              </div>
            </div>`;
        wrapper.querySelector(".close-button").addEventListener("click", () => {
            this.removeHistoryData(cityName);
        });
        return wrapper;
    }
    addHistoryData() {
        let data = this.getLocalstorageData();
        data.historyItems
            .push(JSON.parse(localStorage.getItem("mainPanelWeatherData")));
        localStorage.setItem("historyWeatherData", JSON.stringify(data));
        this.loadPanel();
    }
    getLocalstorageData() {
        const data = localStorage.getItem("historyWeatherData");
        if (this.isJSON(data)) {
            return JSON.parse(data);
        }
        else {
            return false;
        }
    }
    isJSON(data) {
        try {
            JSON.parse(data);
        }
        catch (e) {
            return false;
        }
        return true;
    }
    changeMainPanelData() {
    }
}
exports.HistoryPanel = HistoryPanel;


/***/ }),

/***/ "./src/MainPanel.ts":
/*!**************************!*\
  !*** ./src/MainPanel.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WeatherAPI_1 = __webpack_require__(/*! ./WeatherAPI */ "./src/WeatherAPI.ts");
class MainPanel {
    constructor() {
        this.weatherAPI = new WeatherAPI_1.WeatherAPI();
        this.searchBar = document.querySelector("#searchBar > input");
        this.cityNameHolder = document.querySelector("#cityName > span");
        this.dateHolder = document.querySelector("#date > span");
        this.weatherIconHolder = document.querySelector("#weatherIcon > img");
        this.weatherDescHolder = document.querySelector("#weatherDesc > span");
        this.currentTempHolder = document.querySelector("#currentTemp > span");
        this.currentHumidityHolder = document.querySelector("#currentHumidity > span");
        this.currentPressureHolder = document.querySelector("#currentPressure > span");
        this.addInputListener();
        this.loadDataFromStorage();
    }
    addInputListener() {
        this.searchBar.addEventListener("keydown", (ev) => {
            if (ev.key === "Enter") {
                this.weatherAPI.getWeather(ev.target.value)
                    .then(res => {
                    this.updatePanel(res);
                });
            }
        });
    }
    updatePanel(data) {
        if (data === null || data === undefined) {
            return;
        }
        this.updateCityName(data.name);
        this.updateDate();
        this.updateIcon(data.weather[0].icon);
        this.updateDesc(data.weather[0].description);
        this.updateTemp(data.main.temp);
        this.updateHumidity(data.main.humidity);
        this.updatePressure(data.main.pressure);
        this.updateLocalStorage(data);
    }
    loadDataFromStorage() {
        let data = localStorage.getItem("mainPanelWeatherData");
        this.updatePanel(JSON.parse(data));
    }
    updateLocalStorage(data) {
        localStorage.setItem("mainPanelWeatherData", JSON.stringify(data));
    }
    updateDate() {
        const date = new Date();
        let dateString;
        switch (date.getDay()) {
            case 0:
                dateString = "Niedziela";
                break;
            case 1:
                dateString = "Poniedziałek";
                break;
            case 2:
                dateString = "Wtorek";
                break;
            case 3:
                dateString = "Środa";
                break;
            case 4:
                dateString = "Czwartek";
                break;
            case 5:
                dateString = "Piątek";
                break;
            case 6:
                dateString = "Sobota";
                break;
        }
        dateString += ` ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        this.dateHolder.innerText = dateString;
    }
    updateIcon(iconID) {
        this.weatherIconHolder.src = `https://openweathermap.org/img/wn/${iconID}@4x.png`;
    }
    updateDesc(description) {
        this.weatherDescHolder.innerText = description;
    }
    updateTemp(temp) {
        this.currentTempHolder.innerText = Math.round(temp) + "°C";
    }
    updateHumidity(humidity) {
        this.currentHumidityHolder.innerText = humidity + "%";
    }
    updatePressure(pressure) {
        this.currentPressureHolder.innerText = pressure + " hPa";
    }
    updateCityName(cityName) {
        this.cityNameHolder.innerText = cityName;
    }
}
exports.MainPanel = MainPanel;


/***/ }),

/***/ "./src/WeatherAPI.ts":
/*!***************************!*\
  !*** ./src/WeatherAPI.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class WeatherAPI {
    constructor() {
        this.opwApiKey = "2aeed0ddb6d14cdb42661fcb32e30247";
    }
    getWeather(city) {
        return __awaiter(this, void 0, void 0, function* () {
            const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pl&APPID=${this.opwApiKey}`;
            const weatherResponse = yield fetch(openWeatherUrl);
            const weatherData = yield weatherResponse.json();
            console.log(weatherData);
            return weatherData;
        });
    }
}
exports.WeatherAPI = WeatherAPI;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __webpack_require__(/*! ./App */ "./src/App.ts");
__webpack_require__(/*! ./main.scss */ "./src/main.scss");
const app = new App_1.App();


/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnRzIiwid2VicGFjazovLy8uL3NyYy9IaXN0b3J5UGFuZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW5QYW5lbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvV2VhdGhlckFQSS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uc2Nzcz80ZTUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FB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WUFDcEQsTUFBTSxXQUFXLEdBQUcsTUFBTSxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixPQUFPLFdBQVcsQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FDSjtBQWZELGdDQWVDOzs7Ozs7Ozs7Ozs7Ozs7QUNmRCwrREFBNEI7QUFDNUIsMERBQXFCO0FBRXJCLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBRyxFQUFFLENBQUM7Ozs7Ozs7Ozs7OztBQ0h0QixVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLGlNQUE4Rjs7QUFFaEk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLCBib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMWM0ZTgxO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM4ZGVnLCAjMWM0ZTgxIDAlLCAjNDQ3M2EyIDEwMCUpOyB9XFxuXFxuI21haW5XcmFwcGVyIHtcXG4gIHdpZHRoOiAxMzY2cHg7XFxuICBoZWlnaHQ6IDgwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NzNBMjtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jbGVmdEJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUM0RTgxO1xcbiAgd2lkdGg6IDM4MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMzJweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47IH1cXG4gICNsZWZ0QmFyID4gI3NlYXJjaEJhciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7IH1cXG4gICAgI2xlZnRCYXIgPiAjc2VhcmNoQmFyID4gaW5wdXQge1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAzMnB4O1xcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICNsZWZ0QmFyID4gLmZ1bmN0aW9uLWJ1dHRvbnMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4OyB9XFxuICAgICNsZWZ0QmFyID4gLmZ1bmN0aW9uLWJ1dHRvbnMgPiBidXR0b24ge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNmIzMjY7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBib3JkZXI6IDA7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICBwYWRkaW5nOiA2cHggMTJweDsgfVxcbiAgI2xlZnRCYXIgPiAjbWFpbkluZm8ge1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uOyB9XFxuICAgICNsZWZ0QmFyID4gI21haW5JbmZvID4gI2NpdHlOYW1lIHtcXG4gICAgICBmb250LXNpemU6IDI2cHg7IH1cXG4gICAgI2xlZnRCYXIgPiAjbWFpbkluZm8gPiAjZGF0ZSB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDMycHg7XFxuICAgICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAgICNsZWZ0QmFyID4gI21haW5JbmZvID4gI3dlYXRoZXJJY29uIHtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAgZm9udC1zaXplOiAyMDBweDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAjbGVmdEJhciA+ICNtYWluSW5mbyA+ICN3ZWF0aGVySWNvbiA+IGltZyB7XFxuICAgICAgICAvKndpZHRoOiAxMDAlOyovIH1cXG4gICAgI2xlZnRCYXIgPiAjbWFpbkluZm8gPiAjd2VhdGhlckRlc2Mge1xcbiAgICAgIHBhZGRpbmctdG9wOiAzMnB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDI4cHg7IH1cXG4gICNsZWZ0QmFyID4gI21pbm9ySW5mbyB7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIG1hcmdpbi10b3A6IDQ4cHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgfVxcbiAgICAjbGVmdEJhciA+ICNtaW5vckluZm8gPiBkaXYge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4jaW5uZXJXcmFwcGVyIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHBhZGRpbmc6IDMycHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiBjb2x1bW47IH1cXG4gICNpbm5lcldyYXBwZXIgLmNvbnRlbnQtY29udGFpbmVyIHtcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgI2lubmVyV3JhcHBlciA+ICNpbm5lck5hdiB7XFxuICAgIGhlaWdodDogMzJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDsgfVxcbiAgICAjaW5uZXJXcmFwcGVyID4gI2lubmVyTmF2ID4gZGl2IHtcXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4OyB9XFxuICAjaW5uZXJXcmFwcGVyICNjaGFydCB7XFxuICAgIGZsZXgtZ3JvdzogMTsgfVxcbiAgI2lubmVyV3JhcHBlciAjaGlzdG9yeSB7XFxuICAgIGZsZXgtZ3JvdzogMTsgfVxcbiAgICAjaW5uZXJXcmFwcGVyICNoaXN0b3J5IC5ncmlkSG9sZGVyIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgICAgZ3JpZC1nYXA6IDMycHg7XFxuICAgICAgcGFkZGluZy1yaWdodDogMjRweDsgfVxcbiAgICAgICNpbm5lcldyYXBwZXIgI2hpc3RvcnkgLmdyaWRIb2xkZXIgLmdyaWRFbGVtZW50IHtcXG4gICAgICAgIGhlaWdodDogMjQwcHg7XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjsgfVxcbiAgICAgICAgI2lubmVyV3JhcHBlciAjaGlzdG9yeSAuZ3JpZEhvbGRlciAuZ3JpZEVsZW1lbnQ6aG92ZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgI2lubmVyV3JhcHBlciAjaGlzdG9yeSAuZ3JpZEhvbGRlciAuZ3JpZEVsZW1lbnQgc3Bhbi5jbG9zZS1idXR0b24ge1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICB3aWR0aDogMjBweDtcXG4gICAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7IH1cXG4gICAgI2lubmVyV3JhcHBlciAjaGlzdG9yeSAuZ3JpZEVsZW1lbnQgLm1vcmVJbmZvIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICNpbm5lcldyYXBwZXIgI2hpc3RvcnkgLmdyaWRFbGVtZW50IC5tb3JlSW5mbyA+IGRpdiBzcGFuLnRlbXAge1xcbiAgICAgICAgZm9udC1zaXplOiAyNnB4OyB9XFxuICAgICAgI2lubmVyV3JhcHBlciAjaGlzdG9yeSAuZ3JpZEVsZW1lbnQgLm1vcmVJbmZvID4gZGl2Lm1pbm9ySW5mbyB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4OyB9XFxuICAgICAgICAjaW5uZXJXcmFwcGVyICNoaXN0b3J5IC5ncmlkRWxlbWVudCAubW9yZUluZm8gPiBkaXYubWlub3JJbmZvIHNwYW4ge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgICAgICAgICAjaW5uZXJXcmFwcGVyICNoaXN0b3J5IC5ncmlkRWxlbWVudCAubW9yZUluZm8gPiBkaXYubWlub3JJbmZvIHNwYW4uaHVtaWRpdHkge1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQge01haW5QYW5lbH0gZnJvbSBcIi4vTWFpblBhbmVsXCI7XHJcbmltcG9ydCB7SGlzdG9yeVBhbmVsfSBmcm9tIFwiLi9IaXN0b3J5UGFuZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gICAgbWFpblBhbmVsID0gbmV3IE1haW5QYW5lbCgpO1xyXG4gICAgaGlzdG9yeVBhbmVsID0gbmV3IEhpc3RvcnlQYW5lbCgpO1xyXG59IiwiZXhwb3J0IGNsYXNzIEhpc3RvcnlQYW5lbCB7XHJcbiAgICBlbGVtZW50c0hvbGRlcjogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50c0hvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlzdG9yeSA+IC5ncmlkSG9sZGVyXCIpXHJcblxyXG4gICAgICAgIGlmKCF0aGlzLmdldExvY2Fsc3RvcmFnZURhdGEoKSB8fCB0aGlzLmdldExvY2Fsc3RvcmFnZURhdGEoKS5oaXN0b3J5SXRlbXMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRMb2NhbHN0b3JhZ2VTdHJ1Y3R1cmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9hZFBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5hZGRTYXZlTGlzdGVuZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRTYXZlTGlzdGVuZXIoKXtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhdmVCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hZGRIaXN0b3J5RGF0YSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaW5pdExvY2Fsc3RvcmFnZVN0cnVjdHVyZSgpe1xyXG4gICAgICAgIGNvbnN0IHN0cnVjdHVyZSA9ICd7IFwiaGlzdG9yeUl0ZW1zXCI6IFtdIH0nO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlzdG9yeVdlYXRoZXJEYXRhXCIsIHN0cnVjdHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBhbmVsKCl7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZ2V0TG9jYWxzdG9yYWdlRGF0YSgpO1xyXG5cclxuICAgICAgICB0aGlzLmVsZW1lbnRzSG9sZGVyLmlubmVySFRNTCA9IFwiXCI7XHJcblxyXG4gICAgICAgIGRhdGEuaGlzdG9yeUl0ZW1zLmZvckVhY2goKHBhbmVsRGF0YTogT2JqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudHNIb2xkZXIuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVQYW5lbEVsZW1lbnQocGFuZWxEYXRhKSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVIaXN0b3J5RGF0YShjaXR5TmFtZTogc3RyaW5nKXtcclxuICAgICAgICBsZXQgZGF0YSA9IHRoaXMuZ2V0TG9jYWxzdG9yYWdlRGF0YSgpO1xyXG5cclxuICAgICAgICBkYXRhLmhpc3RvcnlJdGVtcy5mb3JFYWNoKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5uYW1lID09PSBjaXR5TmFtZSl7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmhpc3RvcnlJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJoaXN0b3J5V2VhdGhlckRhdGFcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIHRoaXMubG9hZFBhbmVsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlUGFuZWxFbGVtZW50KHBhbmVsRGF0YTogYW55KXtcclxuICAgICAgICBsZXQgd3JhcHBlcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcImdyaWRFbGVtZW50XCIpO1xyXG5cclxuICAgICAgICBjb25zdCBjaXR5TmFtZTogc3RyaW5nID0gcGFuZWxEYXRhLm5hbWU7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckRlc2MgPSBwYW5lbERhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICBjb25zdCB0ZW1wID0gcGFuZWxEYXRhLm1haW4udGVtcDtcclxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IHBhbmVsRGF0YS5tYWluLmh1bWlkaXR5O1xyXG4gICAgICAgIGNvbnN0IHByZXNzdXJlID0gcGFuZWxEYXRhLm1haW4ucHJlc3N1cmU7XHJcblxyXG4gICAgICAgIHdyYXBwZXIuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgYDxoMiBjbGFzcz1cImNpdHlcIj4ke2NpdHlOYW1lfTwvaDI+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndlYXRoZXJcIj4ke3dlYXRoZXJEZXNjfTwvc3Bhbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2xvc2UtYnV0dG9uXCI+WDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3JlSW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlbXBcIj4ke01hdGgucm91bmQodGVtcCl9IMKwQzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1pbm9ySW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+V2lsZ290bm/Fm8SHOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJodW1pZGl0eVwiPiR7aHVtaWRpdHl9JTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPkNpxZtuaWVuaWU6PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByZXNzdXJlXCI+JHtwcmVzc3VyZX0gaFBhPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PmBcclxuXHJcbiAgICAgICAgd3JhcHBlci5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbW92ZUhpc3RvcnlEYXRhKGNpdHlOYW1lKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICByZXR1cm4gd3JhcHBlcjtcclxuICAgIH1cclxuXHJcbiAgICBhZGRIaXN0b3J5RGF0YSgpe1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXRMb2NhbHN0b3JhZ2VEYXRhKCk7XHJcbiAgICAgICAgZGF0YS5oaXN0b3J5SXRlbXNcclxuICAgICAgICAgICAgLnB1c2goSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm1haW5QYW5lbFdlYXRoZXJEYXRhXCIpKSk7XHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiaGlzdG9yeVdlYXRoZXJEYXRhXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuICAgICAgICB0aGlzLmxvYWRQYW5lbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExvY2Fsc3RvcmFnZURhdGEoKXtcclxuICAgICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJoaXN0b3J5V2VhdGhlckRhdGFcIik7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNKU09OKGRhdGEpKXtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzSlNPTihkYXRhOiBzdHJpbmcpe1xyXG4gICAgICAgIHRyeXtcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlTWFpblBhbmVsRGF0YSgpe1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IFdlYXRoZXJBUEkgfSBmcm9tICcuL1dlYXRoZXJBUEknO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1haW5QYW5lbCB7XHJcbiAgICBzZWFyY2hCYXI6ICAgICAgICAgICAgICBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgY2l0eU5hbWVIb2xkZXI6ICAgICAgICAgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgZGF0ZUhvbGRlcjogICAgICAgICAgICAgSFRNTFNwYW5FbGVtZW50O1xyXG4gICAgd2VhdGhlckljb25Ib2xkZXI6ICAgICAgSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHdlYXRoZXJEZXNjSG9sZGVyOiAgICAgIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGN1cnJlbnRUZW1wSG9sZGVyOiAgICAgIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGN1cnJlbnRIdW1pZGl0eUhvbGRlcjogIEhUTUxTcGFuRWxlbWVudDtcclxuICAgIGN1cnJlbnRQcmVzc3VyZUhvbGRlcjogIEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgICB3ZWF0aGVyQVBJID0gbmV3IFdlYXRoZXJBUEkoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhciAgICAgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaEJhciA+IGlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuY2l0eU5hbWVIb2xkZXIgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2l0eU5hbWUgPiBzcGFuXCIpO1xyXG4gICAgICAgIHRoaXMuZGF0ZUhvbGRlciAgICAgICAgICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZSA+IHNwYW5cIik7XHJcbiAgICAgICAgdGhpcy53ZWF0aGVySWNvbkhvbGRlciAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3ZWF0aGVySWNvbiA+IGltZ1wiKTtcclxuICAgICAgICB0aGlzLndlYXRoZXJEZXNjSG9sZGVyICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3dlYXRoZXJEZXNjID4gc3BhblwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUZW1wSG9sZGVyICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnRUZW1wID4gc3BhblwiKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIdW1pZGl0eUhvbGRlciAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N1cnJlbnRIdW1pZGl0eSA+IHNwYW5cIik7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UHJlc3N1cmVIb2xkZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjdXJyZW50UHJlc3N1cmUgPiBzcGFuXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkSW5wdXRMaXN0ZW5lcigpO1xyXG4gICAgICAgIHRoaXMubG9hZERhdGFGcm9tU3RvcmFnZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZElucHV0TGlzdGVuZXIoKXtcclxuICAgICAgICB0aGlzLnNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXY6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZihldi5rZXkgPT09IFwiRW50ZXJcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndlYXRoZXJBUEkuZ2V0V2VhdGhlcihldi50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVQYW5lbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQYW5lbChkYXRhOiBhbnkpe1xyXG4gICAgICAgIGlmKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVDaXR5TmFtZShkYXRhLm5hbWUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0ZSgpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbihkYXRhLndlYXRoZXJbMF0uaWNvbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVEZXNjKGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUZW1wKGRhdGEubWFpbi50ZW1wKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUh1bWlkaXR5KGRhdGEubWFpbi5odW1pZGl0eSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQcmVzc3VyZShkYXRhLm1haW4ucHJlc3N1cmUpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTG9jYWxTdG9yYWdlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWREYXRhRnJvbVN0b3JhZ2UoKXtcclxuICAgICAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibWFpblBhbmVsV2VhdGhlckRhdGFcIik7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYW5lbChKU09OLnBhcnNlKGRhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVMb2NhbFN0b3JhZ2UoZGF0YTogSlNPTil7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtYWluUGFuZWxXZWF0aGVyRGF0YVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSlcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEYXRlKCl7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcblxyXG4gICAgICAgIGxldCBkYXRlU3RyaW5nOiBzdHJpbmc7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGF0ZS5nZXREYXkoKSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IGRhdGVTdHJpbmcgPSBcIk5pZWR6aWVsYVwiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAxOiBkYXRlU3RyaW5nID0gXCJQb25pZWR6aWHFgmVrXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6IGRhdGVTdHJpbmcgPSBcIld0b3Jla1wiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOiBkYXRlU3RyaW5nID0gXCLFmnJvZGFcIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNDogZGF0ZVN0cmluZyA9IFwiQ3p3YXJ0ZWtcIjsgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgNTogZGF0ZVN0cmluZyA9IFwiUGnEhXRla1wiOyBicmVhaztcclxuICAgICAgICAgICAgY2FzZSA2OiBkYXRlU3RyaW5nID0gXCJTb2JvdGFcIjsgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRlU3RyaW5nICs9IGAgJHtkYXRlLmdldERhdGUoKX0uJHtkYXRlLmdldE1vbnRoKCkgKyAxfS4ke2RhdGUuZ2V0RnVsbFllYXIoKX1gXHJcblxyXG4gICAgICAgIHRoaXMuZGF0ZUhvbGRlci5pbm5lclRleHQgPSBkYXRlU3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUljb24oaWNvbklEOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMud2VhdGhlckljb25Ib2xkZXIuc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ljb25JRH1ANHgucG5nYDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEZXNjKGRlc2NyaXB0aW9uOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMud2VhdGhlckRlc2NIb2xkZXIuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGVtcCh0ZW1wOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRlbXBIb2xkZXIuaW5uZXJUZXh0ID0gTWF0aC5yb3VuZCh0ZW1wKSArIFwiwrBDXCI7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlSHVtaWRpdHkoaHVtaWRpdHk6IHN0cmluZyl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SHVtaWRpdHlIb2xkZXIuaW5uZXJUZXh0ID0gaHVtaWRpdHkgKyBcIiVcIjtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVQcmVzc3VyZShwcmVzc3VyZTogc3RyaW5nKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRQcmVzc3VyZUhvbGRlci5pbm5lclRleHQgPSBwcmVzc3VyZSArIFwiIGhQYVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNpdHlOYW1lKGNpdHlOYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuY2l0eU5hbWVIb2xkZXIuaW5uZXJUZXh0ID0gY2l0eU5hbWU7XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFdlYXRoZXJBUEkge1xyXG4gICAgb3B3QXBpS2V5ID0gXCIyYWVlZDBkZGI2ZDE0Y2RiNDI2NjFmY2IzMmUzMDI0N1wiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBnZXRXZWF0aGVyKGNpdHk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgY29uc3Qgb3BlbldlYXRoZXJVcmwgPVxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZsYW5nPXBsJkFQUElEPSR7dGhpcy5vcHdBcGlLZXl9YDtcclxuICAgICAgICBjb25zdCB3ZWF0aGVyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChvcGVuV2VhdGhlclVybCk7XHJcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKTtcclxuICAgICAgICByZXR1cm4gd2VhdGhlckRhdGE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tICcuL0FwcCc7XHJcbmltcG9ydCAnLi9tYWluLnNjc3MnO1xyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyJdLCJzb3VyY2VSb290IjoiIn0=