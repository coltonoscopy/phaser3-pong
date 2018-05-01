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

    create() {
        this.text = this.add.text(0, 0, 'PONG', {
            font: '16px Courier',
            fill: '#FFF'
        });

        this.text.x = 432 / 2 - this.text.width / 2
        this.text.y = 243 / 2 - this.text.height / 2

        this.score1 = this.add.text(0, 0, '0', {
            font: '32px Courier',
            fill: '#FFF'
        });

        this.score2 = this.add.text(0, 0, '0', {
            font: '32px Courier',
            fill: '#FFF'
        });

        this.score1.y = this.score2.y = 30;
        this.score1.x = (432 / 2) - 50 - this.score1.width;
        this.score2.x = (432 / 2) + 50;

        this.input.keyboard.on('keydown_ENTER', (event) => {
            this.scene.start('ServeScene', {
                score1: 0,
                score2: 0,
                servingPlayer: 1
            });
        });
    }
}

export default TitleScene;