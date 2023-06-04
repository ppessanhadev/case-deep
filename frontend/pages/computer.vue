<script setup lang="ts">
  useHead({ title: 'DEEPESG | Computadores' });
</script>

<template>
  <main class="w-full h-screen">
    <Navbar />
    <h1 class="block text-3xl text-slate-700 font-bold w-[80%] mx-auto pt-24 pb-2">
      Computadores
    </h1>

    <ComputerTable />
  </main>
</template>
