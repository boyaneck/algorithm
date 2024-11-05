//문제해석
//사과상자의 점수 1~k 점 , 사과 한 상자의 안에 들어가는 사과 개수 m 개  -> [1,2,3,1,2,4,5]
//사과상자의 가격 결정 요인 : 1.가장낮은 점수의 사과 * 사과상자안의 사과 개수
// 최대 이익을 내기 위해서는 어떻게 해야할까?

//이해 : 최대 이익을 내기 위해서는 낮은점수의 사과끼리 먼저 포장하여 높은 점수의 사과를 많이 포장하는 것
//배열 오름차순 정렬
function solution(k, m, score) {
  let startidx = 0;
  let sum = 0;
  // score.sort((a,b)=>a-b);
  score.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    let slicedScore = score.slice(startidx, startidx + m);
    console.log("sliced", slicedScore);
    // let minScore=slicedScore[0];
    let minScore = Math.min(...slicedScore);
    if (slicedScore.length === m) {
      sum += minScore * m;
    }
    startidx += m;
  }
  return sum;
}
