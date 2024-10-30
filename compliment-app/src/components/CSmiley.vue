<template>
  <unicon :name="name" fill="purple" />
</template>

<script setup lang="ts">
  import { computed } from "vue";
  import { RouteLocationRaw } from "vue-router";

  const props = defineProps<{
    rating: number;
  }>();

  const name = computed(() => {
    switch (props.rating) {
      case 1:
        return 'smile-wink';
      case 2:
        return 'smile';
      case 3:
        return 'smile-bean';
      case 4:
        return 'laughing';
      case 5:
        return 'grin';
    }
  })
</script>
