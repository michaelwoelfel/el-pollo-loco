let canvas;
let world;
let keyboard = new Keyboard();
let theme = new Audio('audio/theme.mp3')
let media_muted = false;


async function init() {
    canvas = document.getElementById('canvas');
    
    world = new World(canvas, keyboard);
    if (media_muted == false) {
        theme.play();
    }
    
    document.getElementById('startimage').classList.add('d-none');
    document.getElementById('startbutton').classList.add('d-none');

}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
  }

async function endGameLoose() {
  
    document.getElementById('endImageContainer').classList.remove('d-none');

}

async function endGameWin() {
   
    document.getElementById('endImageContainer').classList.remove('d-none');
}

async function restartGame() {
   
   location.reload();
    
}



function remove() {

    document.getElementById('endImageContainer').classList.add('d-none');
   

}


function muteSound() {
    let img = document.getElementById('mute');
    
    if (media_muted) {
        theme.volume = 1;
        img.src = 'img/sound_on.png';  // Bild für eingeschalteten Ton
    } else {
        theme.volume = 0;
        img.src = 'img/sound.png'; // Bild für stummgeschalteten Ton
    }

    media_muted = !media_muted; 
    console.log(media_muted);
}


function fullscreen() {
    let fullscreen = document.getElementById('fullscreen');
openFullscreen(fullscreen);
}





function openFullscreen(elem) {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}


function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}









