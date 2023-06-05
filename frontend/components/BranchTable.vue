<script setup lang="ts">
  const store = useBranchStore();
</script>

<template>
  <h2 v-if="!store.hasBranches && !store.loading" class="w-full text-center text-3xl font-bold text-slate-800 mt-4">
    Sem afiliados cadastrados
  </h2>

  <Loading v-else-if="store.loading" />

  <table v-else class="w-[80%] mx-auto">
    <thead class="[&>tr>th]:p-2 [&>tr>th]:text-left [&>tr>th]:border [&>tr>th]:border-slate-300">
      <tr class="border border-slate-300 bg-gray-200">
        <th>ID</th>
        <th>Afiliado</th>
        <th>
          Descrição
        </th>
        <th width="1">
          Ações
        </th>
      </tr>
    </thead>

    <BranchTableBody v-for="branch in store.branches" :key="branch.id" :data="branch" />
  </table>
</template>
