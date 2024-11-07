//새로운 과제를 시작할 시각에는, 새로운 과제를 우선
//진행중 과제가 끝이났을때 , 1.멈춘 과제가 있으면 이어서 진행, 2.만약 멈춘시간에 새로시작해야할 과제가 있다면
//새로시작할 과제 우선
//멈춰둔 과제가 여러개면 "가장 최근에 멈춘 과제 우선"

function solution(plans) {
  //먼저 2차원 배열의 시간을 확인
  const arr = plans
    .map((plan) => {
      const [subject, starting_time, during] = plan;
      const [hour, minute] = starting_time.split(":");
      const reverse_time = Number(hour) * 60 + Number(minute);

      return [subject, reverse_time, Number(during)];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  const first = object_arr.shift();
  let current = first[1];

  const stack = [first];
  var answer = [];
  console.log(plans);
  return answer;
}
