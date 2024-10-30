<template>
  <form @submit.prevent="submit">
    <CModal title="You are awesome">
      <template #body>
        <div>
          <label for="description" class="flex items-center">Compliment <unicon name="smile" fill="black" class="ml-1"/></label>
          <CInput v-model="formData.description" name="description" type="text" placeholder="Give me the compliment" :validation="v$.description" />
        </div>

        <div class="mt-4">
          <label for="rating">Rating</label>
          <input v-model="formData.rating" type="range" min="1" max="5" step="1" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer">
        </div>
      </template>

      <template #footer>
        <CButton>Send those smiles</CButton>
      </template>
    </CModal>
  </form>
</template>

<script setup lang="ts">
  import { computed, reactive } from "vue";
  import { useVuelidate } from "@vuelidate/core";
  import { required } from "@vuelidate/validators";
  import CModal from "@/components/CModal.vue";
  import CInput from "@/components/CInput.vue";
  import CButton from "@/components/CButton.vue";
  import { useModal } from "@/stores/modal";
  import { useCompany } from "@/stores/company";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const modalStore = useModal();
  const companyStore = useCompany();

  const formData = reactive({
    description: null,
    rating: 1,
  });

  const rules = computed(() => {
    return {
      description: {
        required
      },
    };
  });

  const v$ = useVuelidate(rules, formData);

  async function submit() {
    const result = await v$.value.$validate();
    if (result) {
      companyStore.addCompliment(route.params.id, formData);
      modalStore.close();
    }
  }
</script>
