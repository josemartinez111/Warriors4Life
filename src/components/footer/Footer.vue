<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
                components/footer/Footer.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import logo from '../../assets/images/warriors4Life-no-bg.png';
import { DisplaySVGIcons } from '../../components';
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
  <div class="pt-24">
    <footer class="footer h-full pl-4 sm:pl-10 bg-desperado-black text-neutral-content z-10 drop-shadow-2xl">
      <aside>
        <div class="pb-8 sm:pb-16 mt-8 sm:mt-16">
          <a href="#" class="flex items-center text-white">
            <img :src="logo" alt="Logo" class="h-8 sm:h-12 md:h-16 mr-2 shadow-inner drop-shadow-2xl">
            <span class="text-sm sm:text-lg md:text-[1.5rem] uppercase shadow-accent drop-shadow-2xl">
              Warriors4Life
            </span>
          </a>
          <p class="pt-4 sm:pt-8">
            +1 720-339-3132​
            <br>
            ​jsantiago.warriors4life@gmail.com
            <br>
            © Warriors 4 Life. All rights reserved.
          </p>
        </div>
      </aside>
      <nav>
        <!-- Social Media Section -->
        <h6 class="footer-title pt-8 sm:pt-16">Social Media</h6>
        <div class="grid grid-flow-col gap-2 sm:gap-4 pb-16 sm:pb-8">
          <DisplaySVGIcons icon-name="youtube" />
          <DisplaySVGIcons icon-name="facebook" />
          <DisplaySVGIcons icon-name="linkedin" />
          <DisplaySVGIcons icon-name="instagram" />
        </div>
      </nav>
    </footer>
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped>


</style>
<!-- ---------------------------------------------------- -->
