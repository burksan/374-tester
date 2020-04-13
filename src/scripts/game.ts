import 'phaser';
import DeliveryScene from './scenes/deliveryScene';
import PreloadScene from './scenes/preloadScene';
import OrderScene from './scenes/orderScene';
import GameConfig = Phaser.Types.Core.GameConfig;

const DEFAULT_WIDTH = 2560;
const DEFAULT_HEIGHT = 1600;


const config: GameConfig = {
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    //This Works
    //scene: [PreloadScene, MainScene],
    //This Doesn't
    scene: [PreloadScene, DeliveryScene, OrderScene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 400 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

//
