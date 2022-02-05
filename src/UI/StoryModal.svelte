<script>
  import { currentInteractable } from "../stores/interact";

  let interactableName = $currentInteractable.name || null;
  let interactableStory = "";

  if (!interactableName) {
    if ($currentInteractable.type === "wall") {
      interactableName = "Wall";
      interactableStory = "A wall blocks your path.";
    }
  } else {
    interactableStory = $currentInteractable.story;
  }
</script>

<div class="storyModal p-10">
  <div class="character mb-10 p-10">
    {interactableName} (to the {$currentInteractable.direction})
  </div>
  <div class="p-10">
    {interactableStory}
  </div>
  <button on:click={() => ($currentInteractable = null)}>Okay</button>
</div>

<style>
  .storyModal {
    width: 375px;
    height: 187.5px;
    position: absolute;
    top: calc(50% - 187.5px);
    left: calc(50% - 187.5px + 244px);
    background: whitesmoke;
    border: 3px solid black;
  }

  .character {
    border-bottom: 1px solid black;
    font-weight: bold;
  }

  button {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
</style>
