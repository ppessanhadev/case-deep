<script setup lang="ts">
  const state = ref(false);

  const handleOptions = () => {
    state.value = !state.value;
  };

  const closeOptions = () => {
    if (state.value) {
      state.value = false;
    }
  };

</script>

<template>
  <table class="w-[80%] mx-auto">
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

    <tbody class="[&>tr>td]:p-2 [&>tr>td]:border [&>tr>td]:border-slate-300">
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
        <td v-click-outside="closeOptions" class="relative text-center">
          <button @click="handleOptions">
            <SVGVerticalThreeDots class="w-6 h-6 fill-slate-400" />
          </button>

          <ContextMenu v-if="state" :close="handleOptions" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
