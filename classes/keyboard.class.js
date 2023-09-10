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


    /**
 * Touch event listener for 'right' direction.
 */
    document.getElementById('right').addEventListener('touchstart', (e) =>{
        e.preventDefault();
        keyboard.RIGHT = true;
    });
    document.getElementById('right').addEventListener('touchend', (e) =>{
        e.preventDefault();
        keyboard.RIGHT = false;
    });


    /**
 * Touch event listener for 'left' direction.
 */
    document.getElementById('left').addEventListener('touchstart', (e) =>{
        e.preventDefault();
        keyboard.LEFT = true;
    });
    document.getElementById('left').addEventListener('touchend', (e) =>{
        e.preventDefault();
        keyboard.LEFT = false;
    });
    

    /**
 * Touch event listener for 'jump' direction.
 */
    document.getElementById('jump').addEventListener('touchstart', (e) =>{
        e.preventDefault();
        keyboard.UP = true;
    });
    document.getElementById('jump').addEventListener('touchend', (e) =>{
        e.preventDefault();
        keyboard.UP = false;
    });


    /**
 * Touch event listener for 'throw' direction.
 */
    document.getElementById('throw').addEventListener('touchstart', (e) =>{
        e.preventDefault();
        keyboard.THROW = true;
    });
    document.getElementById('throw').addEventListener('touchend', (e) =>{
        e.preventDefault();
        keyboard.THROW = false;
    });
    
    
    

    