import { CollisionGroups } from './collisionGroups'
import { Actor, CollisionType, Color, Engine, Vector } from 'excalibur'


export class Enemy extends Actor {
  private _maxSpeed: number = 100
  private _acceleration: number = 200
  private _health: number = 100
  private _momentum: number = 50
  private _rotateSpeed: number = 4

  constructor(game: Engine) {
    super({
      pos: game.screen.center.add(new Vector(Math.random() * 300, Math.random() * 300)),
      radius: 10,
      color: Color.Red,
      collisionType: CollisionType.Active,
      collisionGroup: CollisionGroups.Enemy
    })
  }
}
