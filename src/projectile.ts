import { Actor, CollisionGroup, CollisionType, Color, Vector } from 'excalibur'

export class Projectile extends Actor {
  private _velocity : number = 1000

  constructor(pos: Vector, rotation: number, collisionGroup: CollisionGroup) {
    super({
      pos: pos,
      width: 2,
      height: 8,
      color: Color.White,
      rotation: rotation,
      collisionType: CollisionType.Passive,
      collisionGroup: collisionGroup
    })
    this.vel = new Vector(0, this._velocity).rotate(rotation)
  }
}
