const Potion = require("./Potion");

class Enemy {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
        this.potion = new Potion();

        this.health = Math.floor(Math.random() * 10 + 85); // Num between 85-95
        this.strength = Math.floor(Math.random() * 5 + 5); // Num between 5-10
        this.agility = Math.floor(Math.random() * 5 + 5); // Num between 5-10
    }
}

module.exports = Enemy;