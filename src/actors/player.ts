import { Actor, CollisionType, Color, Engine, Keys } from 'excalibur'
import { PlayerWeaponry } from './playerWeaponry'
import { Shield } from './shield'
import { CollisionGroups } from '../collisionGroups'

export class Player extends Actor {
  public playerWeaponry: PlayerWeaponry
  public shield: Shield
  
  private _maxSpeed: number = 100
  private _acceleration: number = 200
  private _health: number = 100
  private _momentum: number = 50
  private _rotateSpeed: number = 4

  constructor(engine: Engine) {
    super({
      pos: engine.screen.center,
      radius: 20,
      color: Color.Chartreuse,
      collisionType: CollisionType.Active,
      collisionGroup: CollisionGroups.Player
    })
    this.playerWeaponry = new PlayerWeaponry(engine, this.pos)
    this.shield = new Shield(this.pos)
  }

  public update(engine: Engine, delta: number) {
    const deceleration = this._momentum * delta * 0.001
    this._decelerate(deceleration)

    const moveDistance = this._acceleration * delta * 0.001
    if (engine.input.keyboard.isHeld(Keys.W)) {
      this._moveUp(moveDistance)
    }
    if (engine.input.keyboard.isHeld(Keys.S)) {
      this._moveDown(moveDistance)
    }
    if (engine.input.keyboard.isHeld(Keys.A)) {
      this._moveLeft(moveDistance)
    }
    if (engine.input.keyboard.isHeld(Keys.D)) {
      this._moveRight(moveDistance)
    }

    const rotationDistance = this._rotateSpeed * delta * 0.001
    if (engine.input.keyboard.isHeld(Keys.Right)) {
      this.playerWeaponry.rotation += rotationDistance
    }
    if (engine.input.keyboard.isHeld(Keys.Left)) {
      this.playerWeaponry.rotation -= rotationDistance
    }
    this.playerWeaponry.pos = this.pos

    if (engine.input.keyboard.isHeld(Keys.Up)) {
      this.shield.rotation += rotationDistance
    }
    if (engine.input.keyboard.isHeld(Keys.Down)) {
      this.shield.rotation -= rotationDistance
    }
    this.shield.pos = this.pos
  }

  private _decelerate(distance: number) {
    // TODO: (PC) this could be refactored so that diagonal movement doesn't decelerate faster than straight movement
    if (this.vel.y > distance) {
      this.vel.y -= distance
    } else if (this.vel.y < -distance) {
      this.vel.y += distance
    } else {
      this.vel.y = 0
    }
    if (this.vel.x > distance) {
      this.vel.x -= distance
    } else if (this.vel.x < -distance) {
      this.vel.x += distance
    } else {
      this.vel.x = 0
    }
  }

  private _moveUp(distance: number) {
    this.vel.y = Math.max(this.vel.y - distance, -this._maxSpeed)
  }

  private _moveDown(distance: number) {
    this.vel.y = Math.min(this.vel.y + distance, this._maxSpeed)
  }

  private _moveLeft(distance: number) {
    this.vel.x = Math.max(this.vel.x - distance, -this._maxSpeed)
  }

  private _moveRight(distance: number) {
    this.vel.x = Math.min(this.vel.x + distance, this._maxSpeed)
  }
}
