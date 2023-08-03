<template>
  <div :class="[column ? 'd-flex flex-column' : 'd-flex flex-row']">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    column?: boolean;
  }>(),
  {
    column: false,
  }
);
</script>

<style></style>
