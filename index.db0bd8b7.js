!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var n,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var a=u.test(e);return a||f.test(e)?c(e.slice(2),a?2:8):r.test(e)?NaN:+e}n=function(t,e,n){var o,i,r,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,r=i;return o=i=void 0,a=e,u=t.apply(r,n)}function h(t){return a=t,f=setTimeout(O,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=r}function O(){var t=y();if(j(t))return T(t);f=setTimeout(O,function(t){var n=e-(t-c);return s?p(n,r-(t-a)):n}(t))}function T(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function w(){var t=y(),n=j(t);if(o=arguments,i=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(O,e),g(c)}return void 0===f&&(f=setTimeout(O,e)),u}return e=m(e)||0,b(n)&&(l=!!n.leading,r=(s="maxWait"in n)?v(m(n.maxWait)||0,e):r,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:T(y())},w};var g={inputEl:document.querySelector("#search-box"),listEl:document.querySelector(".country-list"),container:document.querySelector(".country-info")};g.inputEl.addEventListener("input",t(n)((function(){var t=g.inputEl.value;console.log(t),e=t,console.log(e),fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name,capital,population,flags.svg,languages")).then((function(t){return t.json()})).then((function(t){}));var e}),300))}();
//# sourceMappingURL=index.db0bd8b7.js.map
