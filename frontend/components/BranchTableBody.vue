<script setup lang="ts">
  import { Branch } from '~~/types/Branch';

  defineProps<{ data: Branch }>();
  const state = ref(false);
  const store = useBranchStore();

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
  <tbody class="[&>tr>td]:p-2 [&>tr>td]:border [&>tr>td]:border-slate-300">
    <tr>
      <td>{{ data.id || '-' }}</td>
      <td>{{ data.name || '-' }}</td>
      <td>{{ data.description || '-' }}</td>

      <td v-click-outside="closeOptions" class="relative text-center">
        <button @click="handleOptions">
          <SVGVerticalThreeDots class="w-6 h-6 fill-slate-400" />
        </button>

        <ContextMenu v-if="state" :close="handleOptions" :delete="() => store.deleteBranch(data.id)" />
      </td>
    </tr>
  </tbody>
</template>
