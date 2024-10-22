function solution(players, callings) {
  const playerIndices = new Map();

  // 초기 위치를 기록합니다.
  players.forEach((player, index) => {
    playerIndices.set(player, index);
  });

  // 호출된 순서대로 처리합니다.
  callings.forEach((player) => {
    const currentIdx = playerIndices.get(player);
    const newIdx = currentIdx - 1;

    if (newIdx >= 0) {
      // 위치 변경
      const swappedPlayer = players[newIdx];
      players[newIdx] = player;
      players[currentIdx] = swappedPlayer;

      // 인덱스 업데이트
      playerIndices.set(player, newIdx);
      playerIndices.set(swappedPlayer, currentIdx);
    }
  });

  return players;
}
