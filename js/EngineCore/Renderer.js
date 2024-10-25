
const XFONT = 8;
const YFONT = 16

export default class Renderer {

    layers = new Map();
    
    constructor(parameters) {

    }

    addlayer(layer) {
        this.layers.set(layer.name, layer);
    }

    draw() {
        this.layers.forEach(layer => {
            var layerEl;
            if (layer.isVisible) {
                if (!(layerEl = document.getElementById(layer.name))) {
                    layerEl = document.createElement('div');
                    layerEl.classList.add("randomgame-layerclass");
                    layerEl.id = layer.name;
                    document.getElementById("Container-renderer-randomgame").appendChild(layerEl);
                }
                layerEl.style.color = layer.color.Str_color;
                layerEl.style.width = layer.size.x * XFONT  + "px";
                layerEl.style.height = layer.size.y * YFONT + "px";
                layerEl.style.left = layer.pos.x * XFONT    + "px";
                layerEl.style.top = layer.pos.y * YFONT     + "px";
                layerEl.style.zIndex = layer.zindex;



                layer.draw_requests.forEach(element => {
                    if(element.isVisible){
                        var tileEl;
                        if(!(tileEl = document.getElementById(element.unq_id))){
                            tileEl = document.createElement('div');
                            tileEl.classList.add("randomgame-tileclass");
                            tileEl.id = element.unq_id;
                            layerEl.appendChild(tileEl);
                        }
                        tileEl.style.color           = element.color.Str_color;
                        tileEl.style.backgroundColor = element.bg_color.Str_color;
                        tileEl.style.left            = element.pos.x * XFONT + "px";
                        tileEl.style.top             = element.pos.y * YFONT + "px";
                        tileEl.style.width          =  XFONT  + "px";
                        tileEl.style.height         =  YFONT + "px";
                        tileEl.innerHTML             = element.char;
                    }
                });
                layer.clear();
            }
        });
    }


}