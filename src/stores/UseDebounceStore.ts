// ---------------------------------------------------------
//                  stores/UseDebounceStore.ts
// ---------------------------------------------------------

import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';

// ---------------------------------------------------------

export const UseDebounceStore = defineStore('debounceStore', () => {
  const timeoutId = ref<number | undefined>(undefined);
  const scrollHandler = ref<(() => void) | null>(null);
  
  const debounce = <TCallback extends (...args: unknown[]) => void>(callback: TCallback, wait: number) => {
    return (...args: Parameters<TCallback>): void => {
      if (timeoutId.value !== undefined) {
        clearTimeout(timeoutId.value);
      }
      
      timeoutId.value = window.setTimeout(() => {
        callback(...args);
        timeoutId.value = undefined;
      }, wait);
    };
  };
  
  const setScrollHandler = (callback: () => void, wait: number) => {
    scrollHandler.value = debounce(callback, wait);
  };
  
  onMounted(() => {
    if (scrollHandler.value) {
      window.addEventListener('scroll', scrollHandler.value);
    }
  });
  
  onUnmounted(() => {
    if (scrollHandler.value) {
      window.removeEventListener('scroll', scrollHandler.value);
    }
  });
  
  return { setScrollHandler };
});
// ---------------------------------------------------------
