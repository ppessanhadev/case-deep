<script setup lang="ts">
  useHead({ title: 'DEEPESG | Ares condicionados' });
  definePageMeta({ middleware: ['air-conditioners'] });

  const create = ref(false);

  const handleCreate = () => {
    create.value = !create.value;
  };
</script>

<template>
  <main class="w-full h-screen">
    <Navbar />
    <Header title="Ar condicionado" title-plural="Ares Condicionados" :open="handleCreate" />
    <ModalFormAirConditioner v-if="create" :close="handleCreate" />
    <AirConditionerTable />
  </main>
</template>
