<!-- ********************************************************
       components/shared/pages/about/AboutHeroCard.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { ref } from 'vue';
import { UseColorStore, UseDebounceStore } from '../../../stores';
import W4LButton from '../../shared/buttons/W4LButton.vue';
// ################################################################

const colorStore = UseColorStore();
const debounceStore = UseDebounceStore();

const sectionRef = ref<HTMLElement | undefined>(undefined);

// Set the scroll handler with the desired logic
debounceStore.setScrollHandler(() => {
  // Your scroll event logic here
  console.log('Handling scroll event');
}, 100);
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <section
    ref="sectionRef"
    class="relative bg-finish-line bg-cover bg-center text-white drop-shadow-2xl h-screen flex items-center"
  >
    <!-- Gradient overlay if needed, adjust as necessary -->
    <div
      :class="[`${colorStore.dreamBlue}`, 'absolute inset-0 bg-gradient-to-r from-blue-950 to-transparent/70']"
    ></div>
    
    <!-- Content container with padding but no max width constraint -->
    <div class="w-full px-4 py-24 sm:px-6 z-10 lg:px-8 flex justify-center">
      <div class="text-center sm:text-left leading-loose rtl:sm:text-right space-y-8 w-full md:w-10/12 lg:w-7/12 px-4 mr-auto ml-auto">
        <h1 class="text-3xl sm:text-4xl md:text-5xl uppercase font-extrabold">
          Mission <span class="text-blue-800">Vision</span>
          <strong class="block font-extrabold text-rose-700">Purpose.</strong>
        </h1>

        <p class="text-sm sm:text-base md:text-xl max-w-full">
          <span class="text-rose-500">Empowering Our Nation's Heroes —</span>
          At <span class="text-blue-700">Warriors 4 Life</span>, we're dedicated to supporting wounded service members
          and their families through health, wellness, and community support. Our mission is to
          <span class="text-rose-500">strengthen, empower, and enhance</span> the lives of veterans across generations,
          ensuring they receive the respect and resources they deserve. Join us in making a significant impact.
        </p>
        <!-- Support Us button -->
        <div class="flex justify-center sm:align-middle">
          <W4LButton custom-class="w4l-btn">Support Us</W4LButton>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">
/* ################################################################### */
/* ---------------------------- IMPORTS ------------------------------ */

/* ################################################################### */

/*noinspection CssUnusedSymbol*/
.w4l-btn {
  @apply btn-md uppercase rounded-[8px] btn-ghost
  bg-rose-600 px-24 text-sm font-medium
  text-white shadow-2xl hover:bg-rose-700 active:opacity-5;
}
</style>
<!-- ---------------------------------------------------- -->
