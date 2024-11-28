function solution(book_time) {
  // 시간을 분으로 변환하는 함수
  const toMinutes = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    return hour * 60 + minute;
  };

  // 예약 시간 변환 및 정렬
  const bookings = book_time.map(([start, end]) => [
    toMinutes(start),
    toMinutes(end) + 10,
  ]);
  bookings.sort((a, b) => a[0] - b[0]);

  const rooms = []; // 최소 힙 (각 객실의 퇴실 시간을 저장)

  for (const [start, end] of bookings) {
    // 가장 빨리 퇴실하는 객실의 시간을 확인
    if (rooms.length > 0 && rooms[0] <= start) {
      // 현재 시작 시간보다 이전에 퇴실 가능하면 재사용
      rooms.shift();
    }
    // 새 예약 추가
    rooms.push(end);
    // 퇴실 시간을 기준으로 힙 정렬 유지
    rooms.sort((a, b) => a - b);
  }

  // 필요한 객실 수
  return rooms.length;
}

//다시 한번 복습함
