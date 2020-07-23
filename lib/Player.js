const Potion = require("./Potion")

function Player(name = "") {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95); // Num between 95-105
    this.strength = Math.floor(Math.random() * 5 + 7); // Num between 5-12
    this.agility = Math.floor(Math.random() * 5 + 7); // Num between 5-12

    this.inventory = [new Potion("health"), new Potion()];
}

Player.prototype.getStats = function() {
    return {
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    }
}

Player.prototype.getInventory = function() {
    if(this.inventory.length) {
        return this.inventory;
    }
    else {
        return false;
    }
}

Player.prototype.getHealth = function() {
    return this.name + "'s health is now " + this.health;
}

Player.prototype.isAlive = function() {
    return this.health > 0;
}

Player.prototype.reduceHealth = function(hitPoints) {
    if(hitPoints > this.health) {
        this.health = 0;
    }
    else {
        this.health -= hitPoints;
    }
}

module.exports = Player;