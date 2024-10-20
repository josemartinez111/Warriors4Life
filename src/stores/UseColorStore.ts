// ---------------------------------------------------------
//                  darkmodeStore/UseColorStore.ts
// ---------------------------------------------------------

import { defineStore } from 'pinia';
import { ref } from 'vue';
// ---------------------------------------------------------

export const UseColorStore = defineStore('colorStore', () => {
  const dreamBlue = ref('bg-gradient-to-r from-blue-950 to-transparent/70');
  const bgPinkFriday = ref('bg-rose-600');
  const pinkFriday = ref('#E11D48');
  
  return {
    dreamBlue,
    bgPinkFriday,
    pinkFriday
  };
});
// ---------------------------------------------------------




















