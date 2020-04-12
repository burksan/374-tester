export default class ham extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'ham');
        scene.add.existing(this);
    }
}