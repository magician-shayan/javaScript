//// Type Conversions
// const stringToNumber = Number("10");
// const NaN = Number("$");
// const numberToString = String(10);
// const numberToBoolean = Boolean(10);
// const stringToBoolean = Boolean(" ");

//// Falsy Values
// 0 -> false
// '' -> false
// null -> false
// undefined -> false
// NaN -> false
// All other values are truthy.
// console.log(Boolean(NaN));

//// Statements v/s Expressions
// expression is a piece of code that produce values.
// statement is a piece of code that doesn't produce values, it just performs some actions.

//// Function Declaration
// function is like variable which can hold code to be reused.
// function calcAge(birthYear) {
// return 2022 - birthYear;
// }

// e.g. fruitProcessor, nameLogger
// they can be called before they are defined, hoisting

//// Function Expression
// const calcAge = function (birthYear) {
// return 2022 - birthYear;
// }

// functions in js is like values
// they can not be called before they are defined

//// Arrow Functions
// const calcAge = (birthYear) => {
//   return 2022 - birthYear;
// };

// does not create this {}
