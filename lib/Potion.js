function Potion(name) {
    this.types = ["strengh", "agility", "health"];
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.name === "health") {
        this.value = Math.floor(Math.random() * 10 + 30); // num between 30-40
    }
    else {
        this.value = Math.floor(Math.random() * 5 + 7); // num between 7-12
    }
}

module.exports = Potion;