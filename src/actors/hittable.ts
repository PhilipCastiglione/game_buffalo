import { Actor } from "excalibur";
import { Projectile } from "./projectile";

export abstract class Hittable extends Actor {
  public abstract handleHitBy(projectile: Projectile): void 
}
