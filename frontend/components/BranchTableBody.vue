<script setup lang="ts">
  import { Branch } from '~~/types/Branch';

  defineProps<{ data: Branch }>();
  const state = ref({ options: false, update: false });
  const store = useBranchStore();

  const handleOptions = () => {
    state.value.options = !state.value.options;
  };

  const closeOptions = () => {
    if (state.value) {
      state.value.options = false;
    }
  };

  const handleUpdate = () => {
    state.value.update = !state.value.update;
    closeOptions();
  };
</script>

<template>
  <tbody class="[&>tr>td]:p-2 [&>tr>td]:border [&>tr>td]:border-slate-300">
    <tr>
      <td>{{ data.id || '-' }}</td>
      <td>{{ data.name || '-' }}</td>
      <td>{{ data.description || '-' }}</td>

      <td v-click-outside="closeOptions" class="relative text-center">
        <button @click="handleOptions">
          <SVGVerticalThreeDots class="w-6 h-6 fill-slate-400" />
        </button>

        <ContextMenu v-if="state.options" :close="handleOptions" :delete="() => store.deleteBranch(data.id)" :update="handleUpdate" />
      </td>
    </tr>
  </tbody>

  <ModalFormBranch v-if="state.update" :close="handleUpdate" :data="data" />
</template>
