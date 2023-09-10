/**
 * Represents a background object in the game.
 * Extends MovableObject to inherit functionalities like loading images and movement.
 * @constructor
 * @param {string} imagePath - The path to the image for this background object.
 * @param {number} x - The initial x-coordinate for this background object.
 * @extends MovableObject
 */
class BackgroundObject extends MovableObject {
    y = 0;
    x = 0;
    height = 480;
    width = 720;

    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.y = 480 - this.height;
        this.x = x;
    }
}
