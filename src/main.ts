import { Engine } from 'excalibur';
import { Player } from './actors/player';
import { Enemy } from './actors/enemy';

const game = new Engine({
  width: 1024,
  height: 768,
});

const player = new Player(game)
game.add(player)
game.add(player.playerWeaponry)
game.add(player.shield)

const enemy = new Enemy(game, player)
game.add(enemy)
const enemy2 = new Enemy(game, player)
game.add(enemy2)

game.currentScene.camera.strategy.lockToActor(player)

game.start();

// Use this with a button to fullscreen your game
// document.getElementById('go-fullscreen')!.addEventListener('click', () => {
//   game.screen.goFullScreen();
// });
