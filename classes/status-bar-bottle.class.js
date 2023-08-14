class statusbarBottle extends DrawableObject {

    percentage = 100;

    IMAGES_STATUSBAR_BOTTLE = [
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        '../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
    ];

    
    constructor() {
        super().loadImage('../img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png');
        this.loadImages(this.IMAGES_STATUSBAR_BOTTLE);
      
        this.x = 10;
        this.y = 80;
        this.width = 100;
        this.height = 50;
    }


    setPercantageBottle(percentage) {
        this.percentage = percentage;
        if (this.percentage == 100);
        let path =  this.IMAGES_STATUSBAR_BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }


    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;

        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else if (this.percentage == 0) {
            return 0;
        }
    }
}