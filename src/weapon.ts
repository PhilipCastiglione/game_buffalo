import { Actor, CollisionGroup, CollisionType, Color, Vector } from 'excalibur'

export class Weapon extends Actor {
  constructor(pos: Vector, collisionGroup: CollisionGroup) {
    super({
      pos: pos,
      width: 10,
      height: 20,
      color: Color.Magenta,
      collisionType: CollisionType.PreventCollision,
      collisionGroup: collisionGroup
    })
  }
}
