// function solution(num1, num2) {
//   var answer = -1;

const { filter } = require('lodash');

//   answer = num1 % num2;
//   console.log(answer);
//   return answer;
// }

// solution(3, 2);

// function solution(num_list) {
//   var answer = [];
//   for (let i = num_list.length - 1; i >= 0; i--) {
//     answer.push(num_list[i]);
//     console.log(answer);
//   }
//   console.log(num_list);
//   return answer;
// }

// solution([1, 2, 3, 4, 5]);

// function solution(num_list) {
//   var answer = [];
//   answer = [...num_list].reverse();
//   console.log(num_list);
//   console.log(answer);
//   return answer;
// }

// solution([1, 2, 3, 4, 5]);

// function solution(array, n) {
//   var answer = 0;
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] === n) {
//       answer++;
//     }
//   }
//   return answer;
// }

// solution([1, 1, 2, 3, 4, 5], 1);

// function solution(my_string) {
//   var answer = '';
//   const bb = my_string.split('');
//   bb.reverse();
//   answer = bb.join('');

//   console.log(answer);
//   return answer;
// }

// solution('hello');

// let aaa = ["안녕"];

// aaa.join('')

// console.log(aaa);

// function solution(array, height) {
//   var answer = 0;
//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] > height) {
//       answer += 1;
//     }
//   }

//   console.log(answer);

//   return answer;
// }

// solution([149, 180, 192, 170], 167);

// function solution(strlist) {
//   var answer = [];
//   for (let i = 0; i < strlist.length; i++) {
//     answer.push(strlist[i].length)

//   }

//   return answer;
// }

// solution(['We', 'are', 'the', 'world!']);
// function solution(n, k) {
//   var answer = 0;
//   const sheep = 12000;
//   const beverage = 2000;
//   const freeBev = Math.floor(n / 10);
//   const totalBevCount = k - freeBev;

//   answer = answer = sheep * n + beverage * totalBevCount;
//   return answer;
// }

// solution(20, 3);

// function solution(message) {
//   var answer = 0;

//   answer = message.length * 2;

//   console.log(answer);
//   return answer;
// }

// solution('happy birthday!');

// function solution(n) {
//   var answer = 0;
//   const aaa = String(n);

//   const bbb = aaa.split('');
//   //split, join은 새로운 선언에다가 써야함. 그래야 적용된다
//   for (let i = 0; i < bbb.length; i++) {
//     answer += Number(bbb[i]);
//   }
//   console.log(answer);
//   return answer;
// }

// solution(1234);

// function solution(n) {
//   var answer = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) answer++;
//   }
//   console.log(answer);
//   return answer;
// }

// solution(100);

// function solution(num_list) {
//   var answer = [];
//   const aaa = [];
//   const bbb = [];
//   for (let i = 0; i < num_list.length; i++) {
//     if (num_list[i] % 2 !== 0) {
//       aaa.push(num_list[i]);
//     } else {
//       bbb.push(num_list[i]);
//     }
//   }

//   answer = [bbb.length, aaa.length];

//   console.log(answer);
//   return answer;
// }

// solution([1, 2, 3, 4, 5]);

// function solution(dot) {
//   var answer = 0;
//   if (dot[0] > 0 && dot[1] > 0) {
//     answer = 1;
//   } else if (dot[0] > 0 && dot[1] < 0) {
//     answer = 4;
//   } else if (dot[0] < 0 && dot[1] > 0) {
//     answer = 2;
//   } else {
//     answer = 3;
//   }
//   return answer;
// }

// solution([2, 4]);

// function solution(my_string, letter) {
//   var answer = '';
//   const bbb = my_string.split('');
//   for (let i = 0; i < bbb.length; i++) {
//     if (bbb[i] === letter) {
//       filter(bbb[i]);
//     }
//   }

//   answer = bbb.join('');
//   console.log(answer);

//   return answer;
// }

// solution('abcdef', 'f');

// function solution(s1, s2) {
//   var answer = 0;
//   for (let i = 0; i < s1.length; i++) {
//     for (let z = 0; z < s2.length; z++) {
//       if (s1[i] === s2[z]) {
//         answer++;
//       }
//     }
//   }

//   return answer;
// }

// solution(['a', 'b', 'c'], ['m', 'a']);

//
function solution(n) {
  var piazza = Math.ceil(n / 7);

  console.log(piazza);
  return piazza;
}

solution(8);
