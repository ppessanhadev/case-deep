<script setup lang="ts">
  import { Branch } from '~~/types/Branch';

  const props = defineProps<{ close: () => void, data?: Branch }>();
  const branchStore = useBranchStore();

  const fields = reactive({ name: props.data?.name || '', description: props.data?.description || '' });
  const v$ = useBranchFormValidation(fields);

  const handleSubmit = () => {
    v$.value.$validate();

    if (v$.value.$error) return;

    if (!props.data) {
      branchStore.addBranch(fields);
    } else {
      branchStore.updateBranch(props.data.id, fields);
    }
    props.close();
  };
</script>

<template>
  <NuxtLayout name="background-modal">
    <form v-click-outside="close" class="relative w-[600px] p-6 bg-white rounded shadow-xl">
      <button type="button" class="absolute text-zinc-600 right-2 top-2" @click="close">
        <SVGClose class="fill-slate-400 w-6 h-6" />
      </button>

      <h1 class="text-3xl text-slate-600 font-bold mb-4 capitalize">
        {{ props.data ? 'Editar' : 'Cadastrar' }} afiliado
      </h1>

      <Input
        id="computer-name"
        v-model="fields.name"
        label="Nome"
        type="text"
        class="mt-2"
        :error="{'border-red-500 focus:border-red-500': v$.name.$error, message: v$.name.$errors[0]?.$message }"
      />
      <Input
        id="computer-description"
        v-model="fields.description"
        label="Descrição"
        type="textarea"
        class="mt-2"
        :error="{'border-red-500 focus:border-red-500': v$.description.$error, message: v$.description.$errors[0]?.$message }"
      />

      <button type="button" class="btn-create-form capitalize" :disabled="v$.$error" @click="handleSubmit">
        {{ props.data ? 'Editar' : 'Cadastrar' }}
      </button>
    </form>
  </NuxtLayout>
</template>
