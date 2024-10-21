<!-- ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
                       COMPONENT_PATH
∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞ -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { UseVideo } from '../../../../composables';
import { computed, ref } from 'vue';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const { videoURL } = defineProps<{
  videoURL: string;
}>();

const videoID = ref(extractVideoID(videoURL));

const {
  playerElement,
  playerState,
  startVideo,
  pauseVideo,
  stopVideo,
} = UseVideo(videoID);

const PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5,
} as const;

// Used above to extract the video ID from the URL
// (Has to be a named function because hoisting doesn't work with arrow functions)
function extractVideoID(url: string): string {
  const regExp = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
  const match = url.match(regExp);
  
  if (match && match[ 1 ]) return match[ 1 ];
  
  console.error('Invalid YouTube URL');
  return '';
}

const isPlaying = computed(() => playerState.value === PlayerState.PLAYING);
const isPaused = computed(() => playerState.value === PlayerState.PAUSED);
const isEnded = computed(() => playerState.value === PlayerState.ENDED);
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <section class="w-full h-auto bg-base-100 flex justify-center items-center py-4 tablet:py-6 laptop:py-8">
    <div class="card shadow-xl w-full tablet:w-11/12 max-w-4xl mx-4 tablet:mx-auto">
      <div class="card-body p-4 tablet:p-6 laptop:p-8">
        <!-- Component Header -->
        <h2 class="card-title text-lg tablet:text-xl laptop:text-2xl mb-2 tablet:mb-4">
          Our Journey Video Section
        </h2>
        
        <!-- Video container -->
        <div class="aspect-video w-full bg-base-300 flex justify-center items-center rounded-lg overflow-hidden">
          <!-- Bind the player element from the composable -->
          <div ref="playerElement" class="w-full h-full" />
        </div>
        
        <!-- Control buttons -->
        <div class="flex flex-col tablet:flex-row space-y-2 tablet:space-y-0 tablet:space-x-4 mt-4">
          <!-- Start Button -->
          <button
            class="btn bg-blue-500 text-black w-full tablet:w-auto"
            @click="startVideo"
            :disabled="isPlaying"
          >
            {{ isPlaying ? 'Playing' : 'Play Video' }}
          </button>
          
          <!-- Pause Button -->
          <button
            class="btn bg-yellow-500 text-black w-full tablet:w-auto"
            @click="pauseVideo"
            :disabled="isPaused || isEnded"
          >
            {{ isPaused ? 'Paused' : 'Pause Video' }}
          </button>
          
          <!-- Stop Button -->
          <button
            class="btn bg-rose-600 text-black w-full tablet:w-auto"
            @click="stopVideo"
            :disabled="isEnded"
          >
            {{ isEnded ? 'Stopped' : 'Stop Video' }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- --------------------------------------------------------
                            STYLES
--------------------------------------------------------- -->
<style scoped lang="postcss">


</style>
<!-- ---------------------------------------------------- -->