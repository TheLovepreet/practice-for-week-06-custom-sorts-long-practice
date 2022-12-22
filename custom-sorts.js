function ageSort(users) {
  const sortedByAge = users.sort((firstEl,secondEl) => firstEl.age - secondEl.age);
   return sortedByAge;
}

function oddEvenSort(arr) {
  // Your code here
  function compareOddEven(a,b){
    if(a%2 == 0 && b%2 !== 0) return 1;
    if(a%2 !== 0 && b%2 == 0) return -1;
    return a - b;
  }
  arr.sort(compareOddEven)
  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  let sArr = s.split('');
  let tArr = t.split('');
  sortedS = sArr.sort();
  sortedT = tArr.sort();
  newS = sortedS.join('');
  newT = sortedT.join('');
  return (newS == newT);
}

function reverseBaseSort(arr) {
  // Your code here
  let biggest = 0;


  for(let i = 0; i < arr.length; i++){
    if(arr[i] > biggest){
      biggest = arr[i];
    }
  }
  function baseChecker(a,b){
    if(a >= 100 && b >= 100){
      return a-b;
    }
    if((a >= 10 && a < 100) && (b >= 10 && b < 100)){
      return a - b;
    }
    if((a >= 0 && b >= 0) && (a < 10 && b < 10)){
      return a-b;
    }
    return b-a;
  }
  arr.sort(baseChecker);
  return arr;

}

function frequencySort(arr) {
  // Your code here
  function freqCounter(num){
    let count = 0;
    for(let i = 0; i< arr.length; i++){
      if(arr[i] == num){
        count++;
      }
    }
    return count;
  }
  function sorter(a,b){
    if(freqCounter(a) > freqCounter(b)){
     return 1;
    }
  if(freqCounter(a) ==  freqCounter(b) ){
    return b - a;
  }
  return -1;
  }
  arr.sort(sorter);
return arr;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];