import tomato from '../objects/tomato';
import carrot from '../objects/carrot';
import lettuce from '../objects/lettuce';
import apple from '../objects/apple';
import banana from '../objects/banana';
import orange from '../objects/orange';
import pineapple from '../objects/pineapple';
import strawberry from '../objects/strawberry';
import watermelon from '../objects/watermelon';
import cheese from '../objects/cheese';
import chicken from '../objects/chicken';
import bacon from '../objects/bacon';
import ham from '../objects/ham';
import soda from '../objects/soda';
import tea from '../objects/tea';
import coffee from '../objects/coffee';
import lemonade from '../objects/lemonade';
import water from '../objects/water';
import bag from '../objects/bag';
import player from '../objects/player';

export default class OrderScene extends Phaser.Scene {
  private orderscene;
  private tomato: tomato;
  private carrot: carrot;
  private lettuce: lettuce;
  private apple: apple;
  private banana: banana;
  private orange: orange;
  private pineapple: pineapple;
  private strawberry: strawberry;
  private watermelon: watermelon;
  private cheese: cheese;
  private chicken: chicken;
  private bacon: bacon;
  private ham: ham;
  private soda: soda;
  private tea: tea;
  private coffee: coffee;
  private lemonade: lemonade;
  private water: water;
  private bag: bag;
  private player;
  cursorKeys;

  constructor() {
    super({ key: 'OrderScene' });
  }

  create() {
    this.orderscene = this.add.image(0,0, "orderscene");
    //this.deliveryscene.setOrigin(0,0);
  
    //Non-Food Related Items
    this.bag = this.add.image(this.scale.width / 2 - 900, this.scale.height / 2 + 400, "bag").setInteractive();
    
    //Vegetables
    this.tomato = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tomato").setInteractive();
    //this.tomato.setScale(0.5);
    this.input.setDraggable(this.tomato);
    this.carrot = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "carrot").setInteractive();
    this.input.setDraggable(this.carrot);
    this.lettuce = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "lettuce").setInteractive();
    this.input.setDraggable(this.lettuce);


    //Fruits
    this.apple = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "apple").setInteractive();
    this.input.setDraggable(this.apple);
    this.banana = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "banana").setInteractive();
    this.input.setDraggable(this.banana);
    this.orange = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "orange").setInteractive();
    this.input.setDraggable(this.orange);
    this.pineapple = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "pineapple").setInteractive();
    this.input.setDraggable(this.pineapple);
    this.strawberry = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "strawberry").setInteractive();
    this.input.setDraggable(this.strawberry);
    this.watermelon = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "watermelon").setInteractive();
    this.input.setDraggable(this.watermelon);

    //Meats
    this.chicken = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "chicken").setInteractive();
    this.input.setDraggable(this.chicken);
    this.bacon = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "bacon").setInteractive();
    this.input.setDraggable(this.bacon);
    this.ham = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "ham").setInteractive();
    this.input.setDraggable(this.ham);

    //Drinks
    this.soda = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "soda").setInteractive();
    this.input.setDraggable(this.soda);
    this.coffee = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "coffee").setInteractive();
    this.input.setDraggable(this.coffee);
    this.tea = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tea").setInteractive();
    this.input.setDraggable(this.tea);
    this.lemonade = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "lemonade").setInteractive();
    this.input.setDraggable(this.lemonade);
    this.water = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "water").setInteractive();
    this.input.setDraggable(this.water);

    //Other Food Related Items
    this.cheese = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "cheese").setInteractive();
    this.input.setDraggable(this.cheese);

    this.input.dragDistanceThreshold = 16;
    
    this.input.on('dragstart', function (pointer, gameObject) {
      //change this color later
      gameObject.setTint(0xff0000);
  });
  
  this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    gameObject.x = dragX;
    gameObject.y = dragY;
  });

  this.input.on('dragend', function (pointer, gameObject) {
    gameObject.clearTint();
  });

    //Non-Food Related Items
    let bag = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "bag").setInteractive();
    

    //Player
    this.player = this.physics.add.sprite(this.scale.width / 2-8, this.scale.height - 64, "player");
    this.player.setScale(10);
    //this.player.play("thrust");
    //this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.player.setCollideWorldBounds(true);



    /*this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player", {start: 0, end: 1}),
      frameRate: 20,
      repeat: -1
    }); */
  }

  update() {
    this.movePlayerManager();
  }

  movePlayerManager(){
    if(this.cursorKeys.left.isDown){
      this.player.setVelocityX(-300);
    }
    else if(this.cursorKeys.right.isDown){
      this.player.setVelocityX(300);
    }
    else this.player.setVelocityX(0);

    if(this.cursorKeys.up.isDown){
      this.player.setVelocityY(-300);
    }
    else if(this.cursorKeys.down.isDown){
      this.player.setVelocityY(300);
    }
    else this.player.setVelocityY(0);
  }


}
