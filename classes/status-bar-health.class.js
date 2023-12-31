/**
 * Class representing a health status bar in the game.
 * @extends DrawableObject
 */
class statusbarHealth extends DrawableObject {

    percentage = 100;

    IMAGES_STATUSBAR_HEALTH = [
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png',
        'img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png'
    ];

     /**
     * Constructs a new statusbarHealth object and initializes it with 100% health.
     */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png');
        this.loadImages(this.IMAGES_STATUSBAR_HEALTH);
        this.setPercantage(100);
        this.x = 10;
        this.y = 0;
        this.width = 150;
        this.height = 50;
    }


    /**
     * Sets the percentage of health and updates the image accordingly.
     * @param {number} percentage - The health percentage.
     */
    setPercantage(percentage) {
        this.percentage = percentage;
        if (this.percentage < 100) {
        let path =  this.IMAGES_STATUSBAR_HEALTH[this.resolveImageIndex()];
        this.img = this.imageCache[path];
      
    }
    }


    /**
     * Determines the image to display based on the percentage of health.
     * @returns {number} - The index of the image in IMAGES_STATUSBAR_HEALTH array.
     */
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
        } else if (this.percentage > 1) {
            return 1;
        } else if (this.percentage == 0) {
            return 0;
        }
    }
}