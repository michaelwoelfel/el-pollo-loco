class statusbarBottle extends DrawableObject {

    bottleCount = 0;

    IMAGES_STATUSBAR_BOTTLE = [
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
    ];

    
    constructor() {
        super().loadImage('../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png');
        this.loadImages(this.IMAGES_STATUSBAR_BOTTLE);
      
        this.x = 10;
        this.y = 72;
        this.width = 150;
        this.height = 50;
    }


    setPercantage(percentageCoin) {
        this.percentage = percentageCoin;
        if (this.bottleCount == 0);
        let path =  this.IMAGES_STATUSBAR_BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }


    resolveImageIndex() {
        if (this.bottleCount == 10) {
            return 5;
        } else if (this.bottleCount > 8) {
            return 4;

        } else if (this.bottleCount > 6) {
            return 3;d
        } else if (this.bottleCount > 4) {
            return 2;
        } else if (this.bottleCount > 2) {
            return 1;dd
        } else if (this.bottleCount >= 0) {
            return 0;
        }
    }
}