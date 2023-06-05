<script setup lang="ts">
  const fields = ref({ name: '', description: '', quantity: '0', branchId: '', brand: '' });

  const selectors = computed(() => ({
    branches: [{ id: '551', name: 'Afiliadox' }, { id: '254', name: 'Afiliadão' }],
    brands: [{ id: 'Unknown', name: 'Genérico' }, { id: 'Acer', name: 'Acer' }, { id: 'Gigabyte', name: 'Gigabyte' }]
  }));
</script>

<template>
  <NuxtLayout name="background-modal">
    <form class="relative w-[600px] p-6 bg-white rounded shadow-xl">
      <button type="button" class="absolute text-zinc-600 right-2 top-2">
        <SVGClose class="fill-slate-400 w-6 h-6" />
      </button>

      <h1 class="text-3xl text-slate-600 font-bold mb-4 capitalize">
        Cadastrar novo computador
      </h1>

      <Selector id="branch-selector" v-model="fields.branchId" label="Afiliado" :options="selectors.branches" />
      <Input id="computer-name" v-model="fields.name" label="Nome" type="text" class="mt-2" />
      <Input id="computer-description" v-model="fields.description" label="Descrição" type="textarea" class="mt-2" />
      <Input id="computer-quantity" v-model="fields.quantity" label="Quantidade" type="number" class="mt-2" />
      <Selector id="brand-selector" v-model="fields.brand" label="Marca" :options="selectors.brands" class="mt-2" />

      <button type="button" class="btn-create-form capitalize">
        Criar Computador
      </button>
    </form>
  </NuxtLayout>
</template>
