<!-- ********************************************************
                components/auth/FormInputCard.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { ref } from 'vue';
import { SigninWithButton } from '../../components';
// ################################################################

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  isFullSpan?: boolean;
}

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
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div>
    <!-- Form -->
    <form>
      <div class="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <!-- Card -->
        <div class="p-4 sm:p-6 md:p-7 flex flex-col rounded-2xl shadow-lg dark:bg-neutral-900">
          <div class="text-center">
            <h1 class="block text-lg sm:text-xl md:text-2xl font-bold text-gray-800 dark:text-white">Start your free trial</h1>
            <p class="mt-2 text-xs sm:text-sm text-gray-600 dark:text-neutral-400">
              Already have an account?
              <a class="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500" href="#">
                Sign in here
              </a>
            </p>
          </div>

          <div class="mt-4 sm:mt-5">
            <!-- Signin With Buttons -->
            <div class="space-y-2">
              <SigninWithButton icon-name="google-colored" custom-class="flex items-center justify-center">
                <span class="flex items-center w-full">
                  <span class="pl-1 sm:pl-2 flex-shrink-0">
                    <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 48 48">
                      <!-- Google Icon SVG content -->
                    </svg>
                  </span>
                  <span class="flex-grow text-center pr-1 sm:pr-4 text-xs sm:text-sm truncate">Sign in with Google</span>
                </span>
              </SigninWithButton>
              <SigninWithButton icon-name="linkedin-colored" custom-class="flex items-center justify-center">
                <span class="flex items-center w-full">
                  <span class="pl-1 sm:pl-2 flex-shrink-0">
                    <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 48 48">
                      <!-- LinkedIn Icon SVG content -->
                    </svg>
                  </span>
                  <span class="flex-grow text-center pr-1 sm:pr-4 text-xs sm:text-sm truncate">Sign in with LinkedIn</span>
                </span>
              </SigninWithButton>
              <SigninWithButton icon-name="facebook-colored" custom-class="flex items-center justify-center">
                <span class="flex items-center w-full">
                  <span class="pl-1 sm:pl-2 flex-shrink-0">
                    <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 48 48">
                      <!-- Facebook Icon SVG content -->
                    </svg>
                  </span>
                  <span class="flex-grow text-center pr-1 sm:pr-4 text-xs sm:text-sm truncate">Sign in with Facebook</span>
                </span>
              </SigninWithButton>
              <SigninWithButton icon-name="apple-colored" custom-class="flex items-center justify-center">
                <span class="flex items-center w-full">
                  <span class="pl-1 sm:pl-2 flex-shrink-0">
                    <svg class="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 48 48">
                      <!-- Apple Icon SVG content -->
                    </svg>
                  </span>
                  <span class="flex-grow text-center pr-1 sm:pr-4 text-xs sm:text-sm truncate">Sign in with Apple</span>
                </span>
              </SigninWithButton>
            </div>

            <div class="or-container mt-4 sm:mt-5"> Or </div>
            
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
    <!-- End Form -->
  </div>
</template>


<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">
/* ################################################################### */
/* ---------------------------- IMPORTS ------------------------------ */
@import './auth.styles.css';
/* ################################################################### */
</style>
<!-- ---------------------------------------------------- -->
