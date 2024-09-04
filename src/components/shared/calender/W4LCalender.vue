<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
             components/shared/W4LCalender.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { computed, toRefs } from 'vue';
import { UseCalendar } from '../../../composables/UseCalendar.ts';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// Composables
const {
  generateWeeks,
  currentMonth,
  currentYear,
  daysOfWeek,
  weeks,
} = UseCalendar();

// Has to build the calendar for the whole month
generateWeeks();

const props = withDefaults(defineProps<{
  handleCalendarClick?: () => void;
}>(), {
  handleCalendarClick: () => {
    const err = {
      error: 'No function provided for handling calendar click',
    };
    
    console.error(err);
  },
});

const { handleCalendarClick } = toRefs(props);

const todayComputed = computed(() => new Date().setHours(0, 0, 0, 0));
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div @click="handleCalendarClick" class="calendar-container">
    <!-- Main container that centers everything horizontally and vertically -->
    <div class="container mx-auto px-2 sm:px-4 lg:px-6">
      <!-- Calendar wrapper with responsive settings; adjust 'md:max-w-xl' and 'lg:max-w-2xl' for desktop sizing -->
      <div class="wrapper responsive-container max-w-full md:max-w-xl lg:max-w-2xl mx-auto">
        <!-- Header section with responsive font size -->
        <div class="header flex justify-between border-b px-2 py-3">
          <span class="text-xs sm:text-sm lg:text-lg font-semibold">{{ currentMonth }} {{ currentYear }}</span>
          <span class="uppercase text-xs sm:text-sm md:text-base">Click me</span>
          <div class="buttons flex">
            <button class="p-1 mr-2">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-left-circle">
                <!-- Left arrow SVG -->
              </svg>
            </button>
            <button class="p-1">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" class="bi bi-arrow-right-circle">
                <!-- Right arrow SVG -->
              </svg>
            </button>
          </div>
        </div>
        <!-- Table settings adjust text size across different breakpoints: 'text-[8px] sm:text-[10px] md:text-xs' -->
        <table class="w-full text-[8px] sm:text-[10px] md:text-xs">
          <thead>
            <tr>
              <!-- Headers for days of the week with responsive design -->
              <th v-for="dayName in daysOfWeek" :key="dayName" class="py-1 border-b border-r last:border-r-0 text-center">
                {{ dayName }}
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Each row represents a week -->
            <tr v-for="(week, index) in weeks" :key="index" class="text-center">
              <!-- Day cell with responsive height and width -->
              <td v-for="day in week.days" :key="day.date.toISOString()" :class="[
                'calendar-adjuster border h-full', {
                  'bg-blue-500': new Date(day.date).setHours(0, 0, 0, 0) === todayComputed
                }
              ]">
                <!-- Display Day -->
                <div class="day-date the-day">
                  {{ day.date.getDate() }}
                </div>
                <!-- Events section with responsive text size for mobile and desktop -->
                <div class="events mt-1 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs">
                  <div v-for="event in day.events" :key="event.id" class="evt-status">
                    {{ event.name }} - {{ event.time }}
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">
	@import "./calendar.styles.css";
</style>
<!-- ---------------------------------------------------- -->


