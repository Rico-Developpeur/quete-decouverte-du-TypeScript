// ajout du type pour name, ajout de void car pas de return et ajout de export devant la fonction afin de ne pas avoir de message d'erreur
export function hello(name: string): void {
  console.log("Hello " + name);
}

const firstName = "bob";

// la console affiche Hello bob apres avoir lancé node index.js
hello(firstName);
// la console affiche Hello bob marley apres avoir lancé node index.js
hello(firstName + " marley");

// ajout du type pour a, b et la reponse; ajout de export devant la fonction afin de ne pas avoir de message d'erreur
export function concat(a: string, b: string): string {
  return a + b;
}

const wcs = concat("Wild", concat("Code", "School"));
// la console affiche WildCodeSchool apres avoir lancé node index.js
console.log(wcs);
