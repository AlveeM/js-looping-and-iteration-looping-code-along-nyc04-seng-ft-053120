// Code your solutions in this file
function writeCards(arr, eventName) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    resultArr.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`);
  }
  return resultArr;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}