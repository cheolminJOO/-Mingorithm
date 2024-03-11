// function solution(n, t) {
//   var answer = 0;

//   for (let i = 1; i <= t; i++) {
//     answer = n *= 2;
//   }
//   console.log(answer);
//   return answer;
// }

// solution(2, 10);

// function solution(numbers, num1, num2) {
//   var answer = [];

//   answer = numbers.slice(num1, num2 + 1);

//   console.log(answer);
//   return answer;
// }

// solution([1, 2, 3, 4, 5], 1, 3);

// function solution(numbers) {
//   var answer = 0;

//   const aaa = numbers.sort(function (a, b) {
//     return b - a;
//   });

//   answer = aaa[0] * aaa[1];

//   console.log(answer);
//   return answer;
// }

// solution([0, 31, 24, 10, 1, 9]);

// function solution(str1, str2) {

//   const aaa = str1.includes('안녕@');

//   console.log(aaa);
// }

// solution(['안녕', '하세요']);

// function solution(str1, str2) {
//   const aaa = str1.includes(str2);

//   console.log(aaa);
// }

// solution('ab6CDE443fgh22iJKlmn1o', '6CD');

// function solution(numbers) {
//   var answer = [];
//   for (let i = 0; i < numbers.length; i++) {
//     answer.push(numbers[i] * 2);
//   }
//   return answer;
// }

// solution([1, 2, 3, 4, 5]);

// function solution(sides) {
//   var answer = 0;

//   const aaa = sides.sort((a, b) => b - a);

//   if (aaa[0] < aaa[1] + aaa[2]) {
//     answer = 1;
//   } else {
//     answer = 2;
//   }
//   console.log(aaa);
//   return answer;
// }

// solution([3, 6, 2]);
// function solution(array) {
//   var answer = 0;

//   const aaa = array.sort((a, b) => a - b);

//   answer = aaa[Math.ceil(aaa.length / 2) - 1];

//   const bbb = [1, 2, 3, 4, 5];
//   console.log(bbb.length);

//   console.log(answer);
//   return answer;
// }

// solution([9, -1, 0]);

// function solution(my_string) {
//   var answer = '';
//   const aaa = my_string.split('');
//   const bbb = ['a', 'e', 'i', 'o', 'u'];
//   for (let i = 0; i < aaa.length; i++) {
//     for (let z = 0; z < bbb.length; z++) {
//       if (aaa[i] === bbb[z]) {
//         delete aaa[i];
//       }
//     }
//   }

//   answer = aaa.join('');
//   return answer;
// }

// solution('nice to meet you');

// function solution(n) {
//   var answer = 0;

//   const bbb = Math.sqrt(n);
//   const ccc = Number.isInteger(bbb);

//   console.log(ccc);

//   if (Number.isInteger(bbb)) {
//     answer = 1;
//   } else {
//     answer = 2;
//   }
//   console.log(answer);
//   return answer;
// }

// solution(976);

// function solution(n) {
//   var answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 !== 0) {
//       answer.push(i);
//     }
//   }
//   console.log(answer);
//   return answer;
// }

// solution(10);

// function solution(my_string) {
//   var answer = 0;
//   const bbb = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

//   // 문자열도 배열과 똑같네
//   for (let i = 0; i < my_string.length; i++) {
//     for (let z = 0; z < bbb.length; z++) {
//       if (my_string[i] === bbb[z]) {
//         //console.log(i);
//         answer += parseInt(my_string[i]); // 숫자가 발견될 때마다 해당 숫자 값을 더함
//       }
//     }
//   }
//   //console.log(answer); // 총 발견된 숫자의 합을 출력
//   return answer;
// }

// console.log(solution('aAb1B2cC34oOp')); // 테스트

// function solution(n, numlist) {
//   var answer = [];
//   for (let i = 0; i < numlist.length; i++) {
//     if (numlist[i] % n === 0) {
//       console.log(i);
//       answer.push(numlist[i]);
//     }
//   }
//   return answer;
// }

// solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);

// function solution(myString) {
//   var answer = '';

//   answer = myString.toLowerCase();

//   console.log(answer);

//   return answer;
// }

// solution('aBcDeFg');

// function solution(n, control) {
//   var answer = 0;
//   for (let i = 0; i < control.length; i++) {
//     if(control[i === "w"]) {
//       answer += 1
//     }els 
    
//   }
//   return answer;
// }
// solution(0,"wsdawsdassw")
