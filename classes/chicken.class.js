class Chicken  extends MovableObject{
   
    y = 370;
    height = 60;
    width = 60;

    currentImage = 0;


    IMAGES_LONGIDLE = [
        '../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        '../img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
        
    ];
    constructor(){
        super().loadImage('../img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.x = 220 + Math.random() * 500;
        this.loadImages(this.IMAGES_LONGIDLE);
        this.speed = 0.15 + Math.random() * 0.25;
        this.animate();
    }

    



    animate() {
        this.moveLeft();
        setInterval(() =>{
            let i = this.currentImage % this.IMAGES_LONGIDLE.length;
            let path = this.IMAGES_LONGIDLE[i];
            this.img = this.imageCache[path];
            this.currentImage ++;
            
        },100);

    }

    
}