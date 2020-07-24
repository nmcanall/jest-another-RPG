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
        if(this.isPlayerTurn) {
            inquirer
                .prompt({
                    type: "list",
                    name: "action",
                    message: "What would you like to do?",
                    choices: ["Fight", "Take potion"]
                })
                .then(({action}) => {
                    if(action === "Fight") {
                        this.currentEnemy.reduceHealth(this.player.getAttackValue())

                        console.log(`You attacked the ${this.currentEnemy.name}`);
                        console.log(this.currentEnemy.getHealth());
                    }
                    else {
                        if(!this.player.getInventory) {
                            console.log("You don't have any potions!");
                            return;
                        }
                        else {
                            inquirer
                                .prompt({
                                    type: "list",
                                    message: "Which potion would you like to use?",
                                    name: "potion",
                                    choices: this.player.getInventory().map((item, index) => `${index + 1}: ${item.name}`)
                                })
                                .then(({potion}) => {
                                    const potionDetails = potion.split(": ");

                                    this.player.usePotion(potionDetails[0] - 1);
                                    console.log(`You used the ${potionDetails[1]} potion.`);
                                });
                        }
                    }
                });
        }
        else {
            this.player.reduceHealth(this.currentEnemy.getAttackValue());

            console.log(`You were attacked by the ${this.currentEnemy.name}`);
            console.log(this.player.getHealth());
        }
    }
}

module.exports = Game;