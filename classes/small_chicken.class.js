
/**
 * Class representing a small chicken enemy in the game.
 * @extends MovableObject
 */
class smallChicken  extends MovableObject{
    otherDirection = false;
    y = 350;
    height = 80;
    width = 80;
    currentImage = 0;
    chickenDeadSound = new Audio('audio/chicken_dies.mp3')
    walkingInterval = null;
    deathInterval = null;
    static nextId = 5;  
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ];



    IMAGES_WALK = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
        
    ];

    /**
     * Creates a new small chicken object.
     * @param {Object} world - The game world.
     */
    constructor(world){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.id = smallChicken.nextId++;  
        this.world = world;
        this.x = 500 + Math.random() * 1000;
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.25;
        this.chickenDeadSound.volume = 0.3;
       
    }

    
     /**
     * Starts the chicken's animation.
     */
        startAnimationChicken() {
            this.animate();
        }

     /**
     * Handles the animation logic.
     */
        animate() {
            clearInterval(this.walkingInterval);
            clearInterval(this.deathInterval);
                this.walkingInterval = setInterval(() => {
                    this.moveLeft();
                    this.otherDirection = false;
                }, 1000 / 60);
                this.deathInterval = setInterval(() => {
                    this.playAnimation(this.IMAGES_WALK);
                }, 100);
        }
    
    
       
         /**
     * Executes the dying animation and sound for the chicken.
     */
        die() {
            if (!media_muted) {
                this.chickenDeadSound.play();
            }
            clearInterval(this.walkingInterval);  
            clearInterval(this.deathInterval); 
            this.deathInterval = setInterval(() => {
                this.playAnimation(this.IMAGES_DEAD);
            }, 100); 
        }
        

        
    
    }
    