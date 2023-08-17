class Endboss extends MovableObject {
    y = 150;
    
    height = 300;
    width = 300;
    hadFirstContact = false;

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
        this.x = 1700;
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
        setInterval(() => {
            if (this.bossIsDead()) {
                this.playAnimation(this.IMAGES_DEAD);
            } else if (this.bossIsHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (i < 40) {
                this.playAnimation(this.IMAGES_ALERT);
                setTimeout(() => {
                    this.playAnimation(this.IMAGES_ATTACK);
                }, 2000);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
    
            if (this.world.character.x == 1300) {
                i = 0;
            } else {
                i++;
            }
        }, 100);
    }
    
    


};



