function solution(my_string, overwrite_string, s) {
  var answer = '';
  const front = my_string.substring(0, s);
  const back = my_string.substring(overwrite_string.length + s);

  answer = front + overwrite_string + back;

  return answer;
}

solution('He11oWor1d', 'lloWorl', 2);
