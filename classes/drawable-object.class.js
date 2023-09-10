/**
 * Class representing an object that can be drawn on a canvas.
 * This class provides methods for loading images and drawing them.
 * @class
 */
class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 200;
    y = 310;
    height = 100;
    width = 100;



    /**
         * Loads a single image by its path.
         * @param {string} path - The path to the image file.
         */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    /**
* Draws the current image on the canvas context provided.
* @param {CanvasRenderingContext2D} ctx - The 2D canvas context where the image will be drawn.
*/
    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        } catch (e) {
        }
    }







    /**
        * Preloads multiple images and stores them in the cache.
        * @param {string[]} arr - Array containing paths to the image files.
        */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;

        });


    }
}