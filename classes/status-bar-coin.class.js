class statusbarCoin extends DrawableObject {

    percentage = 100;

    IMAGES_STATUSBAR_COIN = [
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        '../img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ];

    
    constructor() {
        super().loadImage('../img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png');
        this.loadImages(this.IMAGES_STATUSBAR_COIN);
        
        this.x = 10;
        this.y = 35;
        this.width = 100;
        this.height = 50;
    }


    setPercantageCoin(percentage) {
        this.percentage = percentage;
        if (this.percentage == 100);
        let path =  this.IMAGES_STATUSBAR_HEALTH[this.resolveImageIndex()];
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