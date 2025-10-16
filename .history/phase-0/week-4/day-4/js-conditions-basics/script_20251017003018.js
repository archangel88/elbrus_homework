// function isInRange(num, numMin, numMax) {
//   return num >= numMin && num <= numMax;
// }
// console.log(isInRange(5, 0, 10));

// function isVowel(str){
//   let listOfLetter = "aeiouаеёиоуыэюя";
//   let result = false;
//   for (let i = 0; i < listOfLetter.length; i++){
//     if(str === listOfLetter[i]) {
//       result = true;
//     }
//   }
//   return result
// }
// console.log(isVowel("h"))

// function isLeapYear(year ){
//   console.log ('функция высокосный год')
//   console.log (year % 4 === 0)
//   console.log (!(year % 100 === 0))
//   console.log (year % 400 === 0)
//   if (!Number.isInteger(year)) {
//     return "Вы ввели не год";
//   } else {
//     if ((year % 4 === 0 && !(year % 100 === 0)) || year % 100 === 0){
//       return true;
//     } else return false;
//   }
// }
// console.log(isLeapYear(1900));
// console.log(isLeapYear(1600));
// console.log(isLeapYear(2024.1254));

function myIsNaN(value){
  return typeof value === 'number' && value !== value;
}
console.log(myIsNaN(NaN));
console.log(myIsNaN(123));
console.log(myIsNaN("abc"));
console.log(myIsNaN(undefined));
console.log(myIsNaN(1/0));