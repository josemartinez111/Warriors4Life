<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
                       COMPONENT_PATH
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { storeToRefs } from 'pinia';
import usoJose from '../../../assets/images/usoJose.jpg';
import { UseColorStore, UseDarkmodeStore } from '../../../stores';
import W4LButton from '../../shared/buttons/W4LButton.vue';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const store = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(store);
const colorStore = UseColorStore();
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <section :class="[isDarkMode ? 'bg-desperado-black' : 'bg-white', 'w-full mt-16 pt-16 z-10 drop-shadow']">
    <div class="container mx-auto">
      <!-- Main content layout with flex properties -->
      <div class="hero-content flex flex-col items-start">
        <!-- Placeholder content box -->
        <div class="lg:pt-4 pt-6 w-full lg:w-3/12 px-4 text-center drop-shadow-2xl mb-6 lg:mb-0">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
            <div class="px-4 flex-auto">
              <!-- Placeholder for future content -->
            </div>
          </div>
        </div>
        <!-- Text content area with proper spacing -->
        <div :class="[isDarkMode ? 'text-white' : 'text-blue-950', 'lg:w-9/12 mr-auto ml-0 text-center lg:text-left']">
          <div
              class="text-blue-gray-500 p-3 inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"
          >
            <!-- SVG-Icon -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              :stroke="isDarkMode ? `${colorStore.pinkFriday}` : `${colorStore.pinkFriday}`"
              stroke-width="1.5"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
              />
            </svg>
          </div>

          <div v-once class="pr-12">
            <!-- Heading text -->
            <h3 v-once class="text-4xl mb-2 font-semibold leading-normal"> Our Journey & Company Overview </h3>
            <div class="text-sm leading-loose mt-0 mb-4">
              <!-- Paragraph #1 -->
              <p v-once>
                At Warriors 4 Life, we're more than a community, we're a family on a mission to redefine "normal" for
                our veterans and their families. Every day, an average of 22 veterans are lost to suicide. It’s a
                startling statistic that we're passionately committed to changing. Through a blend of physical health,
                wellness initiatives, and unyielding support, we empower our heroes to embrace life beyond service. Why
                cycling? It's not just a sport, it’s our chosen method to uplift spirits and forge camaraderie among
                wounded veterans and their families. Established over a decade ago and recognized as a non-profit since
                2015 (EIN # 47-32287891), our cycling team has become the heartbeat of our operation. Cycling alongside
                activities like swimming, track and field, and hiking, is more than exercise—it's a lifeline.
              </p>
              <!-- Paragraph #2 -->
              <p v-once>
                We're all about creating a healthy lifestyle that goes beyond physical wellness. Emotional recovery,
                family support, and empowerment are at the core of our approach. We believe that when a family rides
                together, they heal together. It's this philosophy that has driven us to host cycling events that do
                more than just get the wheels spinning, they rebuild lives. Our ultimate goal? Equip our warriors with
                the tools they need for both emotional and physical rehabilitation, ensuring every veteran can pedal
                towards a brighter, healthier future.
              </p>
            </div>
          </div>
        </div>
        
        <!-- Image and text card section -->
        <div class="w-full lg:w-5/12 px-4 mb-6 lg:mb-0">
          <div class="relative flex flex-col min-w-0 break-words w-full mb-4 shadow-lg rounded-lg bg-rose-600">
            <img
              alt="..."
              :src="usoJose"
              class="w-full h-auto align-middle rounded-t-lg"
              :srcset="`${usoJose} 100w, ${usoJose} 200w`"
              sizes="(max-width: 600px) 100vw, 50vw"
            />
            <blockquote class="relative p-8 mb-4">
              <!-- Card Text -->
              <h4 v-once class="text-2xl pb-4 font-bold text-sky-100">Unwavering Dedication</h4>
              <p v-once class="text-sm font-light mt-2 text-white">
                Just as the Arctic Ocean cycles through freezing and thawing with the seasons, at Warriors 4 Life, we
                recognize the ongoing cycles of challenge and recovery that our veterans face. Our commitment is
                constant, adapting to each season of a veteran’s journey. Through our cycling events and support
                programs, we provide steadfast support and resources, ensuring that every veteran can navigate their
                path to healing, regardless of the challenges that lie ahead.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <!-- Button positioned below the main content -->
      <div class="text-center mt-8 pb-8">
        <W4LButton
          :custom-class="[
            isDarkMode ? 'text-white bg-gradient-to-tr' : '',
            'btn-md w-7/12 bg-blue-950 hover:bg-rose-600 border-none text-white uppercase rounded-[8px] text-blue-950 hover:text-white',
          ]"
        >
          Register Now
        </W4LButton>
      </div>
    </div>
  </section>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">


</style>
<!-- ---------------------------------------------------- -->
