export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' });
  }

  preload() {

    //Scenes
    this.load.image("deliveryscene", "assets/images/deliveryscene.png");
    this.load.image("orderscene", "assets/images/orderScene.png");

    //Vegetables
    this.load.image("tomato", "assets/images/tomato.png");
    this.load.image("carrot", "assets/images/acarrot.png");
    this.load.image("lettuce", "assets/images/lettuce.png");

    //Fruit
    this.load.image("apple", "assets/images/apple.png");
    this.load.image("banana", "assets/images/banana.png");
    this.load.image("orange", "assets/images/orange1.png");
    this.load.image("pineapple", "assets/images/pineapple.png");
    this.load.image("strawberry", "assets/images/strawberry.png");
    this.load.image("watermelon", "assets/images/watermelon.png");

    //Meats
    this.load.image("chicken", "assets/images/chicken.png");
    this.load.image("bacon", "assets/images/bacon.png");
    this.load.image("ham", "assets/images/ham.jpeg");

    //Drinks
    this.load.image("soda", "assets/images/soda.png");
    this.load.image("coffee", "assets/images/coffee.png");
    this.load.image("lemonade", "assets/images/lemonade.png");
    this.load.image("tea", "assets/images/tea.png");
    this.load.image("water", "assets/images/waterbottle.png");

    //Other Food Related Things
    this.load.image("cheese", "assets/images/cheese.png");


    //Non-Food Related Images
    this.load.image("bag", "assets/images/bag.png");
    this.load.spritesheet("player", "assets/images/player.png", {frameWidth: 16, frameHeight: 24});
    this.load.image("paper", "assets/images/paper.png");

  }

  //this is a scene transition. make this into an if else statement in the orderScene
  //
  create() {
    this.scene.start('DeliveryScene');
  }
}
