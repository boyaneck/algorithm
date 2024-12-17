function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array(rows)
      .fill(null)
      .map(() => Array(cols).fill(false));
    const islandDays = [];
  
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // 상하좌우 이동
  
    // DFS 함수
    const dfs = (row, col) => {
      if (
        row < 0 ||
        row >= rows ||
        col < 0 ||
        col >= cols ||
        maps[row][col] === "X" ||
        visited[row][col]
      ) {
        return 0;
      }
  
      visited[row][col] = true;
      let sum = parseInt(maps[row][col]);