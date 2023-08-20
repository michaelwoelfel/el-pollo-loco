class collectableObject extends MovableObject {
    IMAGES_COIN = [
        '../img/8_coin/coin_1.png',
        '../img/8_coin/coin_2.png',
    ];
      
    constructor(imagePath){
        super().loadImage(imagePath);
        this.imagePath = imagePath; // speichern Sie den imagePath in einer Eigenschaft, um darauf zuzugreifen
        this.loadImages(this.IMAGES_COIN);
        this.y = Math.floor(Math.random() * (500 - 300 + 1)) + 150;
        this.x = 220 + Math.random() * 800;
        this.height = 80;
        this.width = 80;

        // Überprüfen Sie, ob der imagePath "coin" enthält, bevor Sie animieren
        if (this.imagePath.includes('coin')) {
            this.animate();
        }
    }

    animate() {
        this.height = 100;
        this.width = 100;
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 500);
    }
}

