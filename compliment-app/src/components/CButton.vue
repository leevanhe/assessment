<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script setup lang="ts">
  import { computed } from "vue";

  type Type = 'neutral' | 'danger';

  const props = withDefaults(defineProps<{
    theme?: Type,
  }>(), {
    theme: 'neutral',
  });

  const classes = computed(() => {
    if (props.theme === 'neutral') {
      return 'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5';
    } else if (props.theme === 'danger') {
      return 'text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5';
    }
  })
</script>
