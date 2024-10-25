export default class Vetor {

    x = 0;
    y = 0;



    constructor(Op_x,Op_y) {
        this.x = Op_x || 0;
        this.y = Op_y || 0;
    }

    add(Vetor){
        this.x += Vetor.x;
        this.y += Vetor.y;
    }


    static zero() {
        return(new Vetor);
    }
}