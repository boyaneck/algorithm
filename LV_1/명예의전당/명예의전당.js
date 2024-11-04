//k번째 이내이면 명예의 전당의 등극
//k일까지는 모든 가수가 명예의 전당 -> k일 이후 에는 기존명예의 전당목록 k번째 가수보다 높으면 명예의 전당등극->상대는 내려옴

function solution(k, score) {
  let hof = [];
  let answer = [];
  //조건
  //1.k일 이전까지 모든 가수는 명예의 전당에 입성
  //2.k일 이후부터는 명예의 전당에 k명만 들어가고 가장 낮은 수를 배열에 리턴
  //3.k+1일부터 새로운 값을 비교를 통해 if 명예의 전당>새로들어올 점수 -> 명예의 전당의 최하위 점수
  //4.else 이면 새로운 값이 들어가고, 다시 내림차순 뒤 , 최하위 값 리턴
  for (let i = 0; i < score.length; i++) {
    hof.push(score[i]);
    hof.sort((a, b) => b - a);

    //음...
    if (hof.length >= k) {
      answer.push(hof[k - 1]);
    } else {
      answer.push(hof[hof.length - 1]);
    }
  }
  return answer;
}
