// 강사는 KDT 훈련생을 데이터로 관리하려고 한다. 각각의 개별 내용은 다르지만, 모두 같은 항목을 가지고 있다.
// 자바스크립트에서는 이것을 어떻게 처리할 수 있을까?

const studentList = [
  "강예훈",
  "김성현",
  "류주완",
  "마근원",
  "박종인",
  "박재형",
  "송형주",
  "양상희",
  "원두진",
  "유민호",
  "이상호",
  "이소영",
  "이은수",
  "정동욱",
  "정윤환",
  "정정원",
  "지영빈",
  "한용준",
  "황초영",
  "김근수",
  "김승현",
  "전형민",
  "정연주",
  "이아연",
  "최화연",
];
let random = Math.floor(Math.random() * 20);
console.log(random);
const profile = {
  id: 0,
  age: random,
  phone: "010-5555-6666",
  place: "조선",
};

for (let i = 0; i < studentList.length; i++) {
  profile.id = studentList[i];
  console.log(profile);
}
