<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
      components/shared/buttons/W4LFloatingButton.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// const props = defineProps<{
//  msg: string;
// }>();

// const { msg } = toRefs(props);

// OR

// const { msg } = defineProps<{
//  msg: string;
// }>();
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="fixed bottom-0 right-36 z-30">
    <a
      href="https://www.warriors4lifeusa.org/"
      target="_blank"
      rel="noopener noreferrer"
      class="floating-btn">
      Support us
    </a>
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

.floating-btn {
  @apply bg-[#E82A00] text-white  uppercase text-[12px]
  rounded-t-btn px-4 py-2 flex items-center justify-center
  hover:bg-blue-400 transition duration-300 ease-in-out shadow-lg;
}
</style>
<!-- ---------------------------------------------------- -->

