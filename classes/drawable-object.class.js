class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 200;
    y = 310;
    height = 100;
    width = 100;
    
     


        loadImage(path) {
            this.img = new Image();
            this.img.src = path;
        }

        draw(ctx) {
            try {
           
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch(e) {
            console.log();
           
        }
        }


        
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken || this instanceof Endboss) {
            
        
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }
    }



        loadImages(arr) {
            arr.forEach((path) => {
                let img = new Image();
                img.src = path;
                this.imageCache[path] = img;

            });


        }
    }