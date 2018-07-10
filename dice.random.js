//console.log(Math.random());    //gives a random value b/w 0 and 1
//console.log(Math.random() * 10); //gives a  random value b/w 0 and 10
//console.log(Math.random() * 10 + 1); //gives a  random value b/w 0 and 11

let upper = 6
let lower = 1
let random = Math.floor(Math.random() * (upper - lower + 1)) + lower ;
console.log(random);

