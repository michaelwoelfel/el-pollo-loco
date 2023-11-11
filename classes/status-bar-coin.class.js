/**
 * Class representing a status bar for coins in the game.
 * @extends DrawableObject
 */
class statusbarCoin extends DrawableObject {
    coinCount = 0;
  

    IMAGES_STATUSBAR_COIN = [
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png',
        'img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png',
    ];

     /**
     * Constructs a new statusbarCoin object.
     */
    constructor() {
        super().loadImage('img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png');
        this.loadImages(this.IMAGES_STATUSBAR_COIN);
        this.x = 10;
        this.y = 35;
        this.width = 150;
        this.height = 50;
    }

 /**
     * Sets the percentage of coins collected and updates the image accordingly.
     * @param {number} percentageCoin - The percentage of coins collected.
     */
    setPercantage(percentageCoin) {
        this.percentage = percentageCoin;
        if (this.coinCount == 0);
        let path =  this.IMAGES_STATUSBAR_COIN[this.resolveImageIndex()];
        this.img = this.imageCache[path];
        document.getElementById("collectedCoins").innerHTML =  this.coinCount;
    }

  /**
     * Resolves which image to use based on the count of coins collected.
     * @returns {number} - Index of the image to be used.
     */
    resolveImageIndex() {
     
        if (this.coinCount >= 10) {
            return 5;
        } else if (this.coinCount > 8) {
            return 4;
        } else if (this.coinCount > 6) {
            return 3;
        } else if (this.coinCount > 4) {
            return 2;
        } else if (this.coinCount > 2) {
            return 1;
        } else if (this.coinCount >= 0) {
            return 0;
        }
       
    };
   
}