function isInRange(num, numMin, numMax) {
  return num >= numMin && num <= numMax;
}
console.log(isInRange(5, 0, 10));

function isVowel(str){
  let listOfLetter = "aeiouаеёиоуыэюя";
  let result = false;
  for (let i = 0; i < listOfLetter.length; i++){
    if(str === listOfLetter[i]) {
      result = true;
    }
  }
  return result
}
console.log(isVowel("р"))