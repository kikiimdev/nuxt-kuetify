<template>
  <div
    class="skeleton skeleton-text"
    :style="styleComputed"
  />
</template>

<script setup lang="ts">
import { computed } from "#imports"

const props = withDefaults(defineProps<{
  height?: string
  width?: string
  borderRadius?: string
}>(), {
  height: '12px',
  width: '100%',
  borderRadius: '0.25rem',
})

const styleComputed = computed(() => {
  return {
    height: props.height,
    width: props.width,
    borderRadius: props.borderRadius,
  }
})
</script>

<style></style>
