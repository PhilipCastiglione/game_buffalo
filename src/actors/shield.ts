import { CollisionGroups } from '../collisionGroups'
import { Actor, CollisionType, Color, Vector } from 'excalibur'

export class Shield extends Actor {
  constructor(pos: Vector) {
    super({
      pos: pos,
      radius: 20,
      anchor: new Vector(0.5, 0.75),
      color: Color.Blue,
      collisionType: CollisionType.Passive,
      collisionGroup: CollisionGroups.Player
    })
  }
}
