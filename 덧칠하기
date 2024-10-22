//
function solution(n, m, section) {
  //m길이의 붓을 통해 section을 파악하고, 가장 최소한의 붓터치로 하게끔
  //m길이의 붓이 배열을 넘지 않아야 함 .

  let answer = 0;

  let arr = new Array(n).fill(true);
  let arr2 = new Array(n);
  console.log(arr2);
  section.forEach((e) => (arr[e - 1] = false));

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) {
      answer += 1;
      i += m - 1;
    }
  }
  //
  return answer;
}
