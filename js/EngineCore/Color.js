export default class Color {

    //variaveis de cor do rgba, alpha sendo a opacidade da cor, 0 sendo transparente.
    //tipo: String
    redIn   = '0'; 
    greenIn = '0'; 
    blueIn  = '0';
    alphaIn = '0';

    //versão das variaveis rgb tranformada em uma unica string compativel com css
    StrC = "";

    constructor(Op_red, Op_green, Op_blue, Op_alpha) {
        this.redIn   = Op_red   || '255';
        this.greenIn = Op_green || '255';
        this.blueIn  = Op_blue  || '255';
        this.alphaIn = Op_alpha ||   '1';
        this.StrC = `rgba(${this.redIn}, ${this.greenIn}, ${this.blueIn}, ${this.alphaIn})`;
    }

    get Str_color(){
        return this.StrC;
        
    }
    set red(value){
        this.redIn = value;
        this.StrC = `rgba(${this.redIn}, ${this.greenIn}, ${this.blueIn}, ${this.alphaIn})`;
    }
    set reen(value){
        this.greenIn = value;
        this.StrC = `rgba(${this.redIn}, ${this.greenIn}, ${this.blueIn}, ${this.alphaIn})`;
    }
    set blue(value){
        this.blueIn = value;
        this.StrC = `rgba(${this.redIn}, ${this.greenIn}, ${this.blueIn}, ${this.alphaIn})`;
        console.log('a');
    }
    set alpha(value){
        this.alphaIn = value;
        this.StrC = `rgba(${this.redIn}, ${this.greenIn}, ${this.blueIn}, ${this.alphaIn})`;
    }
    
}