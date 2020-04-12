export default class orange extends Phaser.GameObjects.Image {

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'orange');
        scene.add.existing(this);
    }
}