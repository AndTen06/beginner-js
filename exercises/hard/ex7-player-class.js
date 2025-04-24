class Player {
  // Create a Player class with properties:
  // - health
  // - weapon
  // - speed
  // - name
  // - damage

  constructor(health, weapon, speed, name, damage) {
    this.health = health;
    this.weapon = weapon;
    this.speed = speed;
    this.name = name;
    this.damage = damage;
  }
}

function createPlayer(name, health, weapon, speed, damage) {
  // Create and return a new Player object with the given properties
  return new Player (health, weapon, speed, name, damage);
}


module.exports = { Player, createPlayer };
