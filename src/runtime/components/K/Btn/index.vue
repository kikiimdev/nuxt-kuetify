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
import { VBtn, VTooltip } from "vuetify/components";
// type VBtnProps = VBtn["$props"];
// type VTooltipProps = VTooltip["$props"];

defineProps<{
  hello?: string;
  tooltipText?: string;
  tooltipProps?: Record<string, any>;
}>();
</script>

<style></style>
