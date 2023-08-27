import { Actor, CollisionType, Color, Engine, Vector } from 'excalibur'
import { Weapon } from './weapon'
import { CollisionGroups } from '../collisionGroups'

export class PlayerWeaponry extends Actor {
  private _weapons : Array<Weapon> = new Array<Weapon>()
  private _game : Engine

  constructor(game: Engine, pos: Vector) {
    super({
      pos: pos,
      width: 10,
      height: 20,
      color: Color.Magenta,
      collisionType: CollisionType.PreventCollision
    })
    this._game = game

    const initialWeapon = new Weapon(game, this, CollisionGroups.Player)
    this.addWeapon(initialWeapon)
  }
  
  public addWeapon(weapon: Weapon) {
    this._weapons.push(weapon)
    this._game.add(weapon)
  }
}
