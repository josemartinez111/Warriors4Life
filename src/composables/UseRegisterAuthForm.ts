// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//           composable > UseRegisterAuthForm.ts
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

import { ref } from 'vue';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

interface FormField {
  id: string;
  type: string;
  label: string;
  placeholder: string;
  isFullSpan?: boolean;
}
// ____________________________________________________________________

export const UseRegisterAuthForm = () => {
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
  
    return { formFields, signInButtons };
}
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞