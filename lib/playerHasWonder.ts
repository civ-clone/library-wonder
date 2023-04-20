import {
  WonderRegistry,
  instance as wonderRegistryInstance,
} from '@civ-clone/core-wonder/WonderRegistry';
import Player from '@civ-clone/core-player/Player';
import Wonder from '@civ-clone/core-wonder/Wonder';

export const playerHasWonder = (
  player: Player,
  WonderType: typeof Wonder,
  wonderRegistry: WonderRegistry = wonderRegistryInstance
): boolean =>
  wonderRegistry
    .getByPlayer(player)
    .some((wonder) => wonder instanceof WonderType);
