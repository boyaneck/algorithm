function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let deliverStack = [];
  let pickupStack = [];

  // 스택에 배달 및 수거 정보 저장
  for (let i = 0; i < n; i++) {
    deliverStack.push(deliveries[i]);
    pickupStack.push(pickups[i]);
  }

  while (deliverStack.length > 0 || pickupStack.length > 0) {
    // 스택에서 0인 값들을 제거 (뒤에서부터)
    while (
      deliverStack.length > 0 &&
      deliverStack[deliverStack.length - 1] === 0
    ) {
      deliverStack.pop();
    }
    while (
      pickupStack.length > 0 &&
      pickupStack[pickupStack.length - 1] === 0
    ) {
      pickupStack.pop();
    }

    // 배달과 수거해야 할 곳이 없는 경우 종료
    if (deliverStack.length === 0 && pickupStack.length === 0) {
      break;
    }

    // 가장 먼 집 위치 계산
    const maxDistance = Math.max(deliverStack.length, pickupStack.length);

    // 이동 거리 누적
    answer += maxDistance * 2;

    // 배달 처리
    let deliverCap = cap;
    while (deliverStack.length > 0 && deliverCap > 0) {
      const delivery = deliverStack.pop();
      if (delivery <= deliverCap) {
        deliverCap -= delivery;
      } else {
        deliverStack.push(delivery - deliverCap);
        deliverCap = 0;
      }
    }

    // 수거 처리
    let pickupCap = cap;
    while (pickupStack.length > 0 && pickupCap > 0) {
      const pickup = pickupStack.pop();
      if (pickup <= pickupCap) {
        pickupCap -= pickup;
      } else {
        pickupStack.push(pickup - pickupCap);
        pickupCap = 0;
      }
    }
  }

  return answer;
}

//과제진행하기 택배배달 오답풀이
