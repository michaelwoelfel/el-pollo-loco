class MovableObject extends DrawableObject {
    
    speed = 0.1;
    otherDirection = false;
    speedY = 0;
    acceleration = 5;
    energy = 100;
    lastHit = 0;
    lastHitBoss = 0;
    coinCount = 0;
    bottleCount = 0;
    energyBoss = 100;
    
 


    world;

    setWorld(world) {
        this.world = world;
      
    }
    
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
           
        }, 1000 / 25);
    }

    isAboveGround() {

        if (this instanceof bottle) {
            return true} else {
        return this.y < 130;
    }
    }



   

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;


    }


    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;

    }

    hit() {
        this.energy -= 2;
       
        if (this.energy < 0) {
            this.energy = 0;
        }
        this.lastHit = new Date().getTime();
    }

    bossHit() {
        this.energyBoss -= 30;
       
        if (this.energyBoss < 0) {
            this.energyBoss = 0;
        }
        this.lastHitBoss = new Date().getTime();
    }

    isColliding(mo) {
        return this.x + this.width > mo.x && 
        this.y + this.height > mo.y &&
        this.x < mo.x &&
        this.y < mo.y + mo.height;
    }

    isCollidingFromAbove(mo) {
        return this.x  < mo.x + mo.width &&
               this.x + this.width - 30 > mo.x &&
               this.y + this.height > mo.y &&
               this.y + 50  < mo.y;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
        
    }

    jump() {
        this.speedY = 40;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    bossIsHurt() {
        let timepassed = new Date().getTime() - this.lastHitBoss;
        timepassed = timepassed / 1000;
        return timepassed < 2;
    }

    isDead() {
        return this.energy <= 0;
        
    }

    bossIsDead() {
        return this.energyBoss <= 0;
    }

}





