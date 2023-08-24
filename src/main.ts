import { CollisionGroup, CollisionGroupManager, Engine } from "excalibur";
import { Player } from "./player";
import { Enemy } from "./enemy";

const game = new Engine({
  width: 1024,
  height: 768,
});

const playerCollisionGroup = CollisionGroupManager.create("player")
const enemyCollisionGroup = CollisionGroupManager.create("enemy")

const playerCanCollideWith = CollisionGroup.collidesWith([enemyCollisionGroup])
const enemyCanCollideWith = CollisionGroup.collidesWith([playerCollisionGroup])

const player = new Player(game.screen, playerCanCollideWith)
game.add(player)
game.add(player.weapon)
game.add(player.shield)

const enemy = new Enemy(game.screen, enemyCanCollideWith)
game.add(enemy)

// game.currentScene.camera.strategy.lockToActor(player)

game.start();

// Use this with a button to fullscreen your game
// document.getElementById('go-fullscreen')!.addEventListener('click', () => {
//   game.screen.goFullScreen();
// });

