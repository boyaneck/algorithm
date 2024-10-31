unction solution(plans) {
    // 시간 문자열을 분으로 변환하는 함수
    const timeToMinutes = (time) => {
      const [hours, minutes] = time.split(":").map(Number);
      return hours * 60 + minutes;
    };
  
    // plans를 시작 시간 순으로 정렬
    plans.sort((a, b) => timeToMinutes(a[1]) - timeToMinutes(b[1]));
  
    const result = [];            // 완료된 과제 순서 저장
    const pausedTasks = [];       // 멈춘 과제 스택
    let currentTime = 0;          // 현재 시간
  
    for (let i = 0; i < plans.length; i++) {
      const [name, start, playtime] = plans[i];
      const startTime = timeToMinutes(start);
      const duration = parseInt(playtime, 10);
  
      // 이전 과제를 완료할 수 있는지 체크
      while (pausedTasks.length > 0 && currentTime <= startTime) {
        const [pausedName, pausedTime] = pausedTasks.pop();
        if (currentTime + pausedTime <= startTime) {
          currentTime += pausedTime;
          result.push(pausedName);
        } else {
          pausedTasks.push([pausedName, pausedTime - (startTime - currentTime)]);
          currentTime = startTime;
          break;
        }
      }