<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# castReturn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Wrap a function and cast a function's return value to a complex number.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import castReturn from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@deno/mod.js';
```

#### castReturn( fcn, nargs, ctor )

Returns a function which wraps a function and casts a function's return value to a complex number.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
import addf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-addf@deno/mod.js';

var f = castReturn( addf, 2, Complex64 );
// returns <Function>
```

The function accepts the following arguments:

-   **fcn**: the function to wrap.
-   **nargs**: the number of arguments to be provided to the wrapped function.
-   **ctor**: complex number constructor for converting real numbers to complex numbers.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The returned function **assumes** that the wrapped function returns either a real or complex number.
-   The returned function **assumes** that, if a return value is non-numeric (i.e., not of type `number`), then the return value is a complex number. The returned function does **not** verify that non-numeric return values are, in fact, complex number objects. The returned function returns non-numeric return values from the wrapped function without modification.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
import addf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-addf@deno/mod.js';
import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@deno/mod.js';
import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@deno/mod.js';
import castReturn from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-base-cast-return@deno/mod.js';

var f = castReturn( addf, 2, Complex64 );

// ...

var z = f( 3.0, 4.0 );
// returns <Complex64>

var re = realf( z );
// returns 7.0

var im = imagf( z );
// returns 0.0

console.log( '%d + %di', re, im );
// => '7 + 0i'
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/complex-base-cast-return.svg
[npm-url]: https://npmjs.org/package/@stdlib/complex-base-cast-return

[test-image]: https://github.com/stdlib-js/complex-base-cast-return/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/complex-base-cast-return/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/complex-base-cast-return/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/complex-base-cast-return?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/complex-base-cast-return.svg
[dependencies-url]: https://david-dm.org/stdlib-js/complex-base-cast-return/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/complex-base-cast-return/tree/deno
[umd-url]: https://github.com/stdlib-js/complex-base-cast-return/tree/umd
[esm-url]: https://github.com/stdlib-js/complex-base-cast-return/tree/esm
[branches-url]: https://github.com/stdlib-js/complex-base-cast-return/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/complex-base-cast-return/main/LICENSE

</section>

<!-- /.links -->
