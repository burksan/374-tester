export default class tomato extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'tomato');
        scene.add.existing(this);
    }
}