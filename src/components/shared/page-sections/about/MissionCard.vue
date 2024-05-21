<!-- ********************************************************
       components/shared/page-sections/about/MissionCard.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { computed } from 'vue';
import { UseColorStore } from '../../../../stores';
import twoWarriors from '../../../../assets/images/twoWarriors.jpg';
import neverForget from '../../../../assets/images/never-forget.jpg';
import theSquad from '../../../../assets/images/the-squad.jpg';
// ################################################################

interface Item {
  id: number;
  title: string;
  image: string;
  date: { day: string; month: string };
  description: string;
  style?: any;
}
// ____________________________________________________________________

const colorStore = UseColorStore();

const items: Item[] = [
  {
    id: 1,
    title: 'Mission',
    image: `${twoWarriors}`,
    date: { day: '01', month: 'Commitment' },
    description: `At Warriors 4 Life, we are dedicated to fostering a healthy
    lifestyle for our nation's warriors and their families through strength,
    recovery, and empowerment. We aim to provide them with encouragement,
    and equip them with necessary tools.`,
  },
  {
    id: 2,
    title: 'Vision',
    image: `${neverForget}`,
    date: { day: '02', month: 'Commitment' },
    description: `Warriors 4 Life is dedicated to supporting and strengthening
    wounded service members across all generations. Our goal is to cultivate
    respect and recognition for their service, ensuring they are valued members
    of our community.`,
  },
  {
    id: 3,
    title: 'Purpose',
    image: `${theSquad}`,
    date: { day: '03', month: 'Commitment' },
    description: `Warriors 4 Life champions disabled military veterans through
    transformative cycling initiatives. Our mission is to enhance their physical
    and mental well-being, foster community connections, and recognize their enduring
    contributions to our nation.`,
  },
];

// Computed property to enrich items with style data
const computedItems = computed(() => {
  return items.map((item: Item) => ({
    ...item,
    style: {
      backgroundImage: `url(${item.image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  }));
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div :class="[`${colorStore.dreamBlue}`, 'w-full min-w-36 mx-auto text-white']">
    <div class="flex flex-wrap justify-center gap-8 lg:gap-24 p-8 sm:p-16 lg:p-24">
      <!-- Using computed property to handle the background images -->
      <div v-for="item in computedItems" :key="item.id"
           class="relative rounded-3xl text-white shadow-inner flex items-end justify-start w-full sm:w-5/12 lg:w-1/4 text-left dark:bg-gray-500 bg-cover bg-center h-72 sm:h-80 md:h-96">
        <div class="absolute rounded-3xl inset-0 drop-shadow-2xl brightness-50" :style="item.style"></div>
        <div class="absolute top-0 left-0 right-0 flex items-center justify-between mx-3 sm:mx-5 mt-3">
          <span class="px-2 sm:px-3 py-1 sm:py-2 text-xs font-semibold tracking-wider uppercase dark:bg-rose-800">
            {{ item.title }}
          </span>
          <div class="flex flex-col justify-start text-center text-white">
            <span class="text-lg sm:text-xl md:text-2xl font-semibold leading-none tracking-wide">
              {{ item.date.day }}
            </span>
            <span class="text-xs sm:text-sm md:text-base leading-none uppercase">
              {{ item.date.month }}
            </span>
          </div>
        </div>
        <h2 class="z-10 p-4 sm:p-5">
          <span class="text-xs sm:text-sm md:text-md text-blue-200 brightness-200 drop-shadow-2xl z-10 shadow-base-300">
            {{ item.description }}
          </span>
        </h2>
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

/* .bg-screen-1 {
  background-image: url("../../../../assets/images/downhillBiking.jpg");
} */
</style>
<!-- ---------------------------------------------------- -->