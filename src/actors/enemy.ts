import { CollisionGroups } from '../collisionGroups'
import { Actor, CollisionType, Color, Engine, Vector } from 'excalibur'
import { Player } from './player'
import { Weapon } from './weapon'

export class Enemy extends Actor {
  private _speed: number = 50
  private _health: number = 100
  private _weapon: Weapon

  constructor(game: Engine, player: Player) {
    super({
      pos: game.screen.center.add(new Vector(Math.random() * 300, Math.random() * 300)),
      radius: 10,
      color: Color.Red,
      collisionType: CollisionType.Active,
      collisionGroup: CollisionGroups.Enemy
    })
    this.actions.meet(player, this._speed)
    this._weapon = new Weapon(game, this, CollisionGroups.Enemy)
    game.add(this._weapon)
  }

  public update(engine: Engine, delta: number) {
    this.rotation = this.vel.toAngle() - Math.PI * 0.5
    this._weapon.pos = this.pos
  }
}
