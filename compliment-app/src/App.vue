<template>
  <CModalContainer/>
  <RouterView/>
</template>

<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import CModalContainer from "@/components/CModalContainer.vue";
</script>
