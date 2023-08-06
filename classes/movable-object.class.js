class MovableObject {
    x= 200;
    y = 310;
    img;
    height = 100;
    width = 100;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');

    }

}

    