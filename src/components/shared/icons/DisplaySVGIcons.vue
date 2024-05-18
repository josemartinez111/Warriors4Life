<!-- ********************************************************
           components/shared/icons/DisplaySVGIcons.vue
********************************************************* -->
<!-- --------------------------------------------------------
                        SCRIPT-SETUP
--------------------------------------------------------- -->
<script setup lang="ts">
// ################################################################
import { storeToRefs } from 'pinia';
import { computed, toRefs } from 'vue';
import { UseDarkmodeStore } from '../../../stores/UseDarkmodeStore.ts';
// ################################################################

// Define a type with specific allowed strings for the iconName prop.
type IconName =
  'twitter' |
  'youtube' |
  'facebook' |
  'linkedin' |
  'instagram' |
  'toggledarkmode' |
  string;

interface SVGDimensions {
  height?: string;
  width?: string;
  customClass?: string;
  iconColor?: string;
  isDarkMode?: boolean;
}

interface SVGProps extends SVGDimensions {
  iconName: IconName;
}
// ____________________________________________________________________
const props = withDefaults(defineProps<SVGProps>(), {
  height: '24',
  width: '24',
});

const {
  iconName,
  height,
  width,
  customClass
} = toRefs(props);

/*
 * In Vue 3 with Pinia, when you access state directly from the darkmodeStore
 * (e.g., darkmodeStore.state), you don't need to use .value because Pinia
 * automatically unwraps the reactivity of the state properties outside
 * the darkmodeStore. However, when you directly destructure these properties
 * at import, like const { isDarkMode } = UseDarkmodeStore();, you're no
 * longer working with a ref, but with a direct reactive value that Pinia
 * manages internally. So you have to use `storeToRefs` to convert it back
 * */
const store = UseDarkmodeStore();
const { isDarkMode } = storeToRefs(store);

const passedWithName = computed(() => {
  console.table(iconName.value.toLowerCase()); // Check the output in the console
  return iconName.value.toLowerCase();
});

// Waits for the toggle to change then switches the color of the icon
// This is not theme related but just a visual cue that toggles the icon color
const switchIconColor = computed(() => {
  return isDarkMode.value ? '#52A9FF' : '#F75C02';
});
</script>
<!-- --------------------------------------------------------
                     <>MARKUP</>
--------------------------------------------------------- -->
<template>
  <div class="cursor-pointer">
    <!-- #################### LINK-ICONS #################### -->
    <!-- twitter icon -->
    <div v-show="passedWithName === 'twitter'">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" class="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775
                1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127
                1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515
                2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29
                2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054
                2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626
                1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04
                2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721
                13.995-14.646.962-.695 1.797-1.562 2.457-2.549z">
          </path>
        </svg>
      </a>
    </div>
    <!-- youtube icon -->
    <div v-show="passedWithName === 'youtube'">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" class="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23
            0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484
            8.549 4.385 8.816 3.6.245 11.626.246 15.23
            0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615
            12.816v-8l8 3.993-8 4.007z">
          </path>
        </svg>
      </a>
    </div>
    <!-- facebook icon -->
    <div v-show="passedWithName === 'facebook'">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" class="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333
            1.115-1.333h2.885v-5h-3.808c-3.596
            0-5.192 1.583-5.192 4.615v3.385z">
          </path>
        </svg>
      </a>
    </div>
    <!-- linkedin icon -->
    <div v-show="passedWithName === 'linkedin'">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
             viewBox="0 0 24 24" class="fill-current">
        <path
          d="M12 0c-6.627 0-12 5.373-12 12s5.373
          12 12 12 12-5.373 12-12-5.373-12-12-12zm-2
          16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109
          0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0
          .613-.493 1.109-1.1 1.109zm8
          6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002
          0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736
          4 1.548v3.359z" />
      </svg>
      </a>
    </div>
    <!-- instagram icon -->
    <div v-show="passedWithName === 'instagram'">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg"
             width="24" height="24"
             viewBox="0 0 24 24" class="fill-current">
          <path
          d="M14.829
          6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87
          2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87
          2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988
          2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829
          9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609
          3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84
          0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0
          1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333
          1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958
          14.886c-.115 2.545-1.532 3.955-4.071
          4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886
          0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008
          2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
        </svg>
      </a>
    </div>
    
    <!-- #################### LINK-ICONS #################### -->
    
    <!-- ###################### ICONS ####################### -->
    <!-- facebook icon -->
    <div v-show="passedWithName === 'toggledarkmode'">
      <div>
        <label class="pl-10 pt-3 pr-6 cursor-pointer grid place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            :class="`toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2 ${customClass}`"
            :height="`${height}px`"
            :width="`${width}px`"
            :style="{ backgroundColor: switchIconColor }"
            :checked="isDarkMode"
            @change="store.toggleDarkMode()"
          />
            <!-- SUN-SVG -->
          <svg
            class="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            :height="`${height}px`"
            :width="`${width}px`"
            :fill="switchIconColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <circle cx="12" cy="12" r="5" />
            <path
              d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4
            18.4l1.4 1.4M1 12h2M21 12h2M4.2
            19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
            <!-- MOON-SVG -->
          <svg
            class="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            :height="`${height}px`"
            :width="`${width}px`"
            :fill="switchIconColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </label>
      </div>
    </div>
    
  </div>
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