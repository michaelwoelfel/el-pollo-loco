class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken()
    ];

    clouds = [
        new Cloud('../img/5_background/layers/4_clouds/2.png'),
        new Cloud('../img/5_background/layers/4_clouds/1.png'),
    ]

    backgroundObjects = [
        new BackgroundObject('../img/5_background/layers/air.png'),
        new BackgroundObject('../img/5_background/layers/3_third_layer/1.png'),
        new BackgroundObject('../img/5_background/layers/2_second_layer/1.png'),
        new BackgroundObject('../img/5_background/layers/1_first_layer/1.png'),
    
    ];



    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.addObjectstoMap(this.backgroundObjects);

        this.addToMap(this.character);

        this.addObjectstoMap(this.enemies);

        this.addObjectstoMap(this.clouds);

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
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    }
}