function gameOver(arr, s) {
  //가로 체크
  for (var y = 0; y < 3; y++) {
    if (arr[y][0] === s && arr[y][1] === s && arr[y][2] === s) {
      return true;
    }
  }

  // 세로 체크
  for (var x = 0; x < 3; x++) {
    if (arr[0][x] === s && arr[1][x] === s && arr[2][x] === s) {
      return true;
    }
  }

  //대각선 체크
  if (arr[0][0] == s && arr[1][1] == s && arr[2][2] == s) {
    return true;
  }
}
//
