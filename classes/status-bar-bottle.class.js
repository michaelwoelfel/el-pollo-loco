/**
 * Class representing a status bar for bottles in the game.
 * @extends DrawableObject
 */
class statusbarBottle extends DrawableObject {

    bottleCount = 0;
    IMAGES_STATUSBAR_BOTTLE = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png',
    ];

    /**
     * Constructs a new statusbarBottle object.
     */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png');
        this.loadImages(this.IMAGES_STATUSBAR_BOTTLE);
        this.x = 10;
        this.y = 72;
        this.width = 150;
        this.height = 50;
    }


     /**
     * Sets the percentage of bottles collected and updates the image accordingly.
     * @param {number} percentageCoin - The percentage of bottles collected.
     */
    setPercantage(percentageCoin) {
        this.percentage = percentageCoin;
        if (this.bottleCount == 0);
        let path =  this.IMAGES_STATUSBAR_BOTTLE[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * Resolves which image to use based on the count of bottles collected.
     * @returns {number} - Index of the image to be used.
     */
    resolveImageIndex() {
        if (this.bottleCount >= 5) {
            return 5;
        } else if (this.bottleCount > 4) {
            return 4;
        } else if (this.bottleCount > 3) {
            return 3;
        } else if (this.bottleCount > 2) {
            return 2;
        } else if (this.bottleCount >= 1) {
            return 1;
        } else if (this.bottleCount == 0) {
            return 0;
        }
    }
}