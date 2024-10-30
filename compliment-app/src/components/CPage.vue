<template>
  <div class="h-screen bg-slate-50 overflow-scroll">
    <CNavbar/>

    <div class="p-4">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
  import CNavbar from "@/components/CNavbar.vue";
</script>
