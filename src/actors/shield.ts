import { CollisionGroups } from '../collisionGroups'
import { CollisionType, Color, Vector } from 'excalibur'
import { Projectile } from './projectile'
import { Hittable } from './hittable'

export class Shield extends Hittable {
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
  
  public handleHitBy(projectile: Projectile) {
    console.log("shield hit by projectile", projectile)
  }
}
