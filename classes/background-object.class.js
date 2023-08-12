class BackgroundObject extends MovableObject {
    y = 0;
    x = 0;
    height = 480;
    width = 720;
   
   
       
       constructor(imagePath,x){
           super().loadImage(imagePath);
           this.y = 480 - this.height;
           this.x = x;
         
         
   
       }
   
   }