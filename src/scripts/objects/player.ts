export default class player extends Phaser.GameObjects.Sprite {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'example-player');
        scene.add.existing(this);
    }
}
