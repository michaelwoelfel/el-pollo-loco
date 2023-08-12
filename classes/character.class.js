class Character extends MovableObject {
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
        '../img/2_character_pepe/1_idle/idle/I-1.png',
        '../img/2_character_pepe/1_idle/idle/I-2.png',
        '../img/2_character_pepe/1_idle/idle/I-3.png',
        '../img/2_character_pepe/1_idle/idle/I-4.png',
        '../img/2_character_pepe/1_idle/idle/I-5.png',
        '../img/2_character_pepe/1_idle/idle/I-6.png',
        '../img/2_character_pepe/1_idle/idle/I-7.png',
        '../img/2_character_pepe/1_idle/idle/I-8.png',
        '../img/2_character_pepe/1_idle/idle/I-9.png',
        '../img/2_character_pepe/1_idle/idle/I-10.png',
    ];

    IMAGES_LONGIDLE = [
        '../img/2_character_pepe/1_idle/long_idle/I-11.png',
        '../img/2_character_pepe/1_idle/long_idle/I-12.png',
        '../img/2_character_pepe/1_idle/long_idle/I-13.png',
        '../img/2_character_pepe/1_idle/long_idle/I-14.png',
        '../img/2_character_pepe/1_idle/long_idle/I-15.png',
        '../img/2_character_pepe/1_idle/long_idle/I-16.png',
        '../img/2_character_pepe/1_idle/long_idle/I-17.png',
        '../img/2_character_pepe/1_idle/long_idle/I-18.png',
        '../img/2_character_pepe/1_idle/long_idle/I-19.png',
        '../img/2_character_pepe/1_idle/long_idle/I-20.png',
    ];

    world;
    walking_sound = new Audio('audio/steps.mp3');

    

    
    currentImage = 0;
    

constructor(){
    super().loadImage('../img/2_character_pepe/1_idle/idle/I-1.png');
    this.loadImages(this.IMAGES_WALKING);
    this.animate();
        
   

    this.an
    this.x = 20;
    this.y = 135;
    this.height = 300;
    this.width = 150;
}

animate() {

    setInterval(()=>{
        
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed;
            this.otherDirection = false;
            this.walking_sound.play();
        }

          
        if (this.world.keyboard.LEFT && this.x >= 0 ) {
            this.x -= this.speed;
            this.otherDirection = true;
            this.walking_sound.play();
        }
        this.world.camera_x = -this.x +100;
      
       
    },1000/60);


    setInterval(() =>{

        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            this.playAnimation(this.IMAGES_WALKING);
    }
    },50);
    
}
    jump() {

    }
}