parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/bg-header-main-tablet.jpg":[["bg-header-main-tablet.9d0f39f3.jpg","fhGx"],"fhGx"],"./../images/bg-header-main-tablet@2x.jpg":[["bg-header-main-tablet@2x.89ee9b1d.jpg","sH0G"],"sH0G"],"./../images/bg-header-main-desctop.jpg":[["bg-header-main-desctop.91231833.jpg","sj31"],"sj31"],"./../images/bg-header-main-desctop@2x.jpg":[["bg-header-main-desctop@2x.2d62f6ab.jpg","hXI7"],"hXI7"],"./../images/bg-header-library.jpg":[["bg-header-library.13ca91fd.jpg","sFrg"],"sFrg"],"./../images/bg-header-library@2x.jpg":[["bg-header-library@2x.2af390ae.jpg","CyyK"],"CyyK"],"./../images/icons.svg":[["icons.77939d67.svg","nNTp"],"nNTp"]}],"lOVX":[function(require,module,exports) {
"use strict";function e(){return{homeLink:document.querySelectorAll("[data-home]"),homeLinkCurrent:document.querySelector("[data-curr]"),libraryLink:document.querySelector("[data-library]"),libraryWatched:document.querySelector("[data-watched]"),libraryQueue:document.querySelector("[data-queue]"),form:document.querySelector(".form"),header:document.querySelector(".header"),buttons:document.querySelector(".library"),spinner:document.querySelector(".load-spinner"),closeModalBtn:document.querySelector(".closeModal"),backdrop:document.querySelector(".backdrop"),modal:document.querySelector(".modal")}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=e;exports.default=r;
},{}],"N0LX":[function(require,module,exports) {
"use strict";var e=s(require("../refs/getRefs.js"));function s(e){return e&&e.__esModule?e:{default:e}}const{homeLink:r,libraryLink:a,libraryWatched:t,libraryQueue:i,form:d,header:c,buttons:l,homeLinkCurrent:n}=(0,e.default)(),L=()=>{d.classList.remove("hidden"),c.classList.remove("header-library"),l.classList.add("hidden"),a.classList.remove("current"),n.classList.add("current")},v=()=>{d.classList.add("hidden"),c.classList.add("header-library"),l.classList.remove("hidden"),a.classList.add("current"),n.classList.remove("current")},o=()=>{t.classList.add("active"),i.classList.remove("active")},u=()=>{t.classList.remove("active"),i.classList.add("active")};r.forEach(e=>{e.addEventListener("click",L)}),a.addEventListener("click",v),t.addEventListener("click",o),i.addEventListener("click",u);
},{"../refs/getRefs.js":"lOVX"}],"ZALe":[function(require,module,exports) {
"use strict";var s=e(require("../refs/getRefs"));function e(s){return s&&s.__esModule?s:{default:s}}const{spinner:t}=(0,s.default)();function i(){t.classList.remove("hidden"),t.classList.add("isOn"),setTimeout(()=>{t.classList.remove("isOn"),t.classList.add("hidden")},700)}
},{"../refs/getRefs":"lOVX"}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/header/header.js"),require("./js/load_spinner/load-spinner.js");
},{"./sass/main.scss":"clu1","./js/header/header.js":"N0LX","./js/load_spinner/load-spinner.js":"ZALe"}]},{},["Focm"], null)
//# sourceMappingURL=/project-13/src.a4badfb9.js.map