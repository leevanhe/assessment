<template>
  <CPage>
    <CCard class="flex items-center justify-center flex-col mb-2">
      <img class="w-24 h-24 rounded-full shadow-lg" src="@/assets/avatar1.png" alt="Bonnie image"/>
      <h5 class="text-xl font-bold tracking-tight text-gray-900">{{ employee.name }}</h5>
      <p class="mb-3">{{ employee.description }}</p>
      <CButton @click="addCompliment">Add compliment</CButton>
    </CCard>

    <div class="mt-8 not-last:*:mb-2">

      <template v-if="employee.compliments.length > 0">
        <h5 class="text-2xl font-bold">Compliments</h5>

        <CCard v-for="compliment in employee.compliments">
          <div class="flex justify-between items-center">
            <p>{{ compliment.description}}</p>
            <CSmiley :rating="Number(compliment.rating)"/>
          </div>
        </CCard>
      </template>

      <template v-else>
        <div class="flex items-center w-full justify-center mt-36">
          <span class="text-xl font-bold">there are no compliments</span>
          <unicon name="frown" fill="black" class="ml-1"/>
        </div>
      </template>
    </div>
  </CPage>
</template>

<script setup lang="ts">
  import CPage from "@/components/CPage.vue";
  import { useCompany } from "@/stores/company";
  import { useRoute } from "vue-router";
  import CCard from "@/components/CCard.vue";
  import { present } from "@/utils/typescript";
  import CButton from "@/components/CButton.vue";
  import { useModal } from "@/stores/modal";
  import ComplimentModal from "@/modals/ComplimentModal.vue";
  import CSmiley from "@/components/CSmiley.vue";

  const route = useRoute();

  const employee = present(useCompany().getSelectedEmployee(Number(route.params.id)));

  const modalStore = useModal();

  function addCompliment() {
    modalStore.open(ComplimentModal);
  }
</script>
