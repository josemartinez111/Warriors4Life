<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
                       COMPONENT_PATH
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const LEFT_ARROW = '❮';
const RIGHT_ARROW = '❯';

// Props destructuring using Composition API
const {navigatePrev, navigateNext} = defineProps<{
  navigatePrev: () => void;
  navigateNext: () => void;
}>();


</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
<div
  class="absolute flex justify-between items-center inset-y-0 left-5 right-5">
  <a
    @click.prevent="navigatePrev"
    href="#"
    class="btn btn-circle"
  >{{ LEFT_ARROW }}</a>
  <a
    @click.prevent="navigateNext"
    href="#"
    class="btn btn-circle"
  >{{ RIGHT_ARROW }}</a>
</div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

.carousel-item img {
  @apply w-full h-full object-cover;
}

.btn-circle {
  @apply w-12 h-12 flex items-center opacity-85 justify-center
  rounded-full text-white bg-blue-800 shadow-lg hover:bg-rose-600
  hover:text-white hover:shadow-xl transition duration-200;
}
</style>
<!-- ---------------------------------------------------- -->
