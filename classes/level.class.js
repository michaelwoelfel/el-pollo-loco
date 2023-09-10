/**
 * Class representing a Level in the game.
 * @class
 */
class Level {
    enemies;
    clouds;
    backgroundObjects;
    collectableObjects;
    level_end_x = 1600;

      /**
     * Creates a Level instance.
     * 
     * @param {Array} enemies - An array containing all enemy objects in the level.
     * @param {Array} clouds - An array containing all cloud objects in the level.
     * @param {Array} backgroundObjects - An array containing all background objects in the level.
     * @param {Array} collectableObjects - An array containing all collectable objects in the level.
     */
    constructor(enemies,clouds,backgroundObjects,collectableObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.collectableObjects = collectableObjects;
    }
}