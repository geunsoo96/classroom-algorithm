// let number = 0;
// const numberCheck = setInterval(() => {
//   number++;
//   console.log(number);
//   if (number === 10) {
//     clearInterval(numberCheck);
//   }
// }, 500);

const numberMission = new Promise((resolve, reject) => {
  resolve(1);
});

numberMission
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
    return (value += 1);
  })
  .then((value) => {
    console.log(value);
  });
