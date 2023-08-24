import { Actor, CollisionGroup, CollisionType, Color, Engine, Vector } from 'excalibur'
import { Projectile } from './projectile'

export class Weapon extends Actor {
  public collisionGroup : CollisionGroup
  public fireRate : number = 1000
  public shotCooldown : number = 1000
  public game: Engine
  public source: Actor

  constructor(game: Engine, source: Actor, collisionGroup: CollisionGroup) {
    super()
    this.source = source
    this.collisionGroup = collisionGroup
    this.game = game
  }

  public update(engine: Engine, delta: number) {
    this.shotCooldown -= delta
    if (this.shotCooldown <= 0) {
      this.shotCooldown = this.fireRate
      this._fire()
    }
  }

  private _fire() {
    const projectile = new Projectile(this.source.pos, this.source.rotation, this.collisionGroup)
    projectile.on("collisionstart", (event) => {
      console.log("hit", event)
    })
    this.game.add(projectile)
  }
}
