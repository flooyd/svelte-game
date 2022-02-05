<script>
  import Player from "./Player.svelte";

  import { playerLocation } from "./stores/player";

  export let index;
  export let special;

  let width = (window.visualViewport.width - 440 - 20) / 11;
  console.log(width);

  const handleClick = () => {
    console.log("hi");
    console.log(window.visualViewport);
  };
</script>

<div
  class="tile"
  style={`width: calc(${width}px - 11px);`}
  on:click={handleClick}
>
  {#if $playerLocation === index}
    <Player />
  {/if}
  {#if special?.type === "wall"}
    <div class="wall" />
  {/if}
  {#if special?.type === "npc"}
    <div
      class="bold npc"
      style={`color: ${special.color ? special.color : "black"}`}
    >
      :)
    </div>
  {/if}
</div>

<style>
  .tile {
    border: 1px solid black;
    border-collapse: collapse;
    margin: 2px;
    background: #987654;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wall {
    height: 100%;
    width: 100%;
    background: whitesmoke;
  }

  .npc {
    font-size: 36px;
  }
</style>
