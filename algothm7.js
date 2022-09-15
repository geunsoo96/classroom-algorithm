let numberData = [444, 23, 2022, 8, 16, 12, 22];
// Q. 가장 큰 수는 numberData[2]에 있는 2022이다.
// 이것을 console 에 출력해보기
let bigNumber = Math.max(...numberData);
console.log(bigNumber);
// 또는
let maxNumber = Math.max.apply(null, numberData);
console.log(maxNumber);
