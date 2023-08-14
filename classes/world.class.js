class World {

    level = level1;
    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    throwableObjects = level1.throwableObjects;
    collectableObjects = level1.collectableObjects;
    keyboard;
    camera_x = 0;
    statusBarHealth =   new statusbarHealth();
    statusBarCoin =  new statusbarCoin();
    statusBarBottle =  new statusbarBottle();
  



    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw()
        this.setWorld();
        this.checkCollisions();
    }

    checkCollisions() {
        setInterval(() => {
           this.level.enemies.forEach((enemy)=> {
            if(this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHealth.setPercantage(this.character.energy);
            }
           });
        }, 200);
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