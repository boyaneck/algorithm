function solution(picks, minerals) {
    let diamond = picks[0];
    let iron = picks[1];
    let stone = picks[2];

    const totalPicks = diamond + iron + stone;
    const sectionCount = Math.ceil(minerals.length / 5);

    if (totalPicks >= sectionCount) {
        // 모든 구간을 캘 수 있는 경우
    } else {
        // 곡괭이가 부족한 경우
        minerals = minerals.slice(0, totalPicks * 5);
    }

    const sections = [];
    for (let i = 0; i < minerals.length; i += 5) {
        sections.push(minerals.slice(i, i + 5));
    }

    const sectionCosts = sections.map(section => {
        let diamondCost = 0;
        let ironCost = 0;
        let stoneCost = 0;

        //DP와 Greedy를 이용해야 하는데 ..


    }
}