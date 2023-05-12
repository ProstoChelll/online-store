<script setup lang="ts">
import { useFavorites } from "../store/favorites";
import { PageTemplate } from "../layouts";
import {} from "../components";

const favorites = useFavorites();

console.log(favorites.favorites);
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body>
      <h2 class="favoritesTxtInFavoritsPage lg:lgFavoritesTxtInFavoritsPage">
        Избранное
      </h2>
    </template>
    <template #footer></template>
  </PageTemplate>
</template>

<style module scoped></style>
