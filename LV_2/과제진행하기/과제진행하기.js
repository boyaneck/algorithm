//새로운 과제를 시작할 시각에는, 새로운 과제를 우선
//진행중 과제가 끝이났을때 , 1.멈춘 과제가 있으면 이어서 진행, 2.만약 멈춘시간에 새로시작해야할 과제가 있다면
//새로시작할 과제 우선
//멈춰둔 과제가 여러개면 "가장 최근에 멈춘 과제 우선"

// function solution(plans) {
//   //먼저 2차원 배열의 string_time을 비교하기 쉽게 분단위로 바꾸어 오름차순으로 정렬(일찍 시작하는 과목순)
//   const arr = plans
//     .map((plan) => {
//       const [subject, starting_time, run_time] = plan;
//       const [hour, minute] = starting_time.split(":");
//       const reverse_time = Number(hour) * 60 + Number(minute);

//       return [subject, reverse_time, Number(run_time)];
//     })
//     .sort((a, b) => a[1] - b[1]);

//   //
//   const result = [];
//   const stopped_subject = [];

//   //첫번째 과제의 시작 시간으로 초기화
//   let current = arr[0][1];

//   for (let i = 0; i < arr.length; i++) {
//     const [subject, starting_time, run_time] = arr[i];
//     const total_time = starting_time + run_time;

//     if (arr[i][1] + arr[i][2] < arr[i + 1][1] + arr[i + 1][2]) {
//       result.push(arr[i]);
//     }
//   }

//   //흠좀 더 좋은 방법이 있을 것 같은데...

//   return answer;
// }
function solution(plans) {
  // 1. 시간을 분 단위로 변환하고, 시작 시간이 빠른 순으로 정렬
  const arr = plans
    .map(([subject, starting_time, run_time]) => {
      const [hour, minute] = starting_time.split(":");
      const start = Number(hour) * 60 + Number(minute);
      return [subject, start, Number(run_time)];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = []; // 완료된 과제를 저장
  const stopped = []; // 중단된 과제를 저장

  for (let i = 0; i < arr.length; i++) {
    const [subject, start, duration] = arr[i];
    const nextStart = arr[i + 1] ? arr[i + 1][1] : Infinity;

    // 현재 과제를 끝낼 수 있는 경우
    if (start + duration <= nextStart) {
      result.push(subject); // 현재 과제를 완료
      let remainingTime = nextStart - (start + duration);

      // 중단된 과제 처리
      while (remainingTime > 0 && stopped.length > 0) {
        const [stoppedSubject, stoppedTime] = stopped.pop();
        if (stoppedTime <= remainingTime) {
          result.push(stoppedSubject); // 중단된 과제를 완료
          remainingTime -= stoppedTime;
        } else {
          stopped.push([stoppedSubject, stoppedTime - remainingTime]);
          break;
        }
      }
    } else {
      // 현재 과제를 중단
      stopped.push([subject, start + duration - nextStart]);
    }
  }

  // 중단된 과제를 모두 처리
  while (stopped.length > 0) {
    const [stoppedSubject] = stopped.pop();
    result.push(stoppedSubject);
  }

  return result;
}
