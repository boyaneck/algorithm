// function gameOver(arr, s) {
//   //가로 체크
//   for (var y = 0; y < 3; y++) {
//     if (arr[y][0] === s && arr[y][1] === s && arr[y][2] === s) {
//       return true;
//     }
//   }

//   // 세로 체크
//   for (var x = 0; x < 3; x++) {
//     if (arr[0][x] === s && arr[1][x] === s && arr[2][x] === s) {
//       return true;
//     }
//   }

//   //대각선 체크
//   if (arr[0][0] == s && arr[1][1] == s && arr[2][2] == s) {
//     return true;
//   }
// }
// //
function solution(board) {
  let oCount = 0;
  let xCount = 0;
  for (const row of board) {
      for (const cell of row) {
          if (cell === 'O') oCount++;
          else if (cell === 'X') xCount++;
      }
  }

  // O와 X의 개수가 유효한지 확인
  if (oCount < xCount || oCount > xCount + 1) {
      return 0;
  }

  // 승자 확인 함수
  const checkWinner = (mark) => {
      // 가로 체크
      for (let i = 0; i < 3; i++) {
          if (board[i][0] === mark && board[i][1] === mark && board[i][2] === mark) return true;
      }
      // 세로 체크
      for (let j = 0; j < 3; j++) {
          if (board[0][j] === mark && board[1][j] === mark && board[2][j] === mark) return true;
      }
      // 대각선 체크
      if (board[0][0] === mark && board[1][1] === mark && board[2][2] === mark) return true;
      if (board[0][2] === mark && board[1][1] === mark && board[2][0] === mark) return true;
      return false;
  };
  //틱택토 및 풀었던 것들 패턴 복습공부