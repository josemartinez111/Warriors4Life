// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
//             Composables > UseStackedImages
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞
import { UseCarouselImages } from './index.ts';
import { ref } from 'vue';
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞

const UseStackedImages = () => {
  // Use the composable to get images
  const { images } = UseCarouselImages();
  
  // Fisher-Yates shuffle algorithm
  const shuffleImages = <TIMage>(imageList: TIMage[]): Array<TIMage> => {
    const newList = [...imageList];
    for (let i = newList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }
    return newList;
  };
  
  // This will hold the current images in the stack
  const currentImages = ref(shuffleImages(images));
  
  // Function to handle moving the top image to the back
  const moveTopImageToBack = () => {
    if (currentImages.value.length <= 0) return;
    
    const [topImage, ...rest] = currentImages.value;
    currentImages.value = [...rest, topImage];
  };
  
  return {
    moveTopImageToBack,
    currentImages
  }
}

export default UseStackedImages;
// ∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞