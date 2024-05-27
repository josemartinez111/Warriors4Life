// ---------------------------------------------------------
//                  composables/UseNavBar.ts
// ---------------------------------------------------------
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { UseColorStore } from '../stores';
// ---------------------------------------------------------

type TypedLinks = '/' | '/about' | '/our-journey' | '/register';

interface NavLink {
  name: string;
  to: TypedLinks;
  specialStyle?: string;
}
// ---------------------------------------------------------

export const UseNavBar = () => {
  const { bgPinkFriday } = UseColorStore();
  
  const navLinks: Array<NavLink> = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Our Journey', to: '/our-journey' },
    { name: 'Register Now/Login', to: '/register', specialStyle: `flex items-center justify-center nav-login ${ bgPinkFriday }` },
  ];
  
  // Access the current route reactively
  const route = useRoute();
  
  const mobileMenuOpen = ref(false);
  const isMobile = ref(window.innerWidth <= 768);
  
  const toggleMenu: () => void = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
  };
  
  // Update isMobile based on viewport changes
  const updateIsMobile = () => {
    isMobile.value = window.innerWidth <= 768;
  };
  
  onMounted(() => {
    window.addEventListener('resize', updateIsMobile);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateIsMobile);
  });
  
  // Compute the active tab based on the current route path
  const activeTab = computed(() => (
    navLinks.find((item: NavLink) => item.to === route.path)?.name ?? 'Home'
  ));
  
  return {
    navLinks,
    activeTab,
    mobileMenuOpen,
    isMobile,
    toggleMenu,
  };
};
// ---------------------------------------------------------