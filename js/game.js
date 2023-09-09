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
    let fullscreenImage = document.getElementById('fullscreenimg');
    
    fullscreenImage.addEventListener("click", closeFullscreen); // Hinzufügen des neuen Handlers
  }
  
  function openFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      console.log(elem);
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    }
   styleFullscreen();
  }
  
  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
    
    let fullscreenImage = document.getElementById('fullscreenimg');
    fullscreenImage.removeEventListener("click", closeFullscreen); // Entfernen des alten Handlers
    fullscreenImage.addEventListener("click", fullscreen); // Hinzufügen des neuen Handlers
    removeStyleFullscreen();
   
  }
  

  document.addEventListener("fullscreenchange", function() {
    if (!document.fullscreenElement) {
     removeStyleFullscreen();
    }
  });
  

  function styleFullscreen() {
    document.getElementById('startimage').style.top = '22%';
    document.getElementById('startbutton').style.top = '25%';
    document.getElementById('containerrighttop').style.top = '30px';
     document.getElementById('endImageContainer').style.top = '22%';
  }

  function removeStyleFullscreen() {
    document.getElementById('startimage').style.top = '16%';
    document.getElementById('startbutton').style.top = '20%';
    document.getElementById('containerrighttop').style.top = '-10px';
    document.getElementById('endImageContainer').style.top = '16%';
  }

  function openInfo() {
    document.getElementById('keys').classList.add('d-flex');
    document.getElementById('keys').classList.add('showkeys');
  }

  function closeInfo() {
    document.getElementById('keys').classList.remove('d-flex');
    document.getElementById('keys').classList.remove('showkeys');

  }
  
  
  








