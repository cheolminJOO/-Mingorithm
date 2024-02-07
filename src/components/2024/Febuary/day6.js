// function solution(my_string, overwrite_string, s) {
//   var answer = '';
//   const front = my_string.substring(0, s);
//   const back = my_string.substring(overwrite_string.length + s);

//   answer = front + overwrite_string + back;

//   return answer;
// }

// solution('He11oWor1d', 'lloWorl', 2);

// function solution(str1, str2) {
//   var answer = '';
//   const aa = str1.split('');
//   const bb = str2.split('');
//   const cc = str1 + str2;
//   const ee = [];

//   for (let i = 0; i < cc.length; i++) {
//     ee.push(aa[i]);
//     ee.push(bb[i]);
//   }

//   answer = ee.join('');

//   return answer;
// }

// solution('aaaaa', 'bbbbb');

const bb = '손흥민';
const cc = bb.split('흥');
console.log(cc);
