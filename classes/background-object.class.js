class BackgroundObject extends MovableObject {
    y = 0;
    x = 0;
    height = 480;
    width = 720;
   
   
       
       constructor(imagePath,y){
           super().loadImage(imagePath);
           this.y = y;
         
         
   
       }
   
   }