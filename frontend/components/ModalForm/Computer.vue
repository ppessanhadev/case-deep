<script setup lang="ts">
  import { Computer } from '~~/types/Computer';

  const props = defineProps<{ close: () => void, data?: Computer }>();

  const fields = reactive({
    name: props.data?.name || '',
    description: props.data?.description || '',
    quantity: props.data?.quantity || '0',
    branchId: props.data?.branchId || '',
    brand: props.data?.brand || ''
  });
  const v$ = useComputerFormValidation(fields);

  const branchStore = useBranchStore();
  const computerStore = useComputerStore();

  const brands = computed(() => ([
    { id: 'Unknown', name: 'Genérico' },
    { id: 'Acer', name: 'Acer' },
    { id: 'Alienware', name: 'Alienware' },
    { id: 'Asus', name: 'Asus' },
    { id: 'Dell', name: 'Dell' },
    { id: 'Gigabyte', name: 'Gigabyte' },
    { id: 'Samsung', name: 'Samsung' },
  ]));

  const handleSubmit = () => {
    v$.value.$validate();

    if (v$.value.$error) return;

    if (!props.data) {
      computerStore.addComputer(fields);
    } else {
      computerStore.updateComputer(props.data.id, fields);
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
        {{ props.data ? 'Editar' : 'Cadastrar' }} computador
      </h1>

      <Selector
        id="branch-selector"
        v-model="fields.branchId" label="Afiliado"
        :options="branchStore.branches"
        :error="{'border-red-500 focus:border-red-500': v$.branchId.$error, message: v$.branchId.$errors[0]?.$message }"
        :selection="props.data?.branchId"
        :disable="Boolean(props.data)"
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
        :options="brands"
        :error="{'border-red-500 focus:border-red-500': v$.brand.$error, message: v$.brand.$errors[0]?.$message }"
        :selection="props.data?.brand"
      />

      <button type="button" class="btn-create-form capitalize" :disabled="v$.$error" @click="handleSubmit">
        {{ props.data ? 'Editar' : 'Cadastrar' }}
      </button>
    </form>
  </NuxtLayout>
</template>
