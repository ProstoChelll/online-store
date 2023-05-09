<script setup lang="ts">
import { useFavorites } from "../store/favorites";

const favorites = useFavorites();

console.log(favorites.favorites);
</script>
<template>
  <slot><p>FavoritesPage</p></slot>
</template>

<style module scoped></style>
