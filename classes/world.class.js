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









    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw()
        this.run();
        this.setWorld();



    }




    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkCollisions() {
        this.checkCollisionEnemy();
        this.checkCollisionCollectable();
        this.checkIfChickenIsDead();
        this.checkCollisionBottleEndboss() 

    }


    checkCollisionBottleEndboss() {
        this.throwableObjects.forEach((throwable) => {
            if (throwable.isColliding(this.endboss)) {
                this.statusBarEndboss.healthEndboss -= 30;
                this.endboss.bossHit();
                this.statusBarEndboss.setPercantage(this.statusBarEndboss.healthEndboss);
                if (this.statusBarEndboss.healthEndboss <= 0 ) {
                    this.statusBarEndboss.healthEndboss = 0;
                }
            }
        });
    }
    
       
    
    

    checkCollisionEnemy() {

        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !this.checkIfChickenIsDead()) {
                this.character.hit();
                this.statusBarHealth.setPercantage(this.character.energy);
            }
        });
    }


    checkIfChickenIsDead() {
        this.level.enemies.forEach((enemy) => {
            let isCollidingOnX = this.character.x + this.character.width > enemy.x &&
                this.character.x < enemy.x + enemy.width;
            let isCollidingOnY = this.character.y == 75;
            if (isCollidingOnX && isCollidingOnY) {
                this.killEnemy(enemy);
                this.character.velocityY = 0; 
            }
        });
    }




    checkCollisionCollectable() {
        this.level.collectableObjects.forEach((object) => {
            if (this.character.isColliding(object)) {
                if (object.img.currentSrc.includes('coin')) {
                    this.statusBarCoin.coinCount++;
                    this.removeCollectable(object);
                    this.statusBarCoin.setPercantage(this.statusBarCoin.coinCount);
                } else if (object.img.currentSrc.includes('bottle')) {
                    this.statusBarBottle.bottleCount++;
                    this.removeCollectable(object);
                    this.statusBarBottle.setPercantage(this.statusBarBottle.bottleCount);
                }
            }
        });
    }

    removeCollectable(object) {
        let index = this.level.collectableObjects.indexOf(object);
        this.level.collectableObjects.splice(index, 1);
    }

    killEnemy(enemy) {
        enemy.die();

        setTimeout(() => {
            let index = this.level.enemies.indexOf(enemy);
            this.level.enemies.splice(index, 1);
        }, 2000);  
        
    }

    checkThrowObjects() {
        if (this.keyboard.THROW && this.statusBarBottle.bottleCount > 0) {
            let throwable = new bottle(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(throwable);
            this.statusBarBottle.bottleCount--;
            this.statusBarBottle.setPercantage(this.statusBarBottle.bottleCount);

        }
    }

    setWorld() {
        this.enemies.forEach(enemy => {
            enemy.setWorld(this);
            if (enemy instanceof Chicken) {
                enemy.startAnimationChicken();
            }
        });
        this.endboss.setWorld(this); 
        if (this.endboss instanceof Endboss) { 
            this.endboss.startAnimation();
        }
    
        this.character.setWorld(this);
    }
    

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);

        this.addObjectstoMap(this.level.backgroundObjects, this.x);
        this.addObjectstoMap(this.enemies);
        this.addToMap(this.endboss);

        this.addToMap(this.character);

        this.addObjectstoMap(this.collectableObjects);




        this.addObjectstoMap(this.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);
     
        this.ctx.translate(this.camera_x, 0);
        this.addObjectstoMap(this.throwableObjects);
        this.addToMap(this.statusBarEndboss);
        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    };


    addObjectstoMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);

        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);


        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}