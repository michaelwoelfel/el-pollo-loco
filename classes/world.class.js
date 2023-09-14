/**
 * Class representing the game world.
 * 
 * @property {Object} level - The current game level.
 * @property {Character} character - The main game character.
 * @property {Array} enemies - List of enemies in the current level.
 * @property {Endboss} endboss - The end boss character of the level.
 * @property {Array} clouds - List of cloud objects in the level.
 * @property {Array} backgroundObjects - List of background objects in the level.
 * @property {Array} throwableObjects - List of objects that can be thrown.
 * @property {Array} collectableObjects - List of objects that can be collected.
 * @property {Object} keyboard - The keyboard object to handle inputs.
 * @property {number} camera_x - The camera's x-position.
 * @property {statusbarHealth} statusBarHealth - Status bar for character's health.
 * @property {statusbarCoin} statusBarCoin - Status bar for collected coins.
 * @property {statusbarBottle} statusBarBottle - Status bar for bottles.
 * @property {statusbarEndboss} statusBarEndboss - Status bar for end boss's health.
 * @property {number} coinCount - The count of collected coins.
 */
class World {
    level = level1;
    character = new Character();
    enemies = level1.enemies;
    endboss = new Endboss();
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    throwableObjects = [];
    collectableObjects = level1.collectableObjects;
    keyboard;
    camera_x = 0;
    statusBarHealth = new statusbarHealth();
    statusBarCoin = new statusbarCoin();
    statusBarBottle = new statusbarBottle();
    statusBarEndboss = new statusbarEndboss();
    coinCount = 0;
    grabBottle_sound = new Audio('audio/grab_bottle.mp3');
    smashBottle_sound = new Audio('audio/smash bottle.mp3');
    coin_sound = new Audio('audio/coin sound.mp3');
  


    /**
        * Initializes a new game world.
        * @param {HTMLCanvasElement} canvas - The canvas to draw on.
        * @param {Object} keyboard - The keyboard object to handle inputs.
        */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw()
        this.run();
        this.setWorld();
        this.lastKillTime = null;
        this.smashBottle_sound.volume = 0.3;
        this.grabBottle_sound.volume = 0.3;
        this.coin_sound.volume = 0.3;
    }

    /**
     * Game loop to run collision checks.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
        setInterval(() => {
            this.checkIfChickenIsDead();
            this.checkCollisionBottleChicken();
        }, 0.5);
    }

  /**
     * Check various types of collisions.
     */
    checkCollisions() {
        this.checkCollisionEnemy();
        this.checkCollisionCollectable();
        this.checkCollisionBottleEndboss();
        this.checkCollisionEndboss();
    }

 /**
     * Check if bottle is colliding with end boss.
     */
    checkCollisionBottleEndboss() {
        this.throwableObjects.forEach((throwable) => {
            if (throwable.isColliding(this.endboss)) {
                this.statusBarEndboss.healthEndboss -= 30;
                this.endboss.bossHit();
                this.throwableObjects.splice(0, 1);
                if (!media_muted) { this.smashBottle_sound.play(); }
                this.statusBarEndboss.setPercantage(this.statusBarEndboss.healthEndboss);
                if (this.statusBarEndboss.healthEndboss <= 0) {
                    this.statusBarEndboss.healthEndboss = 0;
                }
            }
        });
    }

/**
     * Check if bottle is colliding with chicken.
     */
    checkCollisionBottleChicken() {
        this.throwableObjects.forEach((throwable, throwableIndex) => {
            this.enemies.forEach((enemy) => {
                if (throwable.isColliding(enemy)) {
                    this.killEnemy(enemy);
                    this.throwableObjects.splice(throwableIndex, 1);
                    if (!media_muted) {
                        this.smashBottle_sound.play();
                    }
                }
            });
        });
    }


    /**
     * Check if character is colliding width enemy
     */
    checkCollisionEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !this.checkIfChickenIsDead()) {
                this.character.hit();
                this.statusBarHealth.setPercantage(this.character.energy);
            }
        });
    }

    /**
     * Check if character is colliding with end boss.
     */
    checkCollisionEndboss() {
        if (this.character.isColliding(this.endboss)) {
            this.character.hit();
            this.statusBarHealth.setPercantage(this.character.energy);
        }
    }

/**
     * Check if chicken enemies are dead.
     */
    checkIfChickenIsDead() {
        this.level.enemies.forEach((enemy) => {
            if (!enemy.isDead) { return; }
            let tolerance = 5;
            let isCollidingOnX = (this.character.x + this.character.width > enemy.x + tolerance) &&
                (this.character.x + tolerance < enemy.x + enemy.width);
            let isAboveEnemy = (this.character.y + this.character.height == enemy.y + 60);
            let isFallingDown = (this.character.speedY > 0);
            if (isCollidingOnX && isAboveEnemy && isFallingDown) {
                this.killEnemy(enemy);

            }
        });
    }

    /**
     * Check if the main character is colliding with collectable objects.
     */
    checkCollisionCollectable() {
        this.level.collectableObjects.forEach((object) => {
            if (this.character.isCollidingFromAbove(object)) {
                if (object.img.currentSrc.includes('coin')) {
                    this.collectCoin(object);
                } else if (object.img.currentSrc.includes('bottle')) {
                    this.collectBottle(object);
                }
            }
        });
    }

     /**
    * Adds objects to the game map.
    * @param {Array} objects - The objects to add.
    */
    collectCoin(object) {
        if (!media_muted) {
            this.coin_sound.play();
        }
        this.statusBarCoin.coinCount++;
        this.removeCollectable(object);
        this.statusBarCoin.setPercantage(this.statusBarCoin.coinCount);
    }
/**
     * Increment the bottle count and trigger related actions when a bottle is collected.
     * @param {Object} object - The bottle object to be collected.
     */
    collectBottle(object) {
        this.statusBarBottle.bottleCount++;
        if (!media_muted) {
            this.grabBottle_sound.play();
        }
        this.removeCollectable(object);
        this.statusBarBottle.setPercantage(this.statusBarBottle.bottleCount);
    }

    /**
     * Remove a collectable object (like a bottle or coin) from the game world.
     * @param {Object} object - The collectable object to be removed.
     */
    removeCollectable(object) {
        let index = this.level.collectableObjects.indexOf(object);
        this.level.collectableObjects.splice(index, 1);
    }
 /**
     * Eliminate an enemy from the game world after ensuring there's a delay between successive kills.
     * @param {Object} enemy - The enemy object to be killed.
     */
    killEnemy(enemy) {
        const currentTime = new Date().getTime();
        if (this.lastKillTime && currentTime - this.lastKillTime < 600) {
            return;
        }
        this.lastKillTime = currentTime;
        enemy.die();
        setTimeout(() => {
            let index = this.level.enemies.indexOf(enemy);
            this.level.enemies.splice(index, 1);
        }, 1000);
    }

    /**
     * Check if the THROW key is pressed to throw a bottle and perform related actions.
     */
    checkThrowObjects() {
        if (this.keyboard.THROW && this.statusBarBottle.bottleCount > 0) {
            let throwable = new bottle(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(throwable);
            this.statusBarBottle.bottleCount--;
            this.statusBarBottle.setPercantage(this.statusBarBottle.bottleCount);

        }
    }
  /**
     * Initialize or reset the world by setting enemies, the end boss, and the character in their respective environments.
     */
    setWorld() {

        this.enemies.forEach(enemy => {
            enemy.setWorld(this);
            if (enemy instanceof Chicken || enemy instanceof smallChicken) {
                enemy.startAnimationChicken();
            }
        });
        this.endboss.setWorld(this);
        if (this.endboss instanceof Endboss) {
            this.endboss.startAnimation();
        }
        this.character.setWorld(this);
        setInterval(() => {
            this.statusBarEndboss.updateEndbossX(this.endboss.x);
        }, 10);

    }



      /**
     * Main drawing loop for the game.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectstoMap(this.level.backgroundObjects, this.x);
        this.addObjectstoMap(this.enemies);
        this.addToMap(this.endboss);
        this.addToMap(this.character);
        this.addObjectstoMap(this.collectableObjects);
        this.addObjectstoMap(this.clouds);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectstoMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };

  /**
     * Adds objects to the game map.
     * @param {Array} objects - The objects to add.
     */
    addObjectstoMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

     /**
     * Add a single object to the game map.
     * @param {Object} mo - The movable object to add.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /**
     * Flip image for objects that need to change direction.
     * @param {Object} mo - The movable object to flip.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    
    /**
     * Flip image back to original orientation.
     * @param {Object} mo - The movable object to flip back.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}