// let first = setTimeout(() => console.log("first"), 3000);
// let second = setTimeout(() => console.log("second"), 2000);
// let third = setTimeout(() => console.log("third"), 1000);
// 원래 위에서 아래로 내려오는데 이건 거꾸로임
// third --> second --> first

// let first = setTimeout(() => {
//   console.log("first");

//   let second = setTimeout(() => {
//     console.log("second");
//   }, 2000);
//   let third = setTimeout(() => {
//     console.log("third");
//   }, 1000);
// }, 3000);
// 이건 무조건 3초 기다림
// first --> third --> second
// let first = setTimeout(() => {
//   console.log("first");
//   let second = setTimeout(() => {
//     console.log("second");
//     let third = setTimeout(() => {
//       console.log("third");
//       let fourtn = setTimeout(() => {
//         console.log("fourth");
//       }, 1000);
//     }, 1000);
//   }, 2000);
// }, 3000);
// 지옥 시작

let test = new Promise(function (resolve, reject) {
  console.log(typeof resolve);
  // function
  console.dir(typeof reject);
  // function
  console.dir(resolve);
  // [Function (anonymous)]
});
console.dir(test);
// pending --> 보류 중
