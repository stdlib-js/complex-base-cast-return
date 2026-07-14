"use strict";var q=function(t,i){return function(){try{return i||t((i={exports:{}}).exports,i),i.exports}catch(u){throw i=0,u}}};var g=q(function(F,w){"use strict";var m=require("@stdlib/assert-is-function"),E=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,s=require("@stdlib/string-format"),f="number";function N(t,i,u){var p;if(!m(t))throw new TypeError(s("invalid argument. First argument must be a function. Value: `%s`.",t));if(!E(i))throw new TypeError(s("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",i));if(!m(u))throw new TypeError(s("invalid argument. Third argument must be a constructor function. Value: `%s`.",u));return p=[y,l,c,h,d,T],i<=5?p[i]:b;function y(){var r=t();return typeof r===f?new u(r,0):r}function l(r){var e=t(r);return typeof e===f?new u(e,0):e}function c(r,e){var n=t(r,e);return typeof n===f?new u(n,0):n}function h(r,e,n){var a=t(r,e,n);return typeof a===f?new u(a,0):a}function d(r,e,n,a){var o=t(r,e,n,a);return typeof o===f?new u(o,0):o}function T(r,e,n,a,o){var v=t(r,e,n,a,o);return typeof v===f?new u(v,0):v}function b(){var r,e,n;for(r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);return e=t.apply(null,r),typeof e===f?new u(e,0):e}}w.exports=N});var V=g();module.exports=V;
/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
