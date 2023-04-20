import { WonderRegistry } from '@civ-clone/core-wonder/WonderRegistry';
import Player from '@civ-clone/core-player/Player';
import Wonder from '@civ-clone/core-wonder/Wonder';
export declare const playerHasWonder: (
  player: Player,
  WonderType: typeof Wonder,
  wonderRegistry?: WonderRegistry
) => boolean;
