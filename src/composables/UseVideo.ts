// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//                 Composables > UseVideo
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { Ref, ref } from 'vue';
import { usePlayer } from '@vue-youtube/core';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

type PlayerEvent = {
  target: {
    playVideo: () => void;
    pauseVideo: () => void;
    stopVideo: () => void;
  };
}

type PlayerStateChangeEvent = {
  data: number;
  target: unknown;
}
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

function UseVideo(videoID: Ref<string>) {
  const playerElement = ref<HTMLElement | null>(null);
  const playerState = ref<number>(-1);
  const playerInstance = ref<PlayerEvent['target'] | null>(null);
  
  const { onReady, onStateChange } = usePlayer(
    videoID,
    playerElement,
    {
      playerVars: {
        enablejsapi: 1,
        mute: 1,
      },
    }
  );
  
  onReady((event: PlayerEvent) => {
    console.log('YouTube player is ready');
    playerInstance.value = event.target;
  });
  
  onStateChange((event: PlayerStateChangeEvent) => {
    playerState.value = event.data;
    console.log('Player state changed to:', playerState.value);
  });
  
  return {
    playerElement,
    playerState,
    startVideo: () => playerInstance.value?.playVideo(),
    pauseVideo: () => playerInstance.value?.pauseVideo(),
    stopVideo: () => playerInstance.value?.stopVideo(),
  };
}

export default UseVideo;
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞