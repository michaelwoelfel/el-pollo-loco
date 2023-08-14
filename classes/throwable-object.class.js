class bottle extends MovableObject {


    speedyY = 30;
    speedX = 20;
    IMAGES_BOTTLE = [
        '../img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        '../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    IMAGES_BOTTLE_THROW = [
        '../img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        '../img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png',
    ];
    
  throw() {

  }




  animate() {
      
    setInterval(() =>{
        this.moveLeft();
        this.otherDirection = false;
     },1000/60);
   
    setInterval(() =>{
       this.playAnimation(this.IMAGES_LONGIDLE);
    },100);

}
}