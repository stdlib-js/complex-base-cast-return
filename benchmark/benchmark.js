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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var isFunction = require( '@stdlib/assert-is-function' );
var pkg = require( './../package.json' ).name;
var cast = require( './../lib' );


// FUNCTIONS //

function naryReal() {
	var re;
	var i;

	re = 0.0;
	for ( i = 0; i < arguments.length; i++ ) {
		re += arguments[ i ];
	}
	return re;
}

function naryComplex() {
	var re;
	var i;

	re = 0.0;
	for ( i = 0; i < arguments.length; i++ ) {
		re += arguments[ i ];
	}
	return new Complex64( re, 0.0 );
}


// MAIN //

bench( pkg, function benchmark( b ) {
	var f;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = cast( naryReal, i, Complex64 );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( !isFunction( f ) ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_nullary', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryReal, 0, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f();
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_unary,real', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryReal, 1, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_unary,complex', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryComplex, 1, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_binary,real', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryReal, 2, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_binary,complex', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryComplex, 2, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_ternary,real', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryReal, 3, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1, i+2 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_ternary,complex', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryComplex, 3, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1, i+2 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_quaternary,real', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryReal, 4, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1, i+2, i+3 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_quaternary,complex', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryComplex, 4, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1, i+2, i+3 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_quinary,real', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryReal, 5, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1, i+2, i+3, i+4 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_quinary,complex', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryComplex, 5, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1, i+2, i+3, i+4 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_nary,real', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryReal, 6, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1, i+2, i+3, i+4, i+5 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::wrapped_nary,complex', function benchmark( b ) {
	var f;
	var v;
	var i;

	f = cast( naryComplex, 6, Complex64 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( i, i+1, i+2, i+3, i+4, i+5 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( isnanf( realf( v ) ) || isnanf( imagf( v ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
