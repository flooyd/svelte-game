<script lang="ts">
  import { currentMap } from "./stores/map";
  import { currentInteractable } from "./stores/interact";

  import Tile from "./Tile.svelte";

  import Container from "./UI/Container.svelte";
  import map from "./UI/maps/1";
  import StoryModal from "./UI/StoryModal.svelte";

  $currentMap = map;

  const grid = [];
  for (let i = 0; i < 121; i++) {
    if (map[i]) {
      grid.push({ index: i, specialTile: map[i] });
    } else {
      grid.push({ index: i });
    }
  }
</script>

<main>
  <Container />
  {#if $currentInteractable}
    <StoryModal />
  {/if}
  <div class="grid">
    {#each grid as tile}
      <Tile index={tile.index} special={tile.specialTile} />
    {/each}
  </div>
</main>

<style>
  main {
    background: #ccc;
  }
  .grid {
    background: #ccc;
    margin-left: 488px;
    padding: 8px 0px;
    width: calc(100vw - 488px);
    height: calc(100vh - 16px);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
