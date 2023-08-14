class collectableObject extends MovableObject {
   


    
      
    constructor(imagePath){
        super().loadImage(imagePath);
        this.y = 380;
        this.x = 220 + Math.random() * 500;
        this.height = 50;
        this.width = 50;
      
      

    }

}
