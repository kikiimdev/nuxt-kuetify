<template>
  <img
    class="skeleton"
    :style="styleComputed"
  >
</template>

<script setup lang="ts">
import { computed } from "#imports"

const props = withDefaults(defineProps<{
  size?: string
}>(), {
  size: '32px'
})

const styleComputed = computed(() => {
  return {
    height: props.size,
    width: props.size,
    borderRadius: '50%',
    margin: '4px 0'
  }
})
</script>

<style></style>
