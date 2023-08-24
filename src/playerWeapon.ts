import { Actor, CollisionGroup, CollisionType, Color, Engine, Vector } from 'excalibur'
import { Weapon } from './weapon'

export class PlayerWeapon extends Actor {
  public collisionGroup : CollisionGroup
  public weapons : Array<Weapon> = new Array<Weapon>()

  constructor(game: Engine, pos: Vector, collisionGroup: CollisionGroup) {
    super({
      pos: pos,
      width: 10,
      height: 20,
      color: Color.Magenta,
      collisionType: CollisionType.PreventCollision,
      collisionGroup: collisionGroup
    })
    this.collisionGroup = collisionGroup
    const initialWeapon = new Weapon(game, this, collisionGroup)
    this.weapons.push(initialWeapon)
    game.add(initialWeapon)
  }
}
