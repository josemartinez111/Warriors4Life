<!-- ********************************************************
       components/shared/sections/about/TeamCard.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { storeToRefs } from 'pinia';

// ################################################################
import { reactive } from 'vue';
import { UseColorStore } from '../../../../stores/UseColorStore.ts';
import { UseDarkmodeStore } from '../../../../stores/UseDarkmodeStore.ts';
// ################################################################

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}
// ____________________________________________________________________

const darkmodeStore = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(darkmodeStore);

const colorStore = UseColorStore();

const teamMembers = reactive<TeamMember[]>([
  {
    id: 1,
    name: 'John Doe',
    role: 'Software Engineer',
    image: 'https://spacema-dev.com/elevate/assets/images/team/1.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Graphic Designer',
    image: 'https://spacema-dev.com/elevate/assets/images/team/4.jpg',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Marketing Manager',
    image: 'https://spacema-dev.com/elevate/assets/images/team/3.jpg',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Content Writer',
    image: 'https://spacema-dev.com/elevate/assets/images/team/7.jpg',
  },
  // Add additional team members here
]);
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<!--
:class="[`${isDarkMode ? 'dark:bg-jet-gray' : 'bg-white'}`, 'rounded-lg shadow-md p-6 my-6 text-center']"
-->
<template>
  <section id="our-team" :class="[`${isDarkMode ? `${colorStore.dreamBlue}` : 'bg-gray-100'}`, 'py-32']">
    <div class="container mx-auto px-4">
      <h2 :class="[ `${isDarkMode ? 'text-white' : ''}`, 'text-5xl font-bold text-center mb-8 text-blue-950 uppercase']">
        Meet Our Team
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.id"
          :class="[`${isDarkMode ? `${colorStore.dreamBlue} text-white` : 'bg-white'}`, 'rounded-lg shadow-md p-6 my-6 text-center']">
          <img :src="member.image" :alt="member.name"
               class="w-full rounded-full mb-4">
          <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
          <p :class="[`${isDarkMode ? 'text-white' : ''}`]">
            {{ member.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
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