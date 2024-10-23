function solution(number, limit, power) {
  //기사단의 각 기사에게 1~number까지 번호가 지정
  //number=5 , 총 다섯명의 기사이며 [1,2,3,4,5] -> 각각의 기사가 index번호를 자신의 번호로 지정
  //각각의 기사는 약수 개수에 해당하는 공격력을 가진 무기 구매, number=15 약수 =4개 =공격력 4
  // ,단 이 공격력이 > 제한수치 넘으면
  //기관에서 정한 공격력을 가진 무기 구매
  //ex) 기사단원의 number=15 , 약수는 4 , 그러나 제한수치 3을 초과 -> 기관에서 정한 공격력 부여 = 2
  //무기를 만들때 공격력 1당 1kg가 필요 , 
    let answer = 0;
    
    //1.기사단의 번호 설정
    let arr=Array.from({length : number } , (v, i) => i + 1)
   //2. 각각의 index의 약수 갯수 구하기
  arr.forEach((point,idx)=>{
      let count =0; 
    
    for(let i=1; i<=Math.ceil(point/2); i++){
    point % i ===0? count ++:false
    }
     count ++
     count >limit ? arr[idx]=power:arr[idx]=count
  })

    return arr.reduce((acc,cur)=>acc+cur )-1;


}