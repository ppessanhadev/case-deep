<script setup lang="ts">
  const props = defineProps<{ delete: () => void }>();
</script>

<template>
  <section class="absolute right-7 top-8 w-auto h-auto py-2 px-2 pr-12 border bg-gray-100 border-slate-400 text-left z-10">
    <button class="flex items-center font-medium text-slate-800 text-lg hover:text-slate-500">
      <SVGPencil class="fill-yellow-500 mr-1" />
      Editar
    </button>

    <button class="flex items-center font-medium text-slate-800 text-lg hover:text-slate-500" @click="props.delete">
      <SVGTrash class="fill-red-300 mr-1" />
      Deletar
    </button>
  </section>
</template>
