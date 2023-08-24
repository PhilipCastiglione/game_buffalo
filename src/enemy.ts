import { Actor, CollisionGroup, CollisionType, Color, Screen, Vector } from 'excalibur'


export class Enemy extends Actor {
  public maxSpeed: number = 100
  public acceleration: number = 200
  public health: number = 100
  public momentum: number = 50
  public rotateSpeed: number = 4
  public collisionGroup: CollisionGroup

  constructor(screen: Screen, collisionGroup: CollisionGroup) {
    super({
      pos: screen.center.add(new Vector(Math.random() * 300, Math.random() * 300)),
      radius: 10,
      color: Color.Red,
      collisionType: CollisionType.Active
    })
    this.collisionGroup = collisionGroup
  }
}
