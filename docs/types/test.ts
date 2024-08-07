/*
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

/// <reference types="@stdlib/types"/>

import Complex64 = require( '@stdlib/complex-float32-ctor' );
import castReturn = require( './index' );

/**
* Nullary function.
*
* @returns result
*/
function nullary(): number {
	return 1.0;
}

/**
* Unary function.
*
* @param x - input value
* @returns result
*/
function unary( x: number ): number {
	return x;
}

/**
* Binary function.
*
* @param x - input value
* @param y - input value
* @returns result
*/
function binary( x: number, y: number ): number {
	return x + y;
}

/**
* Ternary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @returns result
*/
function ternary( x: number, y: number, z: number ): number {
	return x + y + z;
}

/**
* Quaternary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @returns result
*/
function quaternary( x: number, y: number, z: number, w: number ): number {
	return x + y + z + w;
}

/**
* Quinary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @returns result
*/
function quinary( x: number, y: number, z: number, w: number, v: number ): number {
	return x + y + z + w + v;
}

/**
* N-ary function.
*
* @param x - input value
* @param y - input value
* @param z - input value
* @param w - input value
* @param v - input value
* @param t - input value
* @returns result
*/
function nary( x: number, y: number, z: number, w: number, v: number, t: number ): number {
	return x + y + z + w + v + t;
}


// TESTS //

// The function returns a wrapped function...
{
	castReturn( nullary, 0, Complex64 ); // $ExpectType WrappedNullary
	castReturn( unary, 1, Complex64 ); // $ExpectType WrappedUnary
	castReturn( binary, 2, Complex64 ); // $ExpectType WrappedBinary
	castReturn( ternary, 3, Complex64 ); // $ExpectType WrappedTernary
	castReturn( quaternary, 4, Complex64 ); // $ExpectType WrappedQuaternary
	castReturn( quinary, 5, Complex64 ); // $ExpectType WrappedQuinary
	castReturn( nary, 6, Complex64 ); // $ExpectType WrappedNary
}

// The compiler throws an error if the function is provided a first argument that is not a valid function...
{
	castReturn( 'abc', 1, Complex64 ); // $ExpectError
	castReturn( 123, 1, Complex64 ); // $ExpectError
	castReturn( true, 1, Complex64 ); // $ExpectError
	castReturn( false, 1, Complex64 ); // $ExpectError
	castReturn( null, 1, Complex64 ); // $ExpectError
	castReturn( undefined, 1, Complex64 ); // $ExpectError
	castReturn( [], 1, Complex64 ); // $ExpectError
	castReturn( {}, 1, Complex64 ); // $ExpectError

	castReturn( ( x: string ): string => x, 1, Complex64 ); // $ExpectError
	castReturn( ( x: boolean ): boolean => x, 1, Complex64 ); // $ExpectError
}

// The compiler throws an error if the function is provided a second argument that is not a number...
{
	castReturn( binary, 'abc', Complex64 ); // $ExpectError
	castReturn( binary, true, Complex64 ); // $ExpectError
	castReturn( binary, false, Complex64 ); // $ExpectError
	castReturn( binary, null, Complex64 ); // $ExpectError
	castReturn( binary, undefined, Complex64 ); // $ExpectError
	castReturn( binary, [], Complex64 ); // $ExpectError
	castReturn( binary, {}, Complex64 ); // $ExpectError
	castReturn( binary, ( x: number ): number => x, Complex64 ); // $ExpectError
}

// The compiler throws an error if the function is provided a third argument that is not a complex number constructor...
{
	castReturn( binary, 2, 'abc' ); // $ExpectError
	castReturn( binary, 2, 1 ); // $ExpectError
	castReturn( binary, 2, true ); // $ExpectError
	castReturn( binary, 2, false ); // $ExpectError
	castReturn( binary, 2, null ); // $ExpectError
	castReturn( binary, 2, undefined ); // $ExpectError
	castReturn( binary, 2, [] ); // $ExpectError
	castReturn( binary, 2, {} ); // $ExpectError
	castReturn( binary, 2, ( x: number ): number => x ); // $ExpectError
}

// The compiler throws an error if the function is provided an unsupported number of arguments...
{
	castReturn(); // $ExpectError
	castReturn( binary ); // $ExpectError
	castReturn( binary, 2 ); // $ExpectError
	castReturn( binary, 2, Complex64, true ); // $ExpectError
}

// The function returns a function which returns a complex number...
{
	const f0 = castReturn( nullary, 0, Complex64 );
	f0(); // $ExpectType ComplexLike

	const f1 = castReturn( unary, 1, Complex64 );
	f1( 1.0 ); // $ExpectType ComplexLike

	const f2 = castReturn( binary, 2, Complex64 );
	f2( 1.0, 1.0 ); // $ExpectType ComplexLike

	const f3 = castReturn( ternary, 3, Complex64 );
	f3( 1.0, 1.0, 1.0 ); // $ExpectType ComplexLike

	const f4 = castReturn( quaternary, 4, Complex64 );
	f4( 1.0, 1.0, 1.0, 1.0 ); // $ExpectType ComplexLike

	const f5 = castReturn( quinary, 5, Complex64 );
	f5( 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectType ComplexLike

	const f6 = castReturn( nary, 6, Complex64 );
	f6( 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ); // $ExpectType ComplexLike
}
