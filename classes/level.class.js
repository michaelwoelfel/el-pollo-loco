class Level {
    enemies;
    clouds;
    backgroundObjects;
    throwableObjects;
    coins;
    level_end_x = 1500;

    constructor(enemies,clouds,backgroundObjects,throwableObjects,coins) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.throwableObjects = throwableObjects;
        this.coins = coins;
    }
}