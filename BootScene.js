/*
 * BootScene
 * 
 * Author: Colton Ogden
 * cogden@cs50.harvard.edu
 */

class BootScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'BootScene'
        })
    }

    resize() {
        let canvas = this.cache.game.canvas;
    
        let width = window.innerWidth;
        let height = window.innerHeight;
    
        let wratio = width / height;
        let ratio = canvas.width / canvas.height;
    
        if (wratio < ratio) {
            canvas.style.width = width + 'px';
            canvas.style.height = (width / ratio) + 'px';
        } else {
            canvas.style.width = (height * ratio) + "px";
            canvas.style.height = height + "px";
        }
    }

    preload() {
        
    }

    create() {
        console.log("Booting game!");

        window.addEventListener('resize', evt => this.resize());
        this.resize();

        this.add.text(0, 0, 'hack', {
            font: '1px 04b03regular',
            fill: '#FFFFFF'
        });

        this.scene.start('TitleScene');
    }
}

export default BootScene;