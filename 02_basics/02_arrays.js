const marvelHeroes = ["Thor", "Ironman" , "Spiderman"];
const DcHeroes = ["Superman", "Antman" , "batman"];
marvelHeroes.push(DcHeroes);//push in existing array and data is pushed as it is
console.log(marvelHeroes);
console.log(marvelHeroes[3]);
console.log(marvelHeroes[3][1]);


const heroes = marvelHeroes.concat(DcHeroes);//push in new array and data is pushed based on datatype
console.log(heroes);

const newHeroes= [... marvelHeroes , ...DcHeroes];//spread operators
/* mostly used */
console.log(newHeroes);

const another_array = [1,2,3,4,[2,3,4],5,[6,7,[4,5]]];
const new_another_array = another_array.flat(Infinity);
console.log(new_another_array);


console.log(Array.isArray("hitesh"));//asking whether its a array or not

console.log(Array.from("hitesh"));

//interesting
console.log(Array.from({name : "Hitesh"}));//tell whether to make array of values or keys otherwise itll give u a empty list

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1 , score2 , score3))