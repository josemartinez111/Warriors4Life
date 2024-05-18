<!-- ********************************************************
                       COMPONENT_PATH
********************************************************* -->
<!-- --------------------------------------------------------
      components/shared/sections/w4l/W4LEComSection.vue
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import neverForgotten from '../../../../assets/images/neverForgotten.jpg';
import W4LButton from '../../buttons/W4LButton.vue';
// ################################################################

</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="hero flex text-white items-start py-24 bg-desperado-black pr-44 pt-24">
    <!-- Container to hold the card and ensure it does not get squeezed -->
    <div class="flex-grow  pl-32">
      <div class="card w-96 bg-base-100 shadow-lg drop-shadow-2xl">
        <!-- Image -->
        <figure>
          <img :src="neverForgotten" alt="Never Forgotten" />
        </figure>
        
        <div class="card-body items-center text-center">
          <h2 class="card-title">
            Warriors 4 Life Apparel
            <span class="badge badge-secondary">NEW</span>
          </h2>
          <p>
            Supports & visit our darkmodeStore where we have terrific
            apparel to fit any vet & their families
          </p>
          <div class="card-actions justify-center">
            <div class="badge badge-outline">Cycling</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Right-aligned container for buttons and text -->
    <div class="flex flex-col items-end ml-8">
      <!-- Buttons inventory/sold -->
      <div class="flex pr-24">
        <button class="btn uppercase mr-3">
          inventory
          <span class="badge">+250</span>
        </button>
        
        <button class="btn uppercase">
          Sold
          <span class="badge badge-secondary">+99 🔥</span>
        </button>
      </div>
      
      <!-- Shop with us text directly under buttons -->
      <div class="w-full pt-16 pl-16 pr-0">
        <h1 class="text-5xl">Shop with us</h1>
        <p class="text-lg pt-8">
          We're more than just vets who love to bike! we're a community of military veterans
          and their families who share a passion for cycling. Whether you're a
          seasoned rider or new to biking, come join us for a ride.
        </p>
      </div>
      
      <!-- Buy now button -->
      <div class="w-full pl-16 uppercase py-8">
        <W4LButton custom-class="btn-md w-96 rounded-none hover:shadow-transparent">
        Buy Now
      </W4LButton>
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