<script lang="ts">
  import { currentInteractable } from "./stores/interact";

  import { currentMap } from "./stores/map";

  import { neighboringTiles, playerLocation } from "./stores/player";

  $neighboringTiles = {};
  $: console.log($neighboringTiles);

  const interact = () => {
    let numberOfInteractables = 0;
    let interactables = [];

    Object.keys($neighboringTiles).forEach((key) => {
      if ($neighboringTiles[key]) {
        numberOfInteractables++;
        interactables.push({ direction: key, ...$neighboringTiles[key] });
      }
    });

    if (numberOfInteractables === 1) {
      $currentInteractable = interactables[0];
    }
  };

  onkeydown = (e) => {
    if (e.key === "e") {
      interact();
    }
    let movement = false;
    if (
      e.key === "w" ||
      e.key === "a" ||
      e.key === "s" ||
      e.key === "d" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowRight" ||
      e.key === "ArrowLeft"
    ) {
      movement = true;
    }

    switch (e.key) {
      case "w":
      case "ArrowUp":
        moveUp();
        break;
      case "a":
      case "ArrowLeft":
        moveLeft();
        break;
      case "s":
      case "ArrowDown":
        moveDown();
        break;
      case "d":
      case "ArrowRight":
        moveRight();
        break;

      default:
        break;
    }

    if (movement) {
      postMovement();
    }
  };

  const moveUp = () => {
    if ($playerLocation < 11) return;
    if ($currentMap[$playerLocation - 11]) return;
    $playerLocation -= 11;
  };

  const moveDown = () => {
    if ($playerLocation > 109) return;
    if ($currentMap[$playerLocation + 11]) return;
    $playerLocation += 11;
  };

  const moveRight = () => {
    if (($playerLocation + 1) % 11 === 0) return;
    if ($currentMap[$playerLocation + 1]) return;
    $playerLocation += 1;
  };

  const moveLeft = () => {
    if ($playerLocation === 0 || $playerLocation % 11 === 0) return;
    if ($currentMap[$playerLocation - 1]) return;
    $playerLocation -= 1;
  };

  const postMovement = () => {
    let tiles = {
      north: $playerLocation - 11,
      south: $playerLocation + 11,
      east: $playerLocation + 1,
      west: $playerLocation - 1,
    };

    if ($playerLocation === 0 || $playerLocation % 11 === 0) tiles.west = null;
    if (($playerLocation + 1) % 11 === 0) tiles.east = null;
    if ($playerLocation > 109) tiles.south = null;
    if ($playerLocation < 11) tiles.north = null;

    inspectNeighboringTiles(tiles);
  };

  const inspectNeighboringTiles = (tiles) => {
    Object.keys(tiles).forEach((key) => {
      if ($currentMap[tiles[key]]) {
        $neighboringTiles[key] = $currentMap[tiles[key]];
      } else {
        $neighboringTiles[key] = null;
      }
    });
  };

  postMovement();
</script>

<div class="player" />

<style>
  .player {
    height: 50%;
    border-radius: 180px;
    width: 50%;
    background: #333;
  }
</style>
