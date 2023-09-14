/**
 * Character class that represents the main character in the game world.
 * It extends the MovableObject class to utilize common functionalities like image loading, gravity, and movement.
 * It contains animations for walking, idling, jumping, getting hurt, and dying.
 * @class
 * @extends MovableObject
 */
class Character extends MovableObject {
    /**
     * The speed of the character.
     * @type {number}
     */
    speed = 10;

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];

    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    IMAGES_LONGIDLE = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];


    IMAGES_JUMP = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png',
    ];


    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png',

    ];


    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ];

    world;
    walking_sound = new Audio('audio/steps.mp3');
    jump_sound = new Audio('audio/jump.mp3');






    /**
         * Character constructor to set initial state and start animations.
         */
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_LONGIDLE);
        this.animate();
        this.applyGravity();
        this.x = 20;
        this.y = 80;
        this.height = 300;
        this.width = 150;
        this.walking_sound.volume = 0.3;
        this.jump_sound.volume = 0.3;
    }

    /**
         * Starts all animations for the character.
         */
    animate() {
        this.movingAnimations();
        this.interactiveAnimations();
        this.idleAnimations();
    }

    /**
        * Animations for interactive states like jumping, getting hurt, and dying.
        */
    interactiveAnimations() {
        setInterval(() => {
            if (this.isHurt() && !this.isDead() && !this.isAboveGround()) {
                this.playAnimation(this.IMAGES_HURT);
            }
            else if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                endGameLoose();
            }
            else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMP);
                if (!media_muted) { this.jump_sound.play(); }
            }
            else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);

    }

    /**
         * Animations for movement actions like walking left or right.
         */
    movingAnimations() {
        setInterval(() => {
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                if (!media_muted) { this.walking_sound.play(); }
            }
            if (this.world.keyboard.LEFT && this.x >= 0) {
                this.moveLeft();
                if (!media_muted) { this.walking_sound.play(); }
            }
            this.world.camera_x = -this.x + 100;
            if (this.world.keyboard.UP && !this.isAboveGround() || this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }
        }, 1000 / 60);
    }

    /**
        * Animations for idle and long idle states.
        */
    idleAnimations() {
        let lastX = this.x;
        let timeXWasLastChanged = Date.now();

        setInterval(() => {
            if (this.x !== lastX) {
                lastX = this.x;
                timeXWasLastChanged = Date.now();
                this.playAnimation(this.IMAGES_IDLE);
            } else if (Date.now() - timeXWasLastChanged >= 2000) {

                this.playAnimation(this.IMAGES_LONGIDLE);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }
        }, 1000);
    }
}






