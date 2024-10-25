import Color from "./Color.js";
import Vetor from "./Vetor.js";

export default class Tile {

    char      = ' ';
    pos       = Vetor.zero(); 
    color     = new Color();
    bg_color  = new Color()
    isVisible = false;

    unq_id = 0;
    
    constructor(Op_char, Op_pos, Op_color, Op_bg_color ,  Op_isVisible) {
        
        this.char      = Op_char      || ' ';
        this.pos       = Op_pos       || Vetor.zero();
        this.color     = Op_color     || new Color();
        this.bg_color  = Op_bg_color  || new Color();
        this.isVisible = Op_isVisible || false;

        this.unq_id = Tile.prototype.id;
        Tile.prototype.id++;
    }
}
Tile.prototype.id = 0;