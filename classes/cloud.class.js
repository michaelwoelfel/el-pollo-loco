class Cloud extends MovableObject {
    y = 20;
    height = 250;

    constructor(imagePath) {
        super().loadImage(imagePath);
        this.initCloud();
        this.animate();
        setInterval(() => this.initCloud(), 20000);
    }

    initCloud() {
        this.x = Math.random() * 500;
        this.width = 500;
    }

    animate() {
        setInterval(() => {
            this.x -= 0.1;
        }, 1000/60);
    }
}
