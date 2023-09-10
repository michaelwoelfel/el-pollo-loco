/**
 * Class representing the Endboss in the game.
 * This class extends from the MovableObject class and provides additional functionalities
 * for animating the boss, handling its different states and attacks.
 * @class
 * @extends MovableObject
 */
class Endboss extends MovableObject {
    x = 1500;
    y = 150;
    height = 300;
    width = 300;
    hadFirstContact = false;
    endboss_sound = new Audio('audio/endboss.mp3');
    endboss_dies = new Audio('audio/endboss.mp3');
    soundPlayed = false;
    firstContact = false;
    attackCount = 0;
    i = 0;
    inAlertState = true;
    currentAction = 'idle';
    currentImage = 0;

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',

    ];

    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ]


    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ]

    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',

    ]


    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',

    ]





    /**
     * Creates an instance of the Endboss class.
     * @constructor
     */
    constructor() {
        super().loadImage('img/4_enemie_boss_chicken/2_alert/G5.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.25;
    }

    /**
        * Kicks off the animation loop for the Endboss.
        */
    startAnimation() {
        this.animate();
    }
    /**
        * Main animation function that periodically checks conditions and triggers appropriate animations.
        */
    animate() {
        setInterval(() => {
            if (this.world.character.x > 1200) {
                this.firstContact = true;
            }
            if (this.firstContact == true) {
                this.mainAnimationLoop();
            }

        }, 100);
    }

    /**
   * Handles the main animation states and transitions.
   */
    mainAnimationLoop() {
        if (this.currentAction !== 'hurt') {
            if (this.bossIsDead()) {
                this.currentAction = 'dead';
                this.handleBossDeath();
            } else if (this.bossIsHurt()) {
                this.currentAction = 'hurt';
                this.handleBossHurt();
                setTimeout(() => {
                    this.switchToAttack();
                }, 500);
            } else if (this.firstContact) {
                this.handleBossStates();
            }
        }
    }

    /**
      * Handles Endboss death state and triggers appropriate actions.
      */
    handleBossDeath() {
        if (!media_muted && !this.soundPlayed) {
            this.endboss_dies.play();
            this.soundPlayed = true; }
        this.bossDies();
    }

    /**
    * Handles Endboss being hurt and triggers appropriate actions.
    */
    handleBossHurt() {
        this.playAnimation(this.IMAGES_HURT);
        if (!media_muted) {
            this.endboss_dies.play();
        }
        setTimeout(() => {
            this.currentAction = 'idle';
        }, 100);
    }

    /**
        * Manages the Endboss state machine.
        */
    handleBossStates() {
        if (this.inAlertState) {
            this.currentAction = 'alert';
            this.handleAlertState();
        } else if (this.currentAction === 'attack') {
            this.handleAttackState();
        }

        if (this.currentAction !== 'alert' && this.currentAction !== 'attack') {
            this.currentAction = 'walking';
            this.moveTowardsCharacter();
            this.playAnimation(this.IMAGES_WALKING);
        }
    }

    /**
       * Handles the alert state of the Endboss.
       */
    handleAlertState() {
        if (this.i < 10) {
            this.playAnimation(this.IMAGES_ALERT);
            this.i++;
        } else {
            this.currentAction = 'walking';
        }
    }
    /**
        * Handles the attack state of the Endboss.
        */
    handleAttackState() {
        if (this.attackCount < 2) {
            this.playAnimation(this.IMAGES_ATTACK);
            this.attackCount++;
        } else {
            this.currentAction = 'walking';
        }
    }

    /**
         * Switches the Endboss to alert state.
         */
    switchToAlert() {
        this.i = 0;
        this.inAlertState = true;
        this.attackCount = 0;
    }
    /**
       * Switches the Endboss to attack state.
       */
    switchToAttack() {
        this.i = 0;
        this.inAlertState = false;
        this.attackCount = 0;
    }

    /**
     * Handles the Endboss dying animation and ends the game.
     */
    bossDies() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            endGameWin();
        }, 1500);
    }

    /**
     * Moves the Endboss towards the character.
     */
    moveTowardsCharacter() {
        this.x -= 2;
        this.otherDirection = false;
    }
}



