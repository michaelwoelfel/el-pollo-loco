/**
 * Class representing a status bar for the health of the end boss.
 * @extends DrawableObject
 */
class statusbarEndboss extends DrawableObject {
    healthEndboss = 100;
    xEndboss;
   

    IMAGES_STATUSBAR_ENDBOSS = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/2_statusbar_endboss/green.png'
    ];

    
    /**
     * Constructs a new statusbarEndboss object.
     */
    constructor() {
        super().loadImage('img/7_statusbars/2_statusbar_endboss/green.png');
        setInterval(() => {
            this.loadImages(this.IMAGES_STATUSBAR_ENDBOSS);
        this.y = 100;
        this.width = 150;
        this.height = 50;
        this.x =  this.xEndboss;
        }, 60);
    }

    

/**
     * Sets the percentage of the health of the end boss and updates the image accordingly.
     * @param {number} percentageCoin - The percentage of the health.
     */
    setPercantage(percentageCoin) {
        this.percentage = percentageCoin;
        if (this.coinCount == 0);
        let path =  this.IMAGES_STATUSBAR_ENDBOSS[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Resolves which image to use based on the health of the end boss.
     * @returns {number} - Index of the image to be used.
     */
    resolveImageIndex() {
        if (this.healthEndboss == 100) {
            return 5;
        } else if (this.healthEndboss > 80) {
            return 4;

        } else if (this.healthEndboss > 60) {
            return 3;
        } else if (this.healthEndboss > 40) {
            return 2;
        } else if (this.healthEndboss > 20) {
            return 1;
        } else if (this.healthEndboss >= 0) {
            return 0;
        }
    }

    updateEndbossX(x) {
        this.xEndboss = x;
    }
}