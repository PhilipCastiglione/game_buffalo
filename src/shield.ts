import { Actor, CollisionGroup, CollisionType, Color, Vector } from 'excalibur'

export class Shield extends Actor {
  constructor(pos: Vector, collisionGroup: CollisionGroup) {
    super({
      pos: pos,
      width: 20,
      height: 10,
      color: Color.Blue,
      collisionType: CollisionType.Passive,
      collisionGroup: collisionGroup
    })
  }
}
