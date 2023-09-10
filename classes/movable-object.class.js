/**
 * Class representing a movable object in the game.
 * @extends DrawableObject
 */
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


    /**
    * Sets the world where the object exists.
    * @param {Object} world - The world object.
    */
    setWorld(world) {
        this.world = world;

    }


    /**
     * Applies gravity to the object.
     */
    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    /**
     * Checks if the object is above ground.
     * @returns {boolean}
     */
    isAboveGround() {

        if (this instanceof bottle) {
            return true
        } else {
            return this.y < 130;
        }
    }


    /**
    * Moves the object to the right.
    */
    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }
    /**
        * Moves the object to the left.
        */
    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
    }

    /**
     * Handles when the object is hit.
     */
    hit() {
        this.energy -= 2;

        if (this.energy < 0) {
            this.energy = 0;
        }
        this.lastHit = new Date().getTime();
    }
    /**
        * Handles when the boss character is hit.
        */
    bossHit() {
        this.energyBoss -= 30;

        if (this.energyBoss < 0) {
            this.energyBoss = 0;
        }
        this.lastHitBoss = new Date().getTime();
    }

    /**
        * Checks for collision with another movable object.
        * @param {MovableObject} mo - The other movable object.
        * @returns {boolean}
        */
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height;
    }

    /**
         * Checks for collision from above with another movable object.
         * @param {MovableObject} mo - The other movable object.
         * @returns {boolean}
         */
    isCollidingFromAbove(mo) {
        return this.x < mo.x + mo.width &&
            this.x + this.width - 30 > mo.x &&
            this.y + this.height > mo.y &&
            this.y + 50 < mo.y;
    }

    /**
     * Plays the animation for the object.
     * @param {Array<string>} images - Array of image paths for the animation.
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;

    }

    /**
     * Causes the object to jump.
     */
    jump() {
        this.speedY = 40;
    }


    /**
     * Checks if the object is hurt.
     * @returns {boolean}
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    /**
    * Checks if the boss character is hurt.
    * @returns {boolean}
    */
    bossIsHurt() {
        let timepassed = new Date().getTime() - this.lastHitBoss;
        timepassed = timepassed / 1000;
        return timepassed < 2;
    }

    /**
     * Checks if the object is dead.
     * @returns {boolean}
     */
    isDead() {
        return this.energy <= 0;

    }

    /**
    * Checks if the boss character is dead.
    * @returns {boolean}
    */
    bossIsDead() {
        return this.energyBoss <= 0;
    }

}





