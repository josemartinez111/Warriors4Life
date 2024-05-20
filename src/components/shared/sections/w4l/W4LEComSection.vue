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
  <div
    class="hero flex flex-col lg:flex-row text-white items-center lg:items-start py-24 bg-desperado-black px-4 lg:pr-44 lg:pt-24"
  >
    <!-- Container to hold the card and ensure it does not get squeezed -->
    <div class="flex-grow w-full lg:w-auto lg:pl-32">
      <div class="card w-full lg:w-96 bg-base-100 shadow-lg drop-shadow-2xl">
        <!-- Image -->
        <figure>
          <img :src="neverForgotten" alt="Never Forgotten" class="w-full" />
        </figure>

        <div class="card-body items-center text-center">
          <h2 class="card-title">
            Warriors 4 Life Apparel
            <span class="badge badge-secondary">NEW</span>
          </h2>
          <p> Supports & visit our darkmodeStore where we have terrific apparel to fit any vet & their families </p>
          <div class="card-actions justify-center">
            <div class="badge badge-outline">Cycling</div>
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Right-aligned container for buttons and text -->
    <div class="flex flex-col items-center lg:items-end w-full lg:w-auto lg:ml-8 mt-8 lg:mt-0">
      <!-- Buttons inventory/sold -->
      <div class="flex w-full lg:pr-24 justify-center lg:justify-end mb-4 lg:mb-0">
        <button class="btn py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 uppercase mr-3 text-xs sm:text-sm lg:text-base">
          inventory
          <span class="badge">+250</span>
        </button>

        <button class="btn py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 uppercase text-xs sm:text-sm lg:text-base">
          Sold
          <span class="badge badge-secondary">+99 🔥</span>
        </button>
      </div>

      <!-- Shop with us text directly under buttons -->
      <div class="w-full lg:w-auto text-center lg:text-left pt-16 lg:pl-12 lg:pr-0">
        <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:pl-12">Shop with us</h1>
        <p class="text-base sm:text-lg pt-8">
          We're more than just vets who love to bike! we're a community of military veterans and their families who
          share a passion for cycling. Whether you're a seasoned rider or new to biking, come join us for a ride.
        </p>
      </div>

      <!-- Buy now button -->
      <div
        class="w-full lg:w-auto lg:pl-12 uppercase py-8 lg:pr-16 text-center lg:text-left flex justify-center lg:justify-start"
      >
        <W4LButton custom-class="btn-md w-full lg:w-96 rounded-none hover:shadow-transparent">Buy Now</W4LButton>
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
