<script setup lang="ts">
  const store = useAirConditionerStore();
</script>

<template>
  <h2 v-if="!store.hasAirConditioners && !store.loading" class="w-full text-center text-3xl font-bold text-slate-800 mt-4">
    Sem Ares Condicionados cadastrados
  </h2>

  <Loading v-else-if="store.loading" />

  <table v-else class="w-[80%] mx-auto">
    <thead class="[&>tr>th]:p-2 [&>tr>th]:text-left [&>tr>th]:border [&>tr>th]:border-slate-300">
      <tr class="border border-slate-300 bg-gray-200">
        <th>ID</th>
        <th>Ar condicionado</th>
        <th>Descrição</th>
        <th>Quantidade</th>
        <th>BTU</th>
        <th width="1">
          Ações
        </th>
      </tr>
    </thead>

    <AirConditionerTableBody v-for="ac in store.ac" :key="ac.id" :data="ac" />
  </table>
</template>
