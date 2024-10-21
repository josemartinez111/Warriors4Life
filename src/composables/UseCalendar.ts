// ---------------------------------------------------------
//             composables/UseCalendar.ts
// ---------------------------------------------------------
import { computed, ref } from 'vue';
import { FutureEvent, Week } from '../types/calendar-types.ts';
// ---------------------------------------------------------

function UseCalendar() {
  const daysOfWeek = ref([
    'Sunday', 'Monday',
    'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
  ]);
  
  const currentDate = ref(new Date());
  const currentMonth = computed(() => currentDate.value.toLocaleString('default', { month: 'long' }));
  const currentYear = computed(() => currentDate.value.getFullYear());
  
  const weeks = ref<Week[]>([]);
  
  function generateWeeks() {
    const startOfMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1);
    const daysInMonth = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate();
    let dayIndex = startOfMonth.getDay();  // Day of the week the month starts on
    
    const weeksArray: Week[] = [];
    let week: Week = { days: [] };
    let dayCount = 0;
    
    // Fill days before the first of the month if needed
    for (let i = 0; i < dayIndex; i++) {
      week.days.push({
        date: new Date(startOfMonth.getFullYear(), startOfMonth.getMonth(), i - dayIndex + 1),
        events: [],
      });
      dayCount++;
    }
    
    // Fill the days with the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(startOfMonth.getFullYear(), startOfMonth.getMonth(), day);
      const events: FutureEvent[] = [];
      if (day === 1 || day === 15) {  // Static events for demonstration
        events.push({
          id: day,
          name: 'Ride for America Washington DC',
          time: '12:00~14:00',
        });
      }
      
      week.days.push({ date, events });
      dayCount++;

      if (dayCount % 7 === 0 || day === daysInMonth) {
        weeksArray.push(week);
        week = { days: [] };
        if (day !== daysInMonth) dayCount = 0;  // Reset for a new week unless it's the end of the month
      }
    }
    
    weeks.value = weeksArray;
  }
  
  return {
    daysOfWeek,
    currentMonth,
    currentYear,
    weeks,
    generateWeeks,
  }
}

export default UseCalendar;
// ---------------------------------------------------------