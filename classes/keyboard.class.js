/**
 * Class representing the Keyboard state.
 * This class contains flags to keep track of the state of various keys.
 * @class
 */
class Keyboard {
    LEFT = false;
    RIGHT = false;
    DOWN = false;
    UP = false;
    SPACE = false;
    TRHOW = false;

}


/**
 * Keydown event listener.
 * Sets corresponding flags based on the keys pressed.
 */
document.addEventListener('keydown', (event) => {
if (event['key'] == "a" || event['key'] == "ArrowLeft" ) keyboard.LEFT = true;
if (event['key'] == "d" || event['key'] == "ArrowRight" ) keyboard.RIGHT= true;
if (event['key'] == "w" || event['key'] == "ArrowUp" ) keyboard.UP = true;
if (event['key'] == "s" || event['key'] == "ArrowDown" ) keyboard.DOWN = true;
if (event['key'] == "e") keyboard.THROW = true;
if (event['key'] == " ") keyboard.SPACE = true; 
});

/**
 * Keyup event listener.
 * Resets corresponding flags when keys are released.
 */
document.addEventListener('keyup', (event) => {
    if (event['key'] == "a" || event['key'] == "ArrowLeft" ) keyboard.LEFT = false;
    if (event['key'] == "d" || event['key'] == "ArrowRight" ) keyboard.RIGHT= false;
    if (event['key'] == "w" || event['key'] == "ArrowUp" ) keyboard.UP = false;
    if (event['key'] == "s" || event['key'] == "ArrowDown" ) keyboard.DOWN = false;
    if (event['key'] == "e") keyboard.THROW = false;
    if (event['key'] == " ") keyboard.SPACE = false; 
    });

// Allgemeine Funktionen zur Steuerung
function activateRight(e) {
    e.preventDefault();
    keyboard.RIGHT = true;
}
function deactivateRight(e) {
    e.preventDefault();
    keyboard.RIGHT = false;
}
function activateLeft(e) {
    e.preventDefault();
    keyboard.LEFT = true;
}
function deactivateLeft(e) {
    e.preventDefault();
    keyboard.LEFT = false;
}
function activateJump(e) {
    e.preventDefault();
    keyboard.UP = true;
}
function deactivateJump(e) {
    e.preventDefault();
    keyboard.UP = false;
}
function activateThrow(e) {
    e.preventDefault();
    keyboard.THROW = true;
}
function deactivateThrow(e) {
    e.preventDefault();
    keyboard.THROW = false;
}

// Event Listener für 'right' Richtung
document.getElementById('right').addEventListener('touchstart', activateRight);
document.getElementById('right').addEventListener('touchend', deactivateRight);
document.getElementById('right').addEventListener('mousedown', activateRight);
document.getElementById('right').addEventListener('mouseup', deactivateRight);

// Event Listener für 'left' Richtung
document.getElementById('left').addEventListener('touchstart', activateLeft);
document.getElementById('left').addEventListener('touchend', deactivateLeft);
document.getElementById('left').addEventListener('mousedown', activateLeft);
document.getElementById('left').addEventListener('mouseup', deactivateLeft);

// Event Listener für 'jump' Richtung
document.getElementById('jump').addEventListener('touchstart', activateJump);
document.getElementById('jump').addEventListener('touchend', deactivateJump);
document.getElementById('jump').addEventListener('mousedown', activateJump);
document.getElementById('jump').addEventListener('mouseup', deactivateJump);

// Event Listener für 'throw' Richtung
document.getElementById('throw').addEventListener('touchstart', activateThrow);
document.getElementById('throw').addEventListener('touchend', deactivateThrow);
document.getElementById('throw').addEventListener('mousedown', activateThrow);
document.getElementById('throw').addEventListener('mouseup', deactivateThrow);


    