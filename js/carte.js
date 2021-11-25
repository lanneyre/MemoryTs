export default class Carte {
    constructor(id) {
        this.id = id;
        this.img = "./img/" + id + ".png";
    }
    getCarteHTML(position) {
        let html = '<div class="carte" carte-id="' + this.id + '" id="carte' + position + '"><div class="carteContent"><div class="front"></div><div class="back" style="background-image: url(\'' + this.img + '\')"></div></div></div>';
        return html;
    }
}
