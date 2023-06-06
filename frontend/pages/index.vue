<script setup lang="ts">
  useHead({ title: 'DEEPESG | Afiliados' });
  const create = ref(false);

  const handleCreate = () => {
    create.value = !create.value;
  };
</script>

<template>
  <main class="w-full h-screen">
    <Navbar />
    <Header title="Afiliado" title-plural="Afiliados" :open="handleCreate" />
    <ModalFormBranch v-if="create" :close="handleCreate" />
    <BranchTable />
  </main>
</template>
