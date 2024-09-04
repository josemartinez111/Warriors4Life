<!-- ********************************************************
       components/shared/pages/about/TeamCard.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { storeToRefs } from 'pinia';

// ################################################################
import { reactive } from 'vue';
import { UseColorStore } from '../../../stores/UseColorStore.ts';
import { UseDarkmodeStore } from '../../../stores/UseDarkmodeStore.ts';
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
    image: 'https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Graphic Designer',
    image: 'https://media.istockphoto.com/id/1388253782/photo/positive-successful-millennial-business-professional-man-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=0HU1oQGXlO4nrrMKKzAK4Jmu6XDLvXhTGjKScvrNIZw=',
  },
  {
    id: 3,
    name: 'Alex Johnson',
    role: 'Marketing Manager',
    image: 'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=2048x2048&w=is&k=20&c=JecbHiBxM7ZzAADbPkqJuvNoCs3uO2VrK2LmrSpm3Ek=',
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    role: 'Content Writer',
    image: 'https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=eskue6p9gwUVS2t0Kpuw6rd7Sgu5nKgxsMD6Aqaba8I=',
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
    <div class="container px-4">
      <h2 :class="[ `${isDarkMode ? 'text-white' : ''}`, 'text-5xl font-bold text-center mb-8 text-blue-950 uppercase']">
        Meet Our Team
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.id"
          :class="[`${isDarkMode ? `${colorStore.dreamBlue} text-white` : 'bg-white'}`, 'rounded-lg shadow-md p-6 my-6 space-x-14 text-center']">
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