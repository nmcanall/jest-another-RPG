const Player = require("../lib/Player.js");

test("creates a player object", () => {
    const player = new Player("Nathan");

    expect(player.name).toBe("Nathan");
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
});