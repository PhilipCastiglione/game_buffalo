import { Actor, CollisionGroup, Engine } from 'excalibur'
import { Projectile } from './projectile'

export class Weapon extends Actor {
  private _collisionGroup : CollisionGroup
  private _fireRate : number = 1000
  private _shotCooldown : number = 1000
  private _game: Engine
  private _source: Actor

  constructor(game: Engine, source: Actor, collisionGroup: CollisionGroup) {
    super()
    this._source = source
    this._collisionGroup = collisionGroup
    this._game = game
  }

  public update(_engine: Engine, delta: number) {
    this._shotCooldown -= delta
    if (this._shotCooldown <= 0) {
      this.pos = this._source.pos
      this._shotCooldown = this._fireRate
      this._fire()
    }
  }

  private _fire() {
    const projectile = new Projectile(this._source.pos, this._source.rotation, this._collisionGroup)
    projectile.on("collisionstart", (event) => {
      console.log("hit", event)
    })
    this._game.add(projectile)
  }
}
