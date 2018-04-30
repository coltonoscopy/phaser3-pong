/*
 * TitleScene
 * 
 * Author: Colton Ogden
 * cogden@cs50.harvard.edu
 */

class TitleScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'TitleScene'
        })
    }

    preload() {
        
    }

    create() {
        console.log('Creating title scene!');

        var text = this.add.text(0, 0, 'Custom Font');
        text.setFontFamily('04b03regular');
    }
}

export default TitleScene;