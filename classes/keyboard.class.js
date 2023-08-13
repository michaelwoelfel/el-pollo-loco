class Keyboard {
    LEFT = false;
    RIGHT = false;
    DOWN = false;
    UP = false;
    SPACE = false;

}

document.addEventListener('keydown', (event) => {
if (event['key'] == "a" || event['key'] == "ArrowLeft" ) keyboard.LEFT = true;
if (event['key'] == "d" || event['key'] == "ArrowRight" ) keyboard.RIGHT= true;
if (event['key'] == "w" || event['key'] == "ArrowUp" ) keyboard.UP = true;
if (event['key'] == "s" || event['key'] == "ArrowDown" ) keyboard.DOWN = true;
if (event['key'] == " ") keyboard.SPACE = true; 
});


document.addEventListener('keyup', (event) => {
    if (event['key'] == "a" || event['key'] == "ArrowLeft" ) keyboard.LEFT = false;
    if (event['key'] == "d" || event['key'] == "ArrowRight" ) keyboard.RIGHT= false;
    if (event['key'] == "w" || event['key'] == "ArrowUp" ) keyboard.UP = false;
    if (event['key'] == "s" || event['key'] == "ArrowDown" ) keyboard.DOWN = false;
    if (event['key'] == " ") keyboard.SPACE = false; 
    });