<script setup lang="ts">
  useHead({ title: 'DEEPESG | Computadores' });
</script>

<template>
  <main class="w-full h-screen">
    <Navbar />

    <Header title="Computador" title-plural="Computadores" />

    <ComputerTable />
  </main>
</template>
