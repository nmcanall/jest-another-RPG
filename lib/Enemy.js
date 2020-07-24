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

    getHealth() {
        return `The ${this.name}'s health is now ${this.health}!`;
    }

    isAlive() {
        return this.health > 0;
    }

    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    }

    reduceHealth(attackPoints) {
        this.health -= attackPoints;

        if(this.health < 0) {
            this.health = 0;
        }
    }

    getDescription() {
        return `A ${this.name} holding a ${this.weapon} has appeared!`;
    }
}

module.exports = Enemy;