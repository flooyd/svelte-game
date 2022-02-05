<script>
  import { neighboringTiles } from "../stores/player";
</script>

<div class="container">
  <h1 class="game">The Game</h1>
  <div class="twenty mtb-10">
    <span class="bold">Landscape: </span>
    <span class="mlr-10">Desert</span>
  </div>
  <div class="twenty mtb-10">
    <div class="block">
      To the <span class="bold">north:</span>
      <span class="mlr-10"
        >{$neighboringTiles?.north?.name ||
          $neighboringTiles?.north?.type ||
          "nothing"}</span
      >
    </div>
    <div class="block">
      To the <span class="bold">east:</span>
      <span class="mlr-10"
        >{$neighboringTiles?.east?.name ||
          $neighboringTiles?.east?.type ||
          "nothing"}</span
      >
    </div>
    <div class="block">
      To the <span class="bold">south:</span>
      <span class="mlr-10"
        >{$neighboringTiles?.south?.name ||
          $neighboringTiles?.south?.type ||
          "nothing"}</span
      >
    </div>
    <div class="block">
      To the <span class="bold">west:</span>
      <span class="mlr-10"
        >{$neighboringTiles?.west?.name ||
          $neighboringTiles?.west?.type ||
          "nothing"}</span
      >
    </div>
  </div>
</div>

<style>
  .container {
    position: fixed;
    padding: 20px;
    display: flex;
    flex-direction: column;
    top: 0px;
    left: 0px;
    background: whitesmoke;
    border-right: 3px solid #333;
    width: 440px;
    height: 100vh;
  }

  .game {
    margin-bottom: 31.25px;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    font-weight: bold;
    font-style: italic;
  }
</style>
