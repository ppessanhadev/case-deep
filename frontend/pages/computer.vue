<script setup lang="ts">
  useHead({ title: 'DEEPESG | Computadores' });
  definePageMeta({ middleware: ['computers'] });

  const create = ref(false);

  const handleCreate = () => {
    create.value = !create.value;
  };
</script>

<template>
  <main class="w-full h-screen">
    <Navbar />

    <Header title="Computador" title-plural="Computadores" :open="handleCreate" />

    <ModalFormComputer v-if="create" :close="handleCreate" />

    <ComputerTable />
  </main>
</template>
