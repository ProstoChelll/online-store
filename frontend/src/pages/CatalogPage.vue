<script setup lang="ts">
import { PageTemplate } from "../layouts";

const id = "123";
</script>
<template>
  <PageTemplate>
    <template #header><span></span></template>
    <template #body
      ><h1>Catalog Page</h1>
      <div>
        <button class="border p-3 bg-slate-400">
          <router-link :to="`/catalog/:${id}`"> Go to Pruduct</router-link>
        </button>
      </div></template
    >
    <template #footer></template>
  </PageTemplate>

  <slot></slot>
</template>
