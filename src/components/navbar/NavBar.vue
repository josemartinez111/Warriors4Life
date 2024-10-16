<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
                     components/NavBar.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->

<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import logo from '../../assets/images/warriors4Life-no-bg.png';
import { UseNavBar } from '../../composables/UseNavBar.ts';
import {
  MenuDropdownIcon,
  UpcomingEventsButtonModal,
  W4LCalender,
  W4LButton,
  DarkmodeIcon,
  Ribbon
} from '../index';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const {
  navLinks,
  activeTab,
  mobileMenuOpen,
  isMobile = false,
  toggleMenu,
} = UseNavBar();
</script>
<!-- --------------------------------------------------------
                         < >MARKUP</>
--------------------------------------------------------- -->

<template>
  <header class="header-container">
    <nav class="nav-container">
      <!-- Image Logo Link -->
      <div class="logo-link max-container">
        <RouterLink to="/" class="flex items-center text-white">
          <img
            width="100%"
            height="auto"
            :src="logo"
            alt="Logo"
            class="h-8 sm:h-12 md:h-16 w-auto mr-2 shadow-inner drop-shadow-2xl"
          />
          <span
            class="text-sm sm:text-lg md:text-[1.5rem] uppercase shadow-accent drop-shadow-2xl">
            Warriors4Life
          </span>
        </RouterLink>
        <MenuDropdownIcon :toggle-menu="toggleMenu" />
      </div>
      
      <!-- Desktop NavBar -->
      <div
        :class="{ flex: !mobileMenuOpen && !isMobile, hidden: mobileMenuOpen || isMobile }"
        class="primary-nav">
        <template v-for="link in navLinks" :key="link.name">
          <Ribbon v-if="link.wrapWithRibbon" msg="Coming Soon">
            <RouterLink
              :to="link.to"
              :class="[
                link.specialStyle || 'nav-links',
                { 'tab-active border-2': activeTab === link.name, tab: activeTab !== link.name },
              ]"
            >
              {{ link.name }}
            </RouterLink>
          </Ribbon>
          <RouterLink
            v-else
            :to="link.to"
            :class="[
              link.specialStyle || 'nav-links',
              { 'tab-active border-2': activeTab === link.name, tab: activeTab !== link.name },
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </template>
        <UpcomingEventsButtonModal>
          <W4LCalender />
        </UpcomingEventsButtonModal>
      </div>
      
      <!-- Mobile Nav Dropdown -->
      <div :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
           class="mobile-nav">
        <template v-for="link in navLinks" :key="`mobile-${link.name}`">
          <RouterLink :to="link.to" class="block text-white px-4 py-2">
            {{ link.name }}
          </RouterLink>
        </template>
        <W4LButton @click="toggleMenu">Close</W4LButton>
        <!-- Dark mode SVG -->
        <DarkmodeIcon
          height="28"
          width="28"
          customClass="cursor-pointer"
        />
      </div>
    </nav>
  </header>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped>
@import "navbar.styles.css";
</style>
<!-- ---------------------------------------------------- -->
