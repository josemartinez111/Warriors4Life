// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//             Composable > UseAnimateScrolling
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
};

function UseAnimateScrolling(options: AnimationOptions = {}) {
  const sectionVisibility = ref<Record<string, boolean>>({});
  
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      const sectionId: string = entry.target.id;
      
      if (sectionId) {
        sectionVisibility.value[sectionId] = entry.isIntersecting;
      }
    });
  };
  
  let observer: IntersectionObserver | null = null;
  
  onMounted(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-animate-section]');
    if (sections.length) {
      observer = new IntersectionObserver(handleIntersection, {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px',
      });
      
      sections.forEach((section: HTMLElement) => {
        const sectionId: string = section.id;
        if (sectionId) {
          sectionVisibility.value[sectionId] = false;
          observer?.observe(section);
        }
      });
    }
  });
  
  onBeforeUnmount(() => {
    observer?.disconnect();
  });
  
  const computeAnimateSection = computed(() => (sectionId: string) => ({
    'opacity-0': !sectionVisibility.value[sectionId],
    'opacity-100 translate-y-0': sectionVisibility.value[sectionId],
    'transition-opacity duration-1000 ease-in-out': true
  }));
  
  return {
    computeAnimateSection
  };
}

export default UseAnimateScrolling;
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞