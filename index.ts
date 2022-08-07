// ajout du type pour name et ajout de export devant la fonction afin de ne pas avoir de message d'erreur
export function hello(name: string) {
  console.log("Hello " + name);
}

const firstName = "bob";

// la console affiche Hello bob apres avoir lancé node index.js
hello(firstName);
// la console affiche Hello bob marley apres avoir lancé node index.js
hello(firstName + " marley");

// ajout du type pour a, b et ajout de export devant la fonction afin de ne pas avoir de message d'erreur
export function concat(a: string, b: string) {
  return a + b;
}

const wcs = concat("Wild", concat("Code", "School"));
// la console affiche WildCodeSchool apres avoir lancé node index.js
console.log(wcs);
