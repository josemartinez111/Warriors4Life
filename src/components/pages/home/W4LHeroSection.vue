<!-- ********************************************************
     component/shared/pages/HomeHeroSection.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { storeToRefs } from 'pinia';

// ################################################################
import { W4LButton, W4LImage } from '../../index.ts';
import { UseDarkmodeStore } from '../../../stores';
import JosePhotoShoot from '../../../assets/images/jose-photo-shoot.jpg';
import CamoImage from '../../../assets/images/camo-image.png';
// ################################################################

const store = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(store);
</script>
<!-- --------------------------------------------------------
                         < >MARKUP</>
--------------------------------------------------------- -->

<template>
  <div
    class="hero min-h-[75vh] drop-shadow-2xl max-w-none z-10"
    :style="{
      backgroundImage: isDarkMode ? `url(${CamoImage})` : 'none',
      backgroundColor: isDarkMode ? 'transparent' : '#fff',
    }"
  >
    <div class="hero-content flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
      <!-- Custom image component -->
      <W4LImage :img-url="JosePhotoShoot" class="w-full lg:w-1/2 max-w-xs lg:max-w-none" />
      <div class="text-center lg:text-left space-y-9 mt-6 lg:mt-0 lg:ml-6 flex flex-col items-center lg:items-start">
        <h1
          :class="[
            `${isDarkMode ? 'text-white' : 'text-blue-950'}`,
            'text-4xl md:text-5xl lg:text-7xl font-bold text-inset',
          ]"
        >
          WARRIORS 4 LIFE
        </h1>
        <p :class="[`${isDarkMode ? 'text-white' : 'text-blue-950'}`, 'text-md md:text-base lg:text-lg py-4 lg:py-6']">
          Recovery through a healthy lifestyle, self-awareness, and empowerment.<br>
          Creating a healthy life style through health and wellness 4 our nations <br>
          warriors and Family. Providing strength, Recovery and Empowerment.
        </p>
        <div :class="[`${isDarkMode ? 'text-white' : 'text-blue-950'}`, 'w-full flex justify-center lg:justify-start']">
          <W4LButton custom-class="font-bold btn-md rounded-[8px] w-full bg-rose-600 text-white border-none sm:w-auto px-10 lg:px-28 uppercase hover:text-white mt-4 lg:mt-0">
            Support Us
          </W4LButton>
        </div>
      </div>
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
