import Tapis from "./tapis.js";

alert("Bienvenue dans ce jeu de mémory");
let t:number = parseInt(prompt("Combien de cartes différentes voulez vous ?")!);
new Tapis(t);