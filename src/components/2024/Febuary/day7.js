// function solution(arr) {
//   var answer = '';
//   answer = arr.join('');
//   return answer;
// }

// solution(['a', 'b', 'c']);

// function solution(my_string, k) {
//   var answer = '';
//   const aa = my_string;
//   const bb = [];

//   for (let i = 0; i < k; i++) {
//     bb.push(aa);
//   }

//   answer = bb.join('');
//   return answer;
// }

// solution('string', 3);

// function solution(a, b) {
//   var answer = 0;

//   const cc = [a, b];
//   const dd = Number(cc.join(''));

//   const ee = [b, a];
//   const ff = Number(ee.join(''));

//   if (dd > ff) {
//     answer = dd;
//   } else {
//     answer = ff;
//   }
//   console.log(answer);
//   return answer;
// }

// solution(9, 91);


function solution(a, b) {
  var answer = 0;
  const aa = [a,b]
  const bb = Number(aa.join(''))
  const cc = 2*a*b

  if(bb>cc) {
    answer = bb
  }else {
    answer = cc
  }

  return answer;
}

solution(2,91)

