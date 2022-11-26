const Bee = require('./Bee');

class ForagerBee extends Bee{
  constructor(){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(elem){
    return this.treasureChest.push(elem);
  }
}

module.exports = ForagerBee;
