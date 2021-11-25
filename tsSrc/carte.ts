export default class Carte {

    public id:number;
    private img:string;

    constructor(id:number) {
        this.id = id;
        this.img = "./img/"+id+".png";
    }
    public getCarteHTML(position:number):string{
        let html = '<div class="carte" carte-id="'+this.id+'" id="carte'+position+'"><div class="carteContent"><div class="front"></div><div class="back" style="background-image: url(\''+this.img+'\')"></div></div></div>';
        return html;
    }
}