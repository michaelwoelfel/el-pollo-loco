let canvas;
let world;
let keyboard = new Keyboard();



async function init() {
    canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
   document.getElementById('startimage').classList.add('d-none');
    


}

function endGame() {
    document.getElementById('endImage').classList.add('d-flex');
}