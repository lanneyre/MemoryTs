import Carte from "./carte.js";
export default class Tapis {
    constructor(t) {
        if (isNaN(t) || t > 20) {
            t = 20;
            alert("20 paires vont être générées !");
        }
        if (t < 2) {
            t = 2;
            alert("2 paires vont être générées !");
        }
        // console.log(t)
        this.taille = t;
        // this.cartes = new Array<Carte>();
        // this.cartesRetournes = new Array<Carte>();
        this.tps = 0;
        this.generateTapis();
    }
    generateNbAleatoire() {
        let nbAleatoire = new Array();
        for (let i = 0; i < this.taille; i++) {
            let nb;
            do {
                nb = Math.round(Math.random() * (20 - 1) + 1);
                //console.log(nb);
            } while (nbAleatoire.includes(nb));
            nbAleatoire.push(nb);
            //console.log(nbAleatoire);
            //test
        }
        return nbAleatoire;
    }
    randomiserCarte() {
        let i, j, tmp;
        for (i = Tapis.cartes.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = Tapis.cartes[i];
            Tapis.cartes[i] = Tapis.cartes[j];
            Tapis.cartes[j] = tmp;
        }
    }
    static retourneAllCarte() {
        let cartes = document.querySelectorAll(".rotate");
        cartes.forEach(carte => {
            let parent = carte.parentElement;
            let id = parent.getAttribute("carte-id");
            //console.log(id);
            let aRetourne = true;
            Tapis.cartesRetournes.forEach(element => {
                if (element.id == id) {
                    aRetourne = false;
                }
            });
            if (aRetourne) {
                carte.classList.remove("rotate");
            }
        });
    }
    static checkTapis() {
        if (Tapis.cartes.length == Tapis.cartesRetournes.length) {
            setTimeout(() => {
                document.getElementById("tapis").innerHTML = "<h1 class='bravo'>Félicitations</h1>";
            }, 1000);
        }
    }
    static checkCartesRetourne() {
        if (Tapis.cartesRetournes.length % 2 == 0) {
            let last = Tapis.cartesRetournes.length - 1;
            let ante = last - 1;
            if (Tapis.cartesRetournes[last].id != Tapis.cartesRetournes[ante].id) {
                Tapis.cartesRetournes.splice(ante, 2);
                setTimeout(Tapis.retourneAllCarte, 1000);
            }
            Tapis.checkTapis();
        }
        // console.log(Tapis.cartes);
        // console.log(Tapis.cartesRetournes);
    }
    retourneCarte(event) {
        let c = event.target;
        let parent = c.parentElement;
        //parent.className += " rotate";
        parent.classList.add("rotate");
        let pos = parent.parentElement;
        let carte = Tapis.cartes[parseInt(pos.getAttribute("id").slice(5))];
        Tapis.cartesRetournes.push(carte);
        //Tapis.cartes.splice(parseInt(pos.getAttribute("id").slice(5)),1); 
        Tapis.checkCartesRetourne();
    }
    addCarteToTapis() {
        let position = 0;
        let cartesHTML = "";
        Tapis.cartes.forEach(element => {
            cartesHTML += element.getCarteHTML(position++);
        });
        document.getElementById("tapis").innerHTML = cartesHTML;
        let cartes = document.querySelectorAll(".carte .front");
        cartes.forEach(carte => {
            carte.addEventListener("click", this.retourneCarte);
        });
    }
    generateTapis() {
        let nb = this.generateNbAleatoire();
        nb.forEach(element => {
            Tapis.cartes.push(new Carte(element));
            Tapis.cartes.push(new Carte(element));
        });
        this.randomiserCarte();
        this.addCarteToTapis();
        // console.log(Tapis.cartes);
        // console.log(Tapis.cartesRetournes);
    }
}
Tapis.cartes = new Array();
Tapis.cartesRetournes = new Array();
