import { defineStore } from "pinia";

import cs from "@/assets/games/cs.svg?url";
import dota from "@/assets/games/dota.svg?url";
import rust from "@/assets/games/rust.svg?url";
import tf from "@/assets/games/tf.svg?url";

const initialGames = [
  { name: "CS 2", id: "cs", img: cs },
  { name: "DOTA 2", id: "dota", img: dota },
  { name: "RUST", id: "rust", img: rust },
  { name: "TF 2", id: "tf", img: tf },
];

export const useSelectedGameStore = defineStore("selected-game", {
  state: () => ({
    games: initialGames,
    selectedGame: initialGames[0],
  }),
  actions: {
    updateSelectedGame(game, router) {
      this.selectedGame = game;
      router.push(`/catalog/${game.id}`);
    },
  },
});
