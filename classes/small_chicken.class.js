class smallChicken  extends MovableObject{
   
    otherDirection = false;
    y = 370;
    height = 60;
    width = 60;

    currentImage = 0;
    chickenDeadSound = new Audio('audio/chicken_dies.mp3')

    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ];



    IMAGES_WALK = [
        '../img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
        
    ];
    constructor(world){
       
        super().loadImage('../img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.world = world;
        
        this.x = 500 + Math.random() * 1000;
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.25;
       
    }

    
        walkingInterval = null;
        deathInterval = null;
    
        startAnimationChicken() {
            this.animate();
        }
    
        animate() {
            // Stellen Sie sicher, dass alte Animationen gestoppt werden
            clearInterval(this.walkingInterval);
            clearInterval(this.deathInterval);
    
            if (!this.checkIfChickenIsDead()) {
                this.walkingInterval = setInterval(() => {
                    this.moveLeft();
                    this.otherDirection = false;
                }, 1000 / 60);
                this.deathInterval = setInterval(() => {
                    this.playAnimation(this.IMAGES_WALK);
                }, 100);
    
            } else {
                this.deathInterval = setInterval(() => {
                  this.die();
                }, 100);
               
            }
        }
    
        checkIfChickenIsDead() {
            return this.world.checkIfChickenIsDead();
        }
    
        die() {
            clearInterval(this.walkingInterval);  
            clearInterval(this.deathInterval); 
            this.deathInterval = setInterval(() => {
                this.playAnimation(this.IMAGES_DEAD);
            }, 100);
            if (!media_muted) {
                this.chickenDeadSound.play();
            }
           
        }
        

        
    
    }
    