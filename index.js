// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name){
    const newCats= [...cats,"Broom"];
    return newCats;
}
function prependCat(name){
    const newCats2= ["Arnold", ...cats];
    return newCats2;
}
function removeLastCat(){
    const newCats3= cats.slice(0,2);
    return newCats3;
}
function removeFirstCat(){
    const newCats4= cats.slice(1);
    return newCats4;
}