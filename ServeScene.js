/*
 * ServeScene
 * 
 * Author: Colton Ogden
 * cogden@cs50.harvard.edu
 */

class ServeScene extends Phaser.Scene {
    constructor(test) {
        super({
            key: 'ServeScene'
        })
    }

    init(data) {
        this.score1 = data.score1;
        this.score2 = data.score2;
        this.servingPlayer = data.servingPlayer;
    }

    create() {
        this.score1Text = this.add.text(0, 0, `${this.score1}`, {
            font: '32px Courier',
            fill: '#FFF'
        });

        this.score2Text = this.add.text(0, 0, `${this.score2}`, {
            font: '32px Courier',
            fill: '#FFF'
        });

        this.text = this.add.text(0, 0, `Press Enter to Serve, Player ${this.servingPlayer}!`, {
            font: '12px Courier',
            fill: '#FFF'
        });

        this.text.x = 432 / 2 - this.text.width / 2
        this.text.y = 243 / 2 - this.text.height / 2

        this.score1Text.y = this.score2Text.y = 30;
        this.score1Text.x = (432 / 2) - 50 - this.score1Text.width;
        this.score2Text.x = (432 / 2) + 50;

        this.input.keyboard.on('keydown_ENTER', (event) => {
            this.scene.start('PlayScene', {
                score1: this.score1,
                score2: this.score2,
                ballXVelocity: this.servingPlayer == 1 ? 40 : -40,
                ballYVelocity: this.rnd.integerInRange(-50, 50)
            });
        });
    }
}

export default ServeScene;