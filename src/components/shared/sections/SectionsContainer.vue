<!-- ********************************************************
        component/shared/sections/SectionsContainer.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { toRefs } from 'vue';
import { UseColorStore } from '../../../stores/UseColorStore.ts';
import { W4LImage } from '../../index.ts';
// ################################################################

const props = defineProps<{
  sectionHeader: string;
  paragraph: string;
  img?: string;
}>();

const { sectionHeader, paragraph, img } = toRefs(props);
const store = UseColorStore();
</script>
<!-- --------------------------------------------------------
                         < >MARKUP</>
--------------------------------------------------------- -->

<template>
  <div :class="[`${store.dreamBlue}`, 'hero-overlay hero min-h-[75vh] py-24 sm:py-16']">
  <div
    class="mx-auto grid gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
    <div class="max-w-2xl">
      <h2
        class="text-4xl font-bold tracking-tight text-white sm:text-4xl">
        {{ sectionHeader }}
      </h2>
      <p
        class="mt-6 text-lg leading-8 text-white drop-shadow-2xl shadow-accent">
        {{ paragraph }}
      </p>
      
      <!-- Image component -->
      <W4LImage :img-url="img ?? ''" custom-class="w-full lg:w-full max-w-none h-auto" />
    </div>
    
    <ul role="list"
        class="grid gap-x-8 gap-y-12 sm:grid-cols-1 sm:gap-y-16 xl:col-span-2">
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
<style scoped>
/* ################################################################### */
/* ---------------------------- IMPORTS ------------------------------ */

/* ################################################################### */

</style>
<!-- ---------------------------------------------------- -->