// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";var t="number";function i(i,o,f){if(!r(i))throw new TypeError(e("1aV3c,J9",i));if(!n(o))throw new TypeError(e("1aV3X,F1",o));if(!r(f))throw new TypeError(e("1aV3d,Ka",f));return o<=5?[function(){var r=i();if(typeof r===t)return new f(r,0);return r},function(r){var n=i(r);if(typeof n===t)return new f(n,0);return n},function(r,n){var e=i(r,n);if(typeof e===t)return new f(e,0);return e},function(r,n,e){var o=i(r,n,e);if(typeof o===t)return new f(o,0);return o},function(r,n,e,o){var s=i(r,n,e,o);if(typeof s===t)return new f(s,0);return s},function(r,n,e,o,s){var u=i(r,n,e,o,s);if(typeof u===t)return new f(u,0);return u}][o]:function(){var r,n,e;for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);if(typeof(n=i.apply(null,r))===t)return new f(n,0);return n}}export{i as default};
//# sourceMappingURL=index.mjs.map
