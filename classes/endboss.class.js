class Endboss extends MovableObject {
    y = 150;
    
    height = 300;
    width = 300;
    hadFirstContact = false;
   endboss_sound = new Audio('audio/endboss.mp3');
   endboss_dies = new Audio('audio/endboss.mp3');

    currentImage = 0;
    
    IMAGES_WALKING = [
        '../img/4_enemie_boss_chicken/1_walk/G1.png',
        '../img/4_enemie_boss_chicken/1_walk/G2.png',
        '../img/4_enemie_boss_chicken/1_walk/G3.png',
        '../img/4_enemie_boss_chicken/1_walk/G4.png',
       
    ];

    IMAGES_ALERT = [
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
        '../img/4_enemie_boss_chicken/2_alert/G12.png',
    ]


    IMAGES_ATTACK = [
        '../img/4_enemie_boss_chicken/3_attack/G13.png',
        '../img/4_enemie_boss_chicken/3_attack/G14.png',
        '../img/4_enemie_boss_chicken/3_attack/G15.png',
        '../img/4_enemie_boss_chicken/3_attack/G16.png',
        '../img/4_enemie_boss_chicken/3_attack/G17.png',
        '../img/4_enemie_boss_chicken/3_attack/G18.png',
        '../img/4_enemie_boss_chicken/3_attack/G19.png',
        '../img/4_enemie_boss_chicken/3_attack/G20.png',
    ]

    IMAGES_HURT= [
        '../img/4_enemie_boss_chicken/4_hurt/G21.png',
        '../img/4_enemie_boss_chicken/4_hurt/G22.png',
        '../img/4_enemie_boss_chicken/4_hurt/G23.png',
      
    ]


    IMAGES_DEAD= [
        '../img/4_enemie_boss_chicken/5_dead/G24.png',
        '../img/4_enemie_boss_chicken/5_dead/G25.png',
        '../img/4_enemie_boss_chicken/5_dead/G26.png',
      
    ]

   




    constructor(){
        super().loadImage('../img/4_enemie_boss_chicken/2_alert/G5.png');
        this.x = 1500;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 0.15 + Math.random() * 0.25;
       
       
       
    };
    
    
    
    startAnimation() {
        this.animate();
       
    }
    
    animate() {
        let i = 0;
        let soundPlayed = false;
        let attackCount = 0;
        let inAlertState = true;
        setInterval(() => {
            this.mainAnimationLoop(i, soundPlayed, attackCount, inAlertState);
        }, 100);
    }
    
    mainAnimationLoop(i, soundPlayed, attackCount, inAlertState) {
        if (this.bossIsDead()) {
            this.handleBossDeath(soundPlayed);
        } else if (this.bossIsHurt()) {
            this.handleBossHurt();
        } else {
            this.handleBossStates(i, attackCount, inAlertState);
        }
    }
    
    handleBossDeath(soundPlayed) {
        if (!media_muted && !soundPlayed) {
            this.endboss_dies.play();
            soundPlayed = true;
        }
        this.bossDies();
    }
    
    handleBossHurt() {
        this.playAnimation(this.IMAGES_HURT);
        if (!media_muted) { this.endboss_dies.play(); }
    }
    
    handleBossStates(i, attackCount, inAlertState) {
        if (inAlertState) {
            this.handleAlertState(i, attackCount);
        } else {
            this.handleAttackState(i, attackCount);
        }
    }
    
    handleAlertState(i, attackCount) {
        if (i < 10) {
            this.playAnimation(this.IMAGES_ALERT);
            i++;
        } else {
            this.switchToAttack(i, attackCount);
        }
    }
    
    handleAttackState(i, attackCount) {
        if (attackCount < 2) {
            this.playAnimation(this.IMAGES_ATTACK);
            attackCount++;
        } else {
            this.switchToAlert(i, attackCount);
        }
    }
    
    switchToAlert(i, attackCount) {
        i = 0;
        inAlertState = true;
        attackCount = 0;
    }
    
    switchToAttack(i, attackCount) {
        i = 0;
        inAlertState = false;
        attackCount = 0;
    }
    

    bossDies() {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
            endGameWin();
        }, 1500);
    }
    
    moveBossLeft() {
        this.x -= 10;
        this.otherDirection = false;

    }

    fürspäter() {
    setInterval(() => {
        this.moveBossLeft();
         this.playAnimation(this.IMAGES_ATTACK);
    }, 5000);
    
}

};



