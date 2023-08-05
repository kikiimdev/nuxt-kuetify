<template>
  <KBlock class="fill-height">
    <VCard height="100%" class="ma-4 mt-0">
      <div ref="containerRef" class="fill-height">
        <section ref="headerSectionRef">
          <slot name="header" />
        </section>
        <section v-if="bodyHeight">
          <KBlock class="fill-height">
            <VCardText class="px-0" :style="styleComputed">
              <slot />
            </VCardText>
          </KBlock>
        </section>
        <section ref="footerSectionRef">
          <slot name="footer" />
        </section>
      </div>
    </VCard>
  </KBlock>
</template>

<script setup lang="ts">
import { StyleValue } from "nuxt/dist/app/compat/capi";
import { ref, onMounted, computed } from "#imports";

const containerRef = ref<HTMLDivElement>();
const headerSectionRef = ref<HTMLDivElement>();
const footerSectionRef = ref<HTMLDivElement>();

const bodyHeight = ref(0);

onMounted(() => {
  setTimeout(() => {
    const divHeight = containerRef.value?.clientHeight!;
    const headerHeight = headerSectionRef.value?.clientHeight!;
    const footerHeight = footerSectionRef.value?.clientHeight!;
    bodyHeight.value = divHeight - headerHeight - footerHeight;
  }, 100);
});

const styleComputed = computed<StyleValue>(() => {
  return {
    height: bodyHeight.value + "px",
    "overflow-y": "scroll",
  };
});
</script>

<style></style>
