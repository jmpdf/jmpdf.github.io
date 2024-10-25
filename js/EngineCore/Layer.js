import Color from "./Color.js";
import Vetor from "./Vetor.js";

export default class Layer {

    name          = "";
    pos           = Vetor.zero();
    color         = new Color;
    size          = Vetor.zero();
    zindex        = 0;
    draw_requests = []; // list of modifications to do


    isVisible = false;


    constructor(_name,Op_pos, Op_color, Op_size, Op_isVisible, Op_zindex) {
        this.pos       = Op_pos       || Vetor.zero();
        this.color     = Op_color     || new Color;
        this.size      = Op_size      || Vetor.zero();
        this.isVisible = Op_isVisible || false;
        this.name      = _name;
        this.zindex    = Op_zindex    || 0;
    }

    draw(tile){
        this.draw_requests.push(tile);
    }

    clear(){
        this.draw_requests = [];
    }
}