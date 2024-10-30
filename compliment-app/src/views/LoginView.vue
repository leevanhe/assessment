<template>
  <div class="w-full h-screen flex justify-center items-center flex-col">
    <span class="flex items-center font-bold text-xl"><unicon name="thumbs-up" fill="purple" /> Compliments</span>
    <form @submit.prevent="submit" class="mt-10 flex justify-center flex-col">
      <CInput v-model="formData.name" name="name" type="text" placeholder="name" :validation="v$.name" />
      <CButton class="mt-4">Login</CButton>
    </form>
  </div>
</template>

<script setup lang="ts">
  import CInput from "@/components/Cinput.vue";
  import CButton from "@/components/CButton.vue";
  import { computed, reactive } from "vue";
  import { required } from "@vuelidate/validators";
  import { useRouter } from "vue-router";
  import { useVuelidate } from "@vuelidate/core";

  const router = useRouter();

  const formData = reactive({
    name: null,
  });

  const rules = computed(() => {
    return {
      name: {
        required
      }
    };
  });

  const v$ = useVuelidate(rules, formData);

  async function submit() {
    const result = await v$.value.$validate();
    if (result) {
      router.push({ name: 'company'})
    }
  }
</script>
