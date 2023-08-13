class World {

    level = level1;
    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    throwableObjects = level1.throwableObjects;
    coins = level1.coins;
    keyboard;
    camera_x = 0;
    statusBar =  new Statusbar();



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
                this.statusBar.setPercantage(this.character.energy);
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
        this.addObjectstoMap(this.throwableObjects);
        this.addObjectstoMap(this.coins);


        this.addObjectstoMap(this.enemies);

        this.addObjectstoMap(this.clouds);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
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