function simulateBattle(player1, player2) {
  /* take two player objects and simulate them attacking each other
   return an object with the updated health of both players after one round
  example: { player1Health: 80, player2Health: 70 } */

  return {
    player1HP:player1.health - player2.damage, player2HP:player2.health - player1.damage
  }
}

module.exports = simulateBattle;
