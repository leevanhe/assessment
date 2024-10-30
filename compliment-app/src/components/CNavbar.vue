<template>
  <div class="bg-gradient-to-r from-purple-400 to-purple-500 pt-6 pb-1 sticky top-0">
    <div class="flex w-full items-center justify-center">
      <unicon name="thumbs-up" fill="purple"/>
      <span class="text-white font-bold ml-1">{{ company.name }}</span>
    </div>
    <nav class="flex justify-center">
      <RouterLink :to="{ name: 'company' }" class="text-white">
        Overview
      </RouterLink>
      <RouterLink :to="{ name: '' }" class="text-white ml-2">
        Profile
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { useCompany } from "@/stores/company";

  const company = useCompany().getCurrent;
</script>
