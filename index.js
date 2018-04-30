/*
 * Phaser Tutorial Example
 * Ported to ES6
 * 
 * Author: Colton Ogden
 * cogden@cs50.harvard.edu
 */

import BootScene from './BootScene.js';
import TitleScene from './TitleScene.js';

let config = {
    type: Phaser.AUTO,
    width: 432,
    height: 243,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [
        BootScene,
        TitleScene
    ]
};

var game = new Phaser.Game(config);