<template>
  <CPage>
    <div v-if="company.employees.length > 0" class="not-last:*:mb-2">
      <CCard v-for="employee in company.employees" :key="employee.id" :link="{ name: 'employee-detail', params: { id: employee.id } }">
        <div class="flex items-center">
          <img class="w-24 h-24 rounded-full shadow-lg" src="@/assets/avatar1.png" alt="Bonnie image"/>
          <div class="ml-2">
            <h5 class="mb-2 text-2xl font-bold">{{ employee.name }}</h5>
            <p class="line-clamp-3">{{employee.description}}</p>
          </div>
        </div>
      </CCard>
    </div>

    <div v-else>
      There are no employees
    </div>
  </CPage>
</template>

<script setup lang="ts">
  import CPage from "@/components/CPage.vue";
  import { useCompany } from "@/stores/company";
  import CCard from "@/components/CCard.vue";
  import em = CSS.em;

  const company = useCompany().getCurrent;
</script>
