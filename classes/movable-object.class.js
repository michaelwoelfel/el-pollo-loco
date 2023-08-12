class MovableObject {
    x= 200;
    w
    y = 310;
    img;
    height = 100;
    width = 100;
    speed = 0.1;
    otherDirection = false;
    currentImage = 0;
    
    imageCache = {};

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });
       

    }

    moveRight() {
        console.log('Moving right');

    }

    
    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000/60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage ++;
    }

}



    