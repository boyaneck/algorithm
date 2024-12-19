function solution(maps) {
  const rows = maps.length;
  const cols = maps[0].length;
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const islandDays = [];

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]; // 상하좌우 이동

  // DFS 함수
  const dfs = (row, col) => {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      maps[row][col] === "X" || // 바다일 경우
      visited[row][col] // 이미 방문했을 경우
    ) {
      return 0;
    }

    visited[row][col] = true;
    let sum = parseInt(maps[row][col]);

    for (const [dx, dy] of directions) {
      sum += dfs(row + dx, col + dy);
    }

    return sum;
  };

  // 모든 좌표 탐색
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j] && maps[i][j] !== "X") {
        const islandSum = dfs(i, j);
        islandDays.push(islandSum);
      }
    }
  }

  // 결과가 없으면 [-1] 반환
  if (islandDays.length === 0) {
    return [-1];
  }

  // 결과 정렬 후 반환
  return islandDays.sort((a, b) => a - b);
}
