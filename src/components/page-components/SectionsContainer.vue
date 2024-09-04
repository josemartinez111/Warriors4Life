<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
   component/shared/page-components/SectionsContainer.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { UseColorStore } from '../../stores';
import { W4LImage } from '../index.ts';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const { sectionHeader, paragraph, img } = defineProps<{
  sectionHeader: string;
  paragraph: string;
  img?: string;
}>();

const store = UseColorStore();
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div :class="[`${store.dreamBlue}`, 'hero-overlay hero min-h-[75vh] py-24 sm:py-16']">
    <div class="mx-auto grid gap-x-8 gap-y-10 px-6 lg:px-8 xl:grid-cols-3">
      <div class="w-full mx-auto lg:mx-0 text-center lg:text-left">
        <h2 class="header">
          {{ sectionHeader }}
        </h2>
        <p class="paragraph">
          {{ paragraph }}
        </p>
        
        <!-- Image component -->
        <W4LImage
          :img-url="img ?? ''"
          custom-class="w-full h-auto lg:w-full xl:w-full max-w-none mx-auto lg:mx-0 mt-4 lg:mt-0"
        />
      </div>

      <ul role="list" class="grid gap-x-8 gap-y-6 sm:grid-cols-1 sm:gap-y-8 xl:col-span-2">
        <li>
          <slot></slot>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

.header {
  @apply text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white;
}

.paragraph {
  @apply mt-4 text-sm sm:text-base
  md:text-lg lg:text-xl leading-7
  text-white drop-shadow-2xl shadow-accent;
}
</style>
<!-- ---------------------------------------------------- -->


