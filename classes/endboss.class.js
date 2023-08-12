class Endboss extends MovableObject {
    y = 150;
    
    height = 300;
    width = 300;

    currentImage = 0;
    
    IMAGES_WALKING = [
        '../img/4_enemie_boss_chicken/2_alert/G5.png',
        '../img/4_enemie_boss_chicken/2_alert/G6.png',
        '../img/4_enemie_boss_chicken/2_alert/G7.png',
        '../img/4_enemie_boss_chicken/2_alert/G8.png',
        '../img/4_enemie_boss_chicken/2_alert/G9.png',
        '../img/4_enemie_boss_chicken/2_alert/G10.png',
        '../img/4_enemie_boss_chicken/2_alert/G11.png',
    ]


    constructor(){
        super().loadImage('../img/4_enemie_boss_chicken/2_alert/G5.png');
        this.x = 700;
        this.loadImages(this.IMAGES_WALKING);
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    };
    
    
    
    
    
    animate() {
       
        setInterval(() =>{
            this.playAnimation(this.IMAGES_WALKING);
            
        },100);
    
    }
    
    
    



};



