import { Engine } from 'excalibur';
import { Player } from './player';
import { Enemy } from './enemy';

const game = new Engine({
  width: 1024,
  height: 768,
});

const player = new Player(game)
game.add(player)
game.add(player.playerWeapon)
game.add(player.shield)

const enemy = new Enemy(game)
game.add(enemy)
const enemy2 = new Enemy(game)
game.add(enemy2)

game.currentScene.camera.strategy.lockToActor(player)

game.start();

// Use this with a button to fullscreen your game
// document.getElementById('go-fullscreen')!.addEventListener('click', () => {
//   game.screen.goFullScreen();
// });
