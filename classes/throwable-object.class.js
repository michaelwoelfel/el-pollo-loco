class bottle extends MovableObject {

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
    
    constructor(){
        let randomNumber = Math.random() < 0.5 ? 1 : 2;
        super().loadImage(`../img/6_salsa_bottle/${randomNumber}_salsa_bottle_on_ground.png`);
        this.x = 220 + Math.random() * 500;
    }


}