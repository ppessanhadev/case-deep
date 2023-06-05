<script setup lang="ts">
  import { useComputerFormValidation } from '~~/composables/validators/useComputerFormValidation';
  const props = defineProps<{ close: () => void }>();

  const fields = reactive({ name: '', description: '', quantity: '0', branchId: '', brand: '' });
  const v$ = useComputerFormValidation(fields);

  const selectors = computed(() => ({
    branches: [{ id: '551', name: 'Afiliadox' }, { id: '254', name: 'Afiliadão' }],
    brands: [{ id: 'Unknown', name: 'Genérico' }, { id: 'Acer', name: 'Acer' }, { id: 'Gigabyte', name: 'Gigabyte' }]
  }));

  const handleSubmit = () => {
    v$.value.$validate();

    if (!v$.value.$error) {
      console.log('subindo...');
      props.close();
    }
  };
</script>

<template>
  <NuxtLayout name="background-modal">
    <form v-click-outside="close" class="relative w-[600px] p-6 bg-white rounded shadow-xl">
      <button type="button" class="absolute text-zinc-600 right-2 top-2" @click="close">
        <SVGClose class="fill-slate-400 w-6 h-6" />
      </button>

      <h1 class="text-3xl text-slate-600 font-bold mb-4 capitalize">
        Cadastrar computador
      </h1>

      <Selector
        id="branch-selector"
        v-model="fields.branchId" label="Afiliado"
        :options="selectors.branches"
        :error="{'border-red-500 focus:border-red-500': v$.branchId.$error, message: v$.branchId.$errors[0]?.$message }"
      />
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
      <Input
        id="computer-quantity"
        v-model="fields.quantity"
        label="Quantidade"
        type="number" class="mt-2"
        :error="{'border-red-500 focus:border-red-500': v$.quantity.$error, message: v$.quantity.$errors[0]?.$message }"
      />
      <Selector
        id="brand-selector"
        v-model="fields.brand"
        label="Marca"
        class="mt-2"
        :options="selectors.brands"
        :error="{'border-red-500 focus:border-red-500': v$.brand.$error, message: v$.brand.$errors[0]?.$message }"
      />

      <button type="button" class="btn-create-form capitalize" :disabled="v$.$error" @click="handleSubmit">
        Cadastrar
      </button>
    </form>
  </NuxtLayout>
</template>