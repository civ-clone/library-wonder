"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerHasWonder = void 0;
const WonderRegistry_1 = require("@civ-clone/core-wonder/WonderRegistry");
const playerHasWonder = (player, WonderType, wonderRegistry = WonderRegistry_1.instance) => wonderRegistry
    .getByPlayer(player)
    .some((wonder) => wonder instanceof WonderType);
exports.playerHasWonder = playerHasWonder;
//# sourceMappingURL=playerHasWonder.js.map