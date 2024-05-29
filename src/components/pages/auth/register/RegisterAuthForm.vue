<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
         components/pages/auth/RegisterAuthForm.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { ref } from 'vue';
import { SigninWithButton } from '../../../index.ts';
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
    id: 'first-name',
    type: 'text',
    label: 'First name',
    placeholder: 'John',
  },
  {
    id: 'last-name',
    type: 'text',
    label: 'Last name',
    placeholder: 'Doe',
  },
  {
    id: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'you@email.com',
  },
  {
    id: 'company-name',
    type: 'text',
    label: 'Company name',
    placeholder: 'Preline',
  },
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
    label: 'Sign Up with Google',
    svgClass: 'h-4 w-4 sm:h-5 sm:w-5 pl-8'
  },
  {
    iconName: 'linkedin-colored',
    label: 'Sign Up with LinkedIn',
    svgClass: 'h-4 w-4 sm:h-3 sm:w-3'
  },
  {
    iconName: 'facebook-colored',
    label: 'Sign Up with Facebook',
    svgClass: 'h-4 w-4 sm:h-5 sm:w-5'
  },
  {
    iconName: 'apple-colored',
    label: 'Sign Up with Apple',
    svgClass: 'h-4 w-4 sm:h-5 sm:w-5'
  }
]);
</script>
*/
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <form>
      <div class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <!-- Card -->
        <div class="p-4 sm:p-6 md:p-7 flex flex-col rounded-2xl shadow-lg dark:bg-neutral-900">
          <div class="text-center">
            <h1 class="block text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">
              Register Today!
            </h1>
            <p class="mt-2 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <a
                class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                href="#"
                @click.prevent="$emit('toggle-form')"
              >
                Sign in here
              </a>
            </p>
          </div>

          <div class="mt-4 sm:mt-5">
            <!-- Signin With Buttons -->
            <div class="space-y-1">
              <SigninWithButton
                v-for="(button, index) in signInButtons"
                :key="index"
                :icon-name="button.iconName"
                custom-class="flex items-center justify-center"
              >
                <template v-slot:children>
                  <span class="flex items-center w-full">
                  <span class="flex-shrink-0">
                    <svg :class="button.svgClass" viewBox="0 0 48 48"></svg>
                  </span>
                  <span class="flex-grow sm:pr-4 text-center items-center text-xs sm:text-sm truncate">
                    {{ button.label }}
                  </span>
                </span>
                </template>
              </SigninWithButton>
            </div>

            <div class="or-container mt-4 sm:mt-5">Or</div>
            
            <!-- Grid -->
            <div class="grid grid-cols-2 gap-2 sm:gap-4">
              <div v-for="field in formFields" :key="field.id" :class="{ 'col-span-full': field.isFullSpan }">
                <!-- Floating Input -->
                <div class="relative">
                  <input
                    :type="field.type"
                    :id="'hs-hero-signup-form-floating-input-' + field.id"
                    class="peer input-field text-xs sm:text-sm"
                    :placeholder="field.placeholder"
                  />
                  <label :for="'hs-hero-signup-form-floating-input-' + field.id" class="label-input text-xs sm:text-sm">
                    {{ field.label }}
                  </label>
                </div>
                <!-- End Floating Input -->
              </div>
            </div>
            <!-- End Grid -->
            
            <!-- Checkbox -->
            <div class="mt-4 sm:mt-5 flex items-center">
              <div class="flex">
                <input id="remember-me" name="remember-me" type="checkbox" class="accept-terms" />
              </div>
              <div class="ms-3">
                <label for="remember-me" class="text-xs sm:text-sm dark:text-white">
                  I accept the
                  <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <!-- End Checkbox -->

            <div class="mt-4 sm:mt-5">
              <button type="submit" class="register-btn"> Register Now </button>
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
<style scoped>
/* ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ */
/* ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ IMPORTS ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ */
@import "register.styles.css";
/* ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ */

</style>
<!-- ---------------------------------------------------- -->