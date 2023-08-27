import { CollisionGroupManager } from "excalibur"

export const CollisionGroups = {
  Player: CollisionGroupManager.create('player'),
  Enemy: CollisionGroupManager.create('enemy'),
} as const
