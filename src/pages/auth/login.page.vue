<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
              page-components/auth/login.page.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import Layout from '../../components/Layout.vue';
import { AuthenticationCard, LeftSideSectionAuthText } from '../../components';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

// const props = defineProps<{
//  msg: string;
// }>();

// const { msg } = toRefs(props);

// OR

// const { msg } = defineProps<{
//  msg: string;
// }>();
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <!-- Hero -->
  <Layout theme-mode="w4l-light">
    <div class="auth-container">
      <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-3 mx-auto">
        <!-- Grid -->
        <div class="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
          <!-- LeftSideSectionAuthText component -->
          <LeftSideSectionAuthText />
          <!-- Form Input component -->
          <AuthenticationCard />
        </div>
      </div>
    </div>
  </Layout>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">

.auth-container {
  @apply relative bg-gradient-to-bl from-blue-100
  via-transparent dark:from-blue-950 dark:via-transparent;
}
</style>
<!-- ---------------------------------------------------- -->
