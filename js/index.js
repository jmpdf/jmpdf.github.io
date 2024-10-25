import Color from "./EngineCore/Color.js";
import Layer from "./EngineCore/Layer.js";
import Renderer from "./EngineCore/Renderer.js";
import Tile from "./EngineCore/Tile.js";
import Vetor from "./EngineCore/Vetor.js";

// tiles
//
//
//
//
//
/*
var a = new Vetor;
console.log(a);

var b = document.getElementById("teste123");
var c = new Color(0,255,255,0.5);
b.style.color = c.Str_color;
*/
/*
var a = new Tile();
var b = new Tile();

console.log(a);
console.log(b);
console.log(Tile.prototype.id);

console.log(Vetor.zero());*/
var backgorundlayer = new Layer("background",new Vetor(45,5),new Color(), new Vetor(80,20),true,1);
var actorlayer      = new Layer("actors",new Vetor(45,5),new Color(), new Vetor(80,20),true,2);

var render = new Renderer();

render.addlayer(backgorundlayer);
render.addlayer(actorlayer);

var backgroundtiles = Array.from({length: 80*20}, (_,i) => {
    return new Tile('.',new Vetor((i%80),(Math.floor(i/80))),new Color('0','0','0','1'),new Color('0','0','0','1'),true);
})

let player = new Tile(
    '@',
    Vetor.zero(),
    new Color('255','0','0','1'),
    new Color('0','0','0','0'),
    true
);

backgroundtiles.forEach(element => {
    backgorundlayer.draw(element);
});


//console.log(backgroundtiles);

actorlayer.draw(player);
render.draw();

addEventListener('keydown', a => {
    switch (a.key) {
        case 'ArrowUp':
            player.pos.add(new Vetor(0,-1));
            break;
        case 'ArrowDown':
            player.pos.add(new Vetor(0,1));
            break;
        case 'ArrowLeft':
            player.pos.add(new Vetor(-1,0));
            break;
        case 'ArrowRight':
            player.pos.add(new Vetor(1,0));
            break;
    }
    backgroundtiles[player.pos.x + player.pos.y*80].color.blue = parseInt(backgroundtiles[player.pos.x + player.pos.y*80].color.blueIn) + 120;
    backgorundlayer.draw(backgroundtiles[player.pos.x + player.pos.y*80]);
    actorlayer.draw(player);
    render.draw();
})





