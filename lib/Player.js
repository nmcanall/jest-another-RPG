function Player(name = "") {
    this.name = name;
    this.health = Math.floor(Math.random() * 10 + 95); // Num between 95-105
    this.strength = Math.floor(Math.random() * 5 + 7); // Num between 5-12
    this.agility = Math.floor(Math.random() * 5 + 7); // Num between 5-12
}

const getStats = function() {

}

const getHealth = function() {
    return this.health;
}

module.exports = Player;