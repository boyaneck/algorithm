function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 방향 벡터 설정 (상, 하, 좌, 우)
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // 특정 위치에서 목표 지점까지의 최단 시간을 계산하는 BFS 함수
  function bfs(startX, startY, target) {
    const queue = [[startX, startY, 0]]; // 시작 위치와 이동 시간을 포함
    const visited = Array.from(Array(n), () => Array(m).fill(false));
    visited[startX][startY] = true;

    while (queue.length) {
      const [x, y, time] = queue.shift();

      // 목표 지점에 도달한 경우
      if (maps[x][y] === target) return time;

      // 4방향 탐색
      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        // 미로를 벗어나지 않고, 벽이 아니며, 방문하지 않은 경우
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          maps[nx][ny] !== "X" &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny, time + 1]);
        }
      }
    }
    return -1; // 목표 지점에 도달할 수 없는 경우
  }

  // 시작점, 레버, 출구 위치 찾기
  let startX, startY, leverX, leverY, exitX, exitY;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") [startX, startY] = [i, j];
      if (maps[i][j] === "L") [leverX, leverY] = [i, j];
      if (maps[i][j] === "E") [exitX, exitY] = [i, j];
    }
  }

  // 시작점에서 레버까지의 시간 계산
  const toLeverTime = bfs(startX, startY, "L");
  if (toLeverTime === -1) return -1; // 레버에 도달할 수 없는 경우

  // 레버에서 출구까지의 시간 계산
  const toExitTime = bfs(leverX, leverY, "E");
  if (toExitTime === -1) return -1; // 출구에 도달할 수 없는 경우

  // 총 최소 시간 반환
  return toLeverTime + toExitTime;
}



function solution(maps) {

  //시작점 ,출구,레버 찾기 
  
  let start,exit,lever
  
  for (let i=0; i<maps.length; i++){
      for(let j=0; j<map[0].length; j++){
           if(map[i][j]==="S") start=[i][j]
          else if(map[i][j] ==="E") exit=[i][j]
          else if(map[i][j] ==="L") lever=[i][j]
          
          
      }
  }
  
  function bfs(start,target){
  const queue=[[...start,0]]
  const visited=Array(maps.length).fill("").map(()=>Array(maps[0].length).fill("X"))    
  visited[start[0]][start[1]]= true
      

  const direction=[[0,1],[0,-1],[1,0],[-1,0]]
    while(queue.length >0){
        
        
    }
  }

  //