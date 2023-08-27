import { CollisionGroups } from './collisionGroups'
import { Actor, CollisionType, Color, Vector } from 'excalibur'

export class Shield extends Actor {
  constructor(pos: Vector) {
    super({
      pos: pos,
      width: 20,
      height: 10,
      color: Color.Blue,
      collisionType: CollisionType.Passive,
      collisionGroup: CollisionGroups.Player
    })
  }
}
