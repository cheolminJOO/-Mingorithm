/* global BigInt */

function solution(a, b) {
  var answer = '';
  answer = String(BigInt(a) + BigInt(b));
  // answer = a+ b;

  console.log(answer);
  return answer;
}

solution('18446744073709551615', '287346502836570928366');
