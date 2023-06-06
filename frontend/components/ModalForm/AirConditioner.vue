<script setup lang="ts">
  import { AirConditioner } from '~~/types/AirConditioner';

  const props = defineProps<{ close: () => void, data?: AirConditioner }>();

  const fields = reactive({
    name: props.data?.name ||'',
    description: props.data?.description || '',
    quantity: props.data?.quantity || '0',
    btu: props.data?.btu || '',
    branchId: props.data?.branchId || ''
  });
  const v$ = useAirConditionerFormValidation(fields);

  const branchStore = useBranchStore();
  const acStore = useAirConditionerStore();

  const handleSubmit = () => {
    v$.value.$validate();

    if (v$.value.$error) return;

    if (!props.data) {
      acStore.addAirConditioner(fields);
    } else {
      acStore.updateAirConditioner(props.data.id, fields);
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
        {{ props.data ? 'Editar' : 'Cadastrar' }} ar condicionado
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
        type="number"
        class="mt-2"
        :error="{'border-red-500 focus:border-red-500': v$.quantity.$error, message: v$.quantity.$errors[0]?.$message }"
      />
      <Input
        id="brand-selector"
        v-model="fields.btu"
        label="BTU"
        class="mt-2"
        type="number"
        :error="{'border-red-500 focus:border-red-500': v$.btu.$error, message: v$.btu.$errors[0]?.$message }"
      />

      <button type="button" class="btn-create-form capitalize" :disabled="v$.$error" @click="handleSubmit">
        {{ props.data ? 'Editar' : 'Cadastrar' }}
      </button>
    </form>
  </NuxtLayout>
</template>
