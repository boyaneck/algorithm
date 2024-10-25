//갈색 격자의 수와 노란색 격자의 수를 배열에 담아 "카펫의 크기"를 알아내는 문제
//갈색 격자 8 ~ 5000, 노란색 1 ~ 2,000,000 , 가로 >= 길이

//
function solution(brown, yellow) {
  let answer = [];
  let sum = brown + yellow;

  //brown이 8이상이기에 가로,세로 길이는 최소 3
  //(brown+yellow) / x= y or (brown + yellow)/ y =x
  //(x-2)* (y-2) = yellow
  //column =세로 row = 가로
  for (let column = 3; column <= (brown + yellow) / column; column++) {
    if (sum % column === 0) {
      let row = sum / column;
      //column과 row 구한 값
      if ((column - 2) * (row - 2) === yellow) {
        return [row, column];
      }
    }
  }
  return answer;
}
