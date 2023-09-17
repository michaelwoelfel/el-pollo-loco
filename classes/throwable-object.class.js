/**
 * Class representing a throwable bottle object in the game.
 * @extends MovableObject
 */
class bottle extends MovableObject {
    x = -500;
    y = 100;
    speedY = 30;
    speedX = 20;
    smashBottle_sound = new Audio('audio/smash bottle.mp3');
    IMAGES_BOTTLE = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    IMAGES_BOTTLE_THROW = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];


    IMAGES_BOTTLE_SPLASH = [
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png',
        'img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png',
         'img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png',
         'img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png',
    ];

 /**
     * Initializes a new bottle object.
     * @param {number} x - The initial x-coordinate.
     * @param {number} y - The initial y-coordinate.
     */
    constructor(x,y) {
        super().loadImage('img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png');
        this.loadImages(this.IMAGES_BOTTLE_THROW);
        this.loadImages(this.IMAGES_BOTTLE_SPLASH);
        this.x = x;
        this.y = y;
        this.throw(this.x,this.y);
        this.smashBottle_sound.volume = 0.3;
    }
    
    /**
     * Initiates the throwing action of the bottle.
     * @param {number} x - The initial x-coordinate.
     * @param {number} y - The initial y-coordinate.
     */
  throw(x,y) {
        this.x = x;
        this.y = y;
        this.speedY = 30;
        this.applyGravity();
        setInterval(()=>{
            this.animateThrow();
            this.x += 20;  
        },50);
        setTimeout(() => {
            this.animateSplash();
            if (!media_muted) {   this.smashBottle_sound.play();}
        }, 500);
  }



  /**
     * Animates the throwing action of the bottle.
     */
  animateThrow() {
    setInterval(() =>{
       this.playAnimation(this.IMAGES_BOTTLE_THROW);
    },100);
}

 /**
     * Animates the splash when the bottle breaks.
     */
animateSplash() {
    setInterval(() =>{
       this.playAnimation(this.IMAGES_BOTTLE_SPLASH);
    },100);
}
}