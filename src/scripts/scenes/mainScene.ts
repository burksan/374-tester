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

export default class MainScene extends Phaser.Scene {
  private deliveryscene;
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

  constructor() {
    super({ key: 'MainScene' });
  }

  create() {
    this.deliveryscene = this.add.image(0,0, "deliveryscene");
    this.deliveryscene.setOrigin(0,0);
  
    //Vegetables
    this.tomato = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tomato");
    //this.carrot = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "carrot");
    //this.lettuce = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "lettuce");
    
    //Fruits
    //this.apple = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "apple");
    //this.banana = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "banana");
    //this.orange = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "orange");
    //this.pineapple = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "pineapple");
    //this.strawberry = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "strawberry");
    //this.watermelon = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "watermelon");

    //Meats
    //this.chicken = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "chicken");
    //this.bacon = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "bacon");
    //this.ham = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "ham");

    //Drinks
    //this.soda = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "soda");
    //this.coffee = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "coffee");
    //this.tea = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "tea");
    //this.lemonade = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "lemonade");
    //this.water = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "water");

    //Other Food Related Items
    this.cheese = this.add.image(this.scale.width / 2 - 50, this.scale.height / 2, "cheese");


    this.anims.create({
      key: "thrust",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 20,
      repeat: -1
    });
  }

  update() {
  }
}
