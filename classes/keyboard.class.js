class Keyboard {
    LEFT = false;
    RIGHT = false;
    DOWN = false;
    UP = false;
    SPACE = false;

}

document.addEventListener('keydown', (event) => {
console.log(event);
if (event['key'] == "a" || event['key'] == "ArrowLeft" ) LEFT = true;
if (event['key'] == "d" || event['key'] == "ArrowRight" ) RIGHT= true;
if (event['key'] == "w" || event['key'] == "ArrowUp" ) UP = true;
if (event['key'] == "s" || event['key'] == "ArrowDown" ) DOWN = true;
if (event['key'] == " ") SPACE = true; 
});