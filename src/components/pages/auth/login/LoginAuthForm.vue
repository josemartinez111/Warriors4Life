<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
            components/pages/auth/LoginAuthForm.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
import { ref } from 'vue';

// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { SigninWithButton } from '../../../../components';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  isFullSpan?: boolean;
}
// ____________________________________________________________________

const formFields = ref<FormField[]>([
  {
    id: 'new-password',
    type: 'password',
    label: 'New password',
    placeholder: '********',
    isFullSpan: true,
  },
  {
    id: 'current-password',
    type: 'password',
    label: 'Current password',
    placeholder: '********',
    isFullSpan: true,
  },
]);

const signInButtons = ref([
  {
    iconName: 'google-colored',
    label: 'Sign in with Google',
    svgClass: 'h-4 w-4 sm:h-5 sm:w-5 pl-8',
  },
  {
    iconName: 'linkedin-colored',
    label: 'Sign in with LinkedIn',
    svgClass: 'h-4 w-4 sm:h-3 sm:w-3',
  },
  {
    iconName: 'facebook-colored',
    label: 'Sign in with Facebook',
    svgClass: 'h-4 w-4 sm:h-5 sm:w-5',
  },
  {
    iconName: 'apple-colored',
    label: 'Sign in with Apple',
    svgClass: 'h-4 w-4 sm:h-5 sm:w-5',
  },
]);
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <form>
      <div class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <!-- Card -->
        <div
          class="p-4 sm:p-6 md:p-7 flex flex-col rounded-2xl shadow-lg dark:bg-neutral-900">
          <div class="mt-4 sm:mt-5">
            <!-- Signin With Buttons -->
            <div class="space-y-1">
              <SigninWithButton
                v-for="(button, index) in signInButtons"
                :key="index"
                :icon-name="button.iconName"
                custom-class="flex items-center justify-center"
              >
                <template #children>
                  <span class="flex items-center w-full">
                  <span class="flex-shrink-0">
                    <svg :class="button.svgClass"
                         viewBox="0 0 48 48"></svg>
                  </span>
                  <span
                    class="flex-grow text-left pl-2 text-xs sm:text-sm truncate">
                    {{ button.label }}
                  </span>
                </span>
                </template>
              </SigninWithButton>
            </div>

            <div class="or-container mt-4 sm:mt-5">Or</div>
            
            <!-- Grid -->
            <div class="grid grid-cols-2 gap-2 sm:gap-4">
              <div v-for="field in formFields" :key="field.id"
                   :class="{ 'col-span-full': field.isFullSpan }">
                <!-- Floating Input -->
                <div class="relative">
                  <input
                    :type="field.type"
                    :id="'hs-hero-signup-form-floating-input-' + field.id"
                    class="peer input-field text-xs sm:text-sm"
                    :placeholder="field.placeholder"
                  />
                  <label
                    :for="'hs-hero-signup-form-floating-input-' + field.id"
                    class="label-input text-xs sm:text-sm">
                    {{ field.label }}
                  </label>
                </div>
                <!-- End Floating Input -->
              </div>
            </div>
            <!-- End Grid -->

            <div class="mt-4 sm:mt-5">
              <button type="submit" class="register-btn">Sign In</button>
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </form>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">
/* ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ */
/* ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ IMPORTS ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ */
@import "login.styles.css";
/* ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ */

</style>
<!-- ---------------------------------------------------- -->