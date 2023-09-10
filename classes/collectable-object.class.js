/**
 * Class representing collectable objects in the game world.
 * Extends MovableObject to inherit common functionalities like image loading and movement.
 * This class includes the animation for specific collectable items, such as coins.
 * @class
 * @extends MovableObject
 */


/**
     * Image paths for the coin animation.
     * @type {string[]}
     */
class collectableObject extends MovableObject {
    IMAGES_COIN = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png',
    ];


    /**
   * Constructor to initialize the collectable object's state and start its animation if applicable.
   * @param {string} imagePath - The path to the image that should be used for this collectable object.
   */
    constructor(imagePath) {
        super().loadImage(imagePath);
        this.imagePath = imagePath;
        this.loadImages(this.IMAGES_COIN);
        this.y = Math.floor(Math.random() * (500 - 300 + 1)) + 50;
        this.x = 220 + Math.random() * 800;
        this.height = 80;
        this.width = 80;
        if (this.imagePath.includes('coin')) {
            this.animate();
        }
    }


    /**
  * Animates the collectable object.
  * Changes the dimensions and plays the coin animation.
  */
    animate() {
        this.height = 100;
        this.width = 100;
        setInterval(() => {
            this.playAnimation(this.IMAGES_COIN);
        }, 500);
    }
}

