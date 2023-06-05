<script setup lang="ts">
  defineProps<{ title: string, titlePlural: string, open?: () => void }>();
</script>

<template>
  <header class="flex justify-between items-center w-[80%] mx-auto pt-24 pb-2">
    <h1 class="block text-3xl text-slate-700 font-bold capitalize">
      {{ titlePlural }}
    </h1>

    <button type="button" class="btn-create capitalize" @click="open">
      <p class="p-1 text-2xl">
        Criar {{ title }}
      </p>
    </button>
  </header>
</template>
