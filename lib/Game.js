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

                this.startNewBattle();
            })
    }

    startNewBattle() {

        // Who will go first
        if(this.player.agility >= this.currentEnemy.agility) {
            this.isPlayerTurn = true;
        }
        else {
            this.isPlayerTurn = false;
        }

        // Show player's stats
        console.log("Your stats are as follows:");
        console.table(this.player.getStats());

        // Provide enemy description
        console.log(this.currentEnemy.getDescription());

        // Start the battle
        this.battle();
    }

    battle() {
        
    }
}

module.exports = Game;