import { writable } from "svelte/store";

export const showStoryModal = writable(false);
export const currentInteractable = writable(null);
