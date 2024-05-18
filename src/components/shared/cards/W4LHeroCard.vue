<!-- ********************************************************
                component/shared/W4LHeroCard.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { storeToRefs } from 'pinia';

// ################################################################
import { W4LButton, W4LImage } from '../../index.ts';
import { UseDarkmodeStore } from '../../../stores/UseDarkmodeStore.ts';
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
  <!--
  :style="{
      backgroundImage: isDarkMode ? `url(${CamoImage})` : 'none',
      backgroundColor: isDarkMode ? 'transparent' : '#fff'
    }"
    
    :class="[`${isDarkMode ? 'bg-great-gray' : 'bg-white'}`, 'hero min-h-[75vh] drop-shadow-2xl max-w-none z-10']"
  -->
  <div
    class="hero min-h-[75vh] drop-shadow-2xl max-w-none z-10"
    :style="{
      backgroundImage: isDarkMode ? `url(${CamoImage})` : 'none',
      backgroundColor: isDarkMode ? 'transparent' : '#fff'
    }"
  >
  <div class="hero-content flex-col lg:flex-row">
    <!-- Custom image component -->
    <W4LImage :img-url="JosePhotoShoot" />
    <div>
      <h1
        :class="[`${isDarkMode ? 'text-white' : 'text-blue-950'}`, 'text-7xl lg:text-7xl font-bold drop-shadow-lg']"
      >WARRIORS 4 LIFE
      </h1>
      <p
        :class="[`${isDarkMode ? 'text-white' : 'text-blue-950'}`, 'text-blue-950 text-sm lg:text-base py-4 lg:py-6']">
        Recovery through a healthy lifestyle, self-awareness, and empowerment.
      </p>
      
      <div :class="`${isDarkMode ? 'text-white' : 'text-blue-950'}`">
        <W4LButton custom-class="font-bold btn-md rounded-[8px] px-16 uppercase hover:text-white">
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