const inquirer = require("inquirer");
const Player = require("./Player.js");
const Enemy = require("./Enemy");

class Game {
    constructor() {
        this.roundNumber = 0;
        this.isPlayerTurn = false;
        this.enemies = [];
        this.currentEnemy;
        this.player;
    }

    initializeGame() {
        this.enemies.push(new Enemy("goblin", "sword"));
        this.enemies.push(new Enemy("orc", "baseball bat"));
        this.enemies.push(new Enemy("skeleton", "axe"));

        this.currentEnemy = this.enemies[0];

        // Get user's info using inquirer
        inquirer
            .prompt({
                type: "text",
                name: "name",
                message: "What is your name?"
            })
            .then(({name}) => {
                this.player = new Player(name);

                console.log(this.currentEnemy, this.player);
            })
    }
}

module.exports = Game;