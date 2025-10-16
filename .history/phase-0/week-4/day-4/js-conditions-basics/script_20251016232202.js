function isInRange(num, numMin, numMax) {
  return num >= numMin && num <= numMax;
}
console.log(isInRange(5, 0, 10));

function isVowel(str){
  let listOfLetter = "аеёиуыэюя";
  let result = false;
  for (let i = 0; i < listOfLetter.length; i++){
    result = str === listOfLetter[i];
    if(result === true){
      return (result)
    }
  }
}
console.log(isVowel(""))