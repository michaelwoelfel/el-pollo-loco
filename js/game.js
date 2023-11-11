let canvas;
let world;
let keyboard = new Keyboard();
let theme = new Audio('audio/theme.mp3')
let media_muted;
theme.volume = 0.2;


/**
 * Initialize the game.
 * This function is responsible for setting up the canvas, the world and the game theme.
 * @async
 */
async function init() {
  canvas = document.getElementById('canvas');
  world = new World(canvas, keyboard);
  if (!media_muted) {
    theme.play();
  }
  document.getElementById('startimage').classList.add('d-none');
  document.getElementById('startbutton').classList.add('d-none');
}

/**
 * Ends the game in a loss.
 * @async
 */
async function endGameLoose() {
  document.getElementById('endImageContainer').classList.remove('d-none');
}
/**
 * Ends the game in a win.
 * @async
 */
async function endGameWin() {
  document.getElementById('endImageContainer-win').classList.remove('d-none');
}


/**
 * Restarts the game.
 * @async
 */
async function restartGame() {
  location.reload();
}


/**
 * Removes the end game image.
 */
function remove() {
  document.getElementById('endImageContainer').classList.add('d-none');

}


/**
 * Toggles the sound mute state.
 * Changes the game theme's volume and updates the mute button's image.
 */
function muteSound() {
  let img = document.getElementById('mute');
  if (media_muted) {
    theme.volume = 0.5;
    img.src = 'img/sound_on.png';
  } else {
    theme.volume = 0;
    img.src = 'img/sound.png';
  }
  media_muted = !media_muted;
}


/**
 * Enters fullscreen mode.
 */
function fullscreen() {
  let fullscreen = document.getElementById('fullscreen');
  openFullscreen(fullscreen);
  let fullscreenImage = document.getElementById('fullscreenimg');
  fullscreenImage.addEventListener("click", closeFullscreen); // Hinzufügen des neuen Handlers
}


/**
 * Opens fullscreen for the specified element.
 * @param {HTMLElement} elem - The element to display in fullscreen mode.
 */
function openFullscreen(elem) 
{
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
  
}

/**
* Exits fullscreen mode.
*/
function closeFullscreen() {
  try {
    if (document.fullscreenElement) {  
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
    }
  } catch (e) {
  }
}



document.addEventListener("fullscreenchange", function () {
  if (!document.fullscreenElement) {
    removeStyleFullscreen();
  }
});


/**
 * Adds specific styles when the game is in fullscreen mode.
 */
function styleFullscreen() {
  document.getElementById('startimage').classList.add('top22');
  document.getElementById('startbutton').classList.add('top25');
  document.getElementById('containerrighttop').classList.add('top30');
  document.getElementById('endImageContainer').classList.add('top22');


}

/**
 * Removes specific styles when the game is not in fullscreen mode.
 */
function removeStyleFullscreen() {
  document.getElementById('startimage').classList.remove('top22');
  document.getElementById('startbutton').classList.remove('top25');
  document.getElementById('containerrighttop').classList.remove('top30');
  document.getElementById('endImageContainer').classList.remove('top22');
}

/**
 * Opens an informational overlay about the game controls.
 */
function openInfo() {
  document.getElementById('keys').classList.add('d-flex');
  document.getElementById('keys').classList.add('showkeys');
}


/**
 * Closes the informational overlay about the game controls.
 */
function closeInfo() {
  document.getElementById('keys').classList.remove('d-flex');
  document.getElementById('keys').classList.remove('showkeys');
}











