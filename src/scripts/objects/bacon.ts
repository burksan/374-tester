export default class bacon extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'bacon');
        scene.add.existing(this);
    }
}