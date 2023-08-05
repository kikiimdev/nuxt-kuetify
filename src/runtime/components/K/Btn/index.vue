<template>
  <VBtn>
    <slot />

    <VTooltip
      v-if="tooltipText || tooltipProps"
      activator="parent"
      location="bottom"
      v-bind="tooltipProps"
    >
      {{ tooltipText }}
    </VTooltip>
  </VBtn>
</template>

<script setup lang="ts">
import type { VBtn, VTooltip } from "vuetify/components";

defineProps<
  VBtn["$props"] & {
    hello?: string;
    tooltipText?: string;
    tooltipProps?: VTooltip["$props"];
  }
>();
</script>

<style></style>
