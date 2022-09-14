// Q. 믹스커피만 먹었던 피카츄는 불현듯 진짜 커피를 먹기로 마음 먹었습니다. 그래서 생각해보니, 커피콩이 있다는 것을 알게되었습니다. 커피에 대한 정보를 수집하고 나니 너무나 많은 재료들이 존재해서 혼란스럽기만 합니다. 그래서 마음먹고 이참에 커피를 만들기 위해 '코딩(?)'으로 데이터를 분류하기로 마음 먹었습니다.

// Q. let americano = {} 라는 객체에 어떤 값을 분류해 넣어놓으면, 풍부한 데이터를 확보할 수 있을까요?

// Q. 자유롭게 커피의 재료를 위 americano 라는 객체에 분류하여 정리해 봅시다!

let importantItem = {};
let notImportantItem = {};

function cofeeItem(menu, item, cool) {
  this.name = menu;
  this.item = item;
  this.cool = cool;
}

let cofee = new cofeeItem("아메리카노", "커피콩", "아이스 얼음많이");

console.log(cofee);
