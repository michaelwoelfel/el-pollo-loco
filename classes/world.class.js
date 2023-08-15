class World {

    level = level1;
    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    throwableObjects = [];
    collectableObjects = level1.collectableObjects;
    keyboard;
    camera_x = 0;
    statusBarHealth =   new statusbarHealth();
    statusBarCoin =  new statusbarCoin();
    statusBarBottle =  new statusbarBottle();
    coinCount = 0;
   
   
  



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw()
        this.setWorld();
        this.run();
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }
    
    checkCollisions() {
        this.level.collectableObjects.forEach((object) => {
            if (this.character.isColliding(object)) {
               console.log(object.img.currentSrc); 
               if (object.img.currentSrc.includes('coin')) {
                this.statusBarCoin.coinCount ++;
                this.removeCollectable(object);
                    this.statusBarCoin.setPercantage(this.statusBarCoin.coinCount);
               } else if (object.img.currentSrc.includes('bottle')) {
                this.statusBarBottle.bottleCount ++;
                this.removeCollectable(object);
                this.statusBarBottle.setPercantage(this.statusBarBottle.bottleCount);
               }
               
            }
            
            
        });
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHealth.setPercantage(this.character.energy);
            }
        });
    }

    removeCollectable(object) {
        let index = this.level.collectableObjects.indexOf(object);
        this.level.collectableObjects.splice(index,1);
    }

    checkThrowObjects() {
        if(this.keyboard.THROW && this.statusBarBottle.bottleCount > 0) {
            let throwable = new bottle(this.character.x + 100, this.character.y +100);
            this.throwableObjects.push(throwable);
            this.statusBarBottle.bottleCount --;
            this.statusBarBottle.setPercantage(this.statusBarBottle.bottleCount);
          
        }
    }
    
    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        
        this.addObjectstoMap(this.level.backgroundObjects, this.x);
        
        this.addToMap(this.character);
       
        this.addObjectstoMap(this.collectableObjects);
        

        this.addObjectstoMap(this.enemies);

        this.addObjectstoMap(this.clouds);
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