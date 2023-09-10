
/**
 * Cloud class that represents a cloud object in the game world.
 * It extends the MovableObject class to inherit common functionalities like image loading and movement.
 * This class is responsible for initializing and animating the cloud object.
 * @class
 * @extends MovableObject
 */
class Cloud extends MovableObject {
    /**
     * Initial vertical position of the cloud.
     * @type {number}
     */
    y = 20;
    height = 250;


      /**
     * Constructor to initialize the cloud's state and start its animations.
     * @param {string} imagePath - The path to the image that should be used for this cloud.
     */
    constructor(imagePath) {
        super().loadImage(imagePath);
        this.initCloud();
        this.animate();
        setInterval(() => this.initCloud(), 20000);
    }


     /**
     * Initialize the cloud's position and dimensions.
     * This method sets the cloud's initial x-coordinate randomly and sets its width.
     */
    initCloud() {
        this.x = Math.random() * 500;
        this.width = 500;
    }

     /**
     * Starts the cloud's movement animation.
     * The cloud moves to the left based on the `moveLeft` method from the `MovableObject` class.
     */
    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}
