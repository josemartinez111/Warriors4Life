<!-- ********************************************************
        components/modals/ShowCalendarModal.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { onMounted, ref, toRefs, watch } from 'vue';
import { W4LButton, W4LCalender } from '../index.ts';
// ################################################################

const props = defineProps<{
  isOpen?: boolean;
  toggleModal?: () => void;
}>();

const { isOpen } = toRefs(props);

const modal = ref<HTMLDialogElement | undefined>(undefined);

function closeModal() {
  modal.value?.close();
}

const isOpenCallback = (newVal: boolean) => {
  newVal ? modal.value?.showModal() : modal.value?.close();
};

// Function to close the modal if the click is outside the content area
const onClickOutside = (event: MouseEvent) => {
  if (event.target === modal.value) {
    modal.value?.close();
  }
};

watch(() => isOpen.value, isOpenCallback, { immediate: true });

onMounted(() => {
  window.addEventListener('click', onClickOutside);
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->

<template>
  <dialog ref="modal" class="modal">
    <div
      class="modal-box w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:max-w-4xl shadow-transparent pb-11 mx-auto max-h-[90vh] overflow-y-auto"
      @click.stop
    >
      <!-- Close button -->
      <div class="modal-backdrop flex justify-center sm:justify-end">
        <W4LButton custom-class="text-white btn-md rounded-2xl uppercase mt-4 sm:mt-0" @click="closeModal">
          Close Calendar
        </W4LButton>
      </div>

      <h3 class="font-bold text-2xl sm:text-3xl md:text-4xl pb-11 pt-5 text-center">Scheduled Events</h3>
      <div class="overflow-x-auto">
        <W4LCalender />
      </div>
    </div>
  </dialog>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped>
/* ################################################################### */
/* ---------------------------- IMPORTS ------------------------------ */

/* ################################################################### */
</style>
<!-- ---------------------------------------------------- -->
