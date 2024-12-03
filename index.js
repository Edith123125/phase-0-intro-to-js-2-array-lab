let cats = ["Milo", "Otis", "Garfield"];

// Function Definitions
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat() {
  return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
  return cats.slice(1);
}

// functions testing
destructivelyAppendCat("Buster");
console.log("After destructivelyAppendCat:", cats);  // ["Milo", "Otis", "Garfield", "Buster"]

destructivelyPrependCat("Felix");
console.log("After destructivelyPrependCat:", cats);  // ["Felix", "Milo", "Otis", "Garfield", "Buster"]

destructivelyRemoveLastCat();
console.log("After destructivelyRemoveLastCat:", cats);  // ["Felix", "Milo", "Otis", "Garfield"]

destructivelyRemoveFirstCat();
console.log("After destructivelyRemoveFirstCat:", cats);  // ["Milo", "Otis", "Garfield"]

let newCats1 = appendCat("Tom");
console.log("After appendCat:", newCats1);  // ["Milo", "Otis", "Garfield", "Tom"]

let newCats2 = prependCat("Sylvester");
console.log("After prependCat:", newCats2);  // ["Sylvester", "Milo", "Otis", "Garfield"]

let newCats3 = removeLastCat();
console.log("After removeLastCat:", newCats3);  // ["Milo", "Otis"]

let newCats4 = removeFirstCat();
console.log("After removeFirstCat:", newCats4);  // ["Otis", "Garfield"]
