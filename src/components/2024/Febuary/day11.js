function solution(num, n) {
  var answer = 0;
  if (num % 2 === 0) {
    answer = 1;
  } else {
    answer = 0;
  }
  console.log(answer);
  return answer;
}

solution(34, 3);
