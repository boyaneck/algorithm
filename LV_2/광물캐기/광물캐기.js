//1.5개씩 짤라 구간으로 나누기
//2.각 5개의 구간의 피로도 계산을 위해 diamond로 해당 구간들 피로도 계산하기
//3.

function solution(picks, minerals) {
  const [diamond, iron, stone] = picks;

  const total_pick = diamond + iron + stone;
  const mineral_count = Math.ceil(minerals.length / 5);

  const mineral_section = [];
  for (let i = 0; i < minerals.length; i += 5) {
    mineral_section.push(minerals.slice(i, i + 5));
  }

  //다디아 곡괙이 기준으로 내림차순
  mineral_section.sort((a, b) => {
    const point1 = a.reduce(
      (acc, mineral) =>
        acc + (mineral === "diamond" ? 1 : mineral === "iron" ? 1 : 1),
      0
    );
    const point2 = b.reduce(
      (acc, mineral) =>
        acc + (mineral === "diamond" ? 1 : mineral === "iron" ? 1 : 1),
      0
    );

    return point2 - point1;
  });

  let exhausted;

  mineral_section.forEach((sec) => {
    if (picks[0] > 0) {
      exhausted += mineral_section.length;
      picks[0]--;
    } else if (picks[1] > 0) {
      exhausted += mineral_section.reduce((acc, mineral) => acc + mineral);
    }
  });
}
