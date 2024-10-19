// ---------------------------------------------------------
//              composable/UseCarouselImages.ts
// ---------------------------------------------------------
import { reactive } from 'vue';
// ---------------------------------------------------------

// Defines a type for the image objects to ensure type safety.
// Each image object will include an 'id', 'src' for the URL, and 'alt' for the alternative text.
export type Image = {
  id: number;
  src: string;
  alt: string;
};

// Defines a type for the module structure returned by the dynamic import.
// Each module contains a 'default' property that represents the image URL.
type ImageModule = {
  default: string;
};
// ---------------------------------------------------------

// Helper function to extract and clean the filename from a path, removing the extension.
// This function enhances accessibility by providing meaningful 'alt' text derived from the filename.
const extractFileName = (path: string): string => {
  // Isolate the filename from the path, ensuring non-null value.
  const name = path.split('/').pop() || '';
  // Strip the extension from the filename.
  return name.replace(/\.\w+$/, '');
};
// ---------------------------------------------------------

// Exported function UseCarouselImages for dynamically importing images and making them reactive.
function UseCarouselImages() {
  const imageModules = import.meta.glob('../assets/images/gallery-carousel/*.{jpg,png}', { eager: true }) as Record<string, ImageModule>;
  let nextId = 1;
  
  // Initialize the image's array as a reactive object
  const images = reactive<Image[]>(
    Object.entries(imageModules).map(([path, module]): Image => ({
    id: nextId++,                       // Assign a unique ID.
    src: module.default,                // Set the image source URL.
    alt: extractFileName(path)    // Generate 'alt' text from the filename.
  })));
  
  // Log the image array to debug the issue
  console.log('Loaded images:', images);
  return { images };
}

export default UseCarouselImages;
// ---------------------------------------------------------
