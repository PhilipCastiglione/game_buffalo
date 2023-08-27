import { CollisionGroups } from '../collisionGroups'
import { Actor, CollisionType, Color, Engine, Vector } from 'excalibur'
import { Player } from './player'
import { Weapon } from './weapon'

export class Enemy extends Actor {
  private _player: Player
  private _weapon: Weapon
  private _speed: number = 50
  private _health: number = 100

  constructor(engine: Engine, player: Player) {
    super({
      pos: engine.screen.center.add(new Vector(Math.random() * 300, Math.random() * 300)),
      radius: 10,
      color: Color.Red,
      collisionType: CollisionType.Active,
      collisionGroup: CollisionGroups.Enemy
    })
    this._player = player
    this._weapon = new Weapon(engine, this, CollisionGroups.Enemy)
    engine.add(this._weapon)
  }
  
  public onInitialize(_engine: Engine): void {
    this.actions.meet(this._player, this._speed)
  }

  public update(_engine: Engine, _delta: number) {
    this.rotation = this._player.pos.sub(this.pos).toAngle() - Math.PI * 0.5
  }
}
