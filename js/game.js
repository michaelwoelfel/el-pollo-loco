let canvas;
let world;
let keyboard = new Keyboard();



async function init() {
    canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
    


}