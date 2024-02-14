// function solution(price) {
//   var answer = 0;
//   if (price >= 500000) {
//     answer = Math.floor(price * 0.8);
//   } else if (price >= 300000) {
//     answer = Math.floor(price * 0.9);
//   } else if (price >= 100000) {
//     answer = Math.floor(price * 0.95);
//   } else {
//     answer = Math.floor(price);
//   }
//   console.log(answer);
//   return answer;
// }

// solution(85.5);

// function solution(slice, n) {
//   var answer = 0;
//   answer = Math.ceil(n / slice);
//   console.log(answer);
//   return answer;
// }

// solution(5, 11);

// function solution(n) {
//   var answer = 0;
//   const array = [];

//   for (let i = 1; i <= 100; i++) {
//     if ((6 * i) % n === 0) {
//       array.push(i);
//     }
//   }
//   answer = array[0];

//   console.log(answer);
//   return answer;
// }

// solution(10);

function solution(chicken, n) {
  var answer = 0;
  answer = n / 10;
  console.log(answer);
  return answer;
}

solution(1081, 1081 / 10);
