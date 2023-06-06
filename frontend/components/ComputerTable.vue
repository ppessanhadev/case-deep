<script setup lang="ts">
  const store = useComputerStore();
</script>

<template>
  <h2 v-if="!store.hasComputers && !store.loading" class="w-full text-center text-3xl font-bold text-slate-800 mt-4">
    Sem computadores cadastrados
  </h2>

  <Loading v-else-if="store.loading" />

  <table v-else class="w-[80%] mx-auto">
    <thead class="[&>tr>th]:p-2 [&>tr>th]:text-left [&>tr>th]:border [&>tr>th]:border-slate-300">
      <tr class="border border-slate-300 bg-gray-200">
        <th>ID</th>
        <th>Computador</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>Marca</th>
        <th width="1">
          Ações
        </th>
      </tr>
    </thead>

    <ComputerTableBody v-for="computer in store.computers" :key="computer.id" :data="computer" />
  </table>
</template>
