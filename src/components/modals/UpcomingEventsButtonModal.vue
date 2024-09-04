<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
          component/modals/UpcomingEventsBtnModal.vue
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { W4LButton, W4LCalender, DarkmodeIcon } from '../../components';
import { UseColorStore } from '../../stores';
import { onMounted, ref } from 'vue';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const { bgPinkFriday } = UseColorStore();
const modal = ref<HTMLDialogElement | undefined>(undefined);

const showModal = () => {
  modal.value?.showModal();
};

const closeModal = () => {
  modal.value?.close();
};

// Function to close the modal if the click is outside the content area
const onClickOutside = (event: MouseEvent) => {
  if (event.target === modal.value) {
    modal.value?.close();
  }
};

onMounted(() => {
  window.addEventListener('click', onClickOutside);
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div>
    <!-- Button to trigger modal -->
    <div class="flex">
      <!-- NavBar button UPCOMING-EVENTS -->
      <W4LButton
        custom-class="btn-ghost btn-md uppercase text-[0.7rem] shadow-inner rounded-none"
        @click="showModal"
      >Upcoming Events
      </W4LButton>
      
      <!-- Dark mode SVG -->
      <DarkmodeIcon
        height="28"
        width="28"
        customClass="pl-10 cursor-pointer"
      />
    </div>
    
    <!-- Modal structure -->
    <dialog ref="modal" class="modal">
      <!--
      @click.stop Explanation: In the template, adding @click.stop to the
      div that contains the modal content stops the click event from
      bubbling up to the window level when the modal content is clicked.
      Without this, clicking inside the modal would also trigger the
      onClickOutside function, which would then close the modal undesirably.
      -->
      <div class="modal-box w-8/12 max-w-4xl shadow-transparent pb-11" @click.stop>
        <!-- Close button -->
        <div class="modal-backdrop">
          <!-- Modal button inside the modal to close the calendar -->
          <W4LButton
            :custom-class="['btn btn-md text-white rounded-[8px] uppercase', `hover:${bgPinkFriday}`]"
            @click="closeModal"
          >Close Calendar
          </W4LButton>
        </div>
        
        <h3 class="font-bold text-4xl pb-11 pt-5">Scheduled Events</h3>
        <!-- Slot for inserting custom content -->
        <W4LCalender />
      </div>
    </dialog>
  </div>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped>
@import "events.styles.css";
</style>
<!-- ---------------------------------------------------- -->