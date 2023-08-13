class coin extends MovableObject {
    IMAGES_COIN = [
        '../img/8_coin/coin_1.png',
        '../img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    
    constructor(){
        let randomNumber = Math.random() < 0.5 ? 1 : 2;
        super().loadImage(`../img/8_coin/coin_${randomNumber}.png`);
        this.x = 220 + Math.random() * 500;
    }


}
