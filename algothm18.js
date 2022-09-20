const pokemon = [
  "이상해씨",
  "이상해풀",
  "이상해꽃",
  "파이리",
  "리자드",
  "리자몽",
  "꼬부기",
  "어니부기",
  "거북왕",
  "캐터피",
];

const type1 = ["풀", "불꽃", "물", "벌레", "노말"];
const type2 = ["독", "비행"];

function pokemonData(number, id, type1, type2) {
  this.number = number;
  this.id = id;
  this.type1 = type1;
  this.type2 = type2;
}

for (let i = 0; i < pokemon.length; i++) {
  let random1 = type1[Math.floor(Math.random() * 5)];
  let random2 = type2[Math.floor(Math.random() * 2)];
  let data = new pokemonData(i, pokemon[i], random1, random2);
  console.log(data);
}
