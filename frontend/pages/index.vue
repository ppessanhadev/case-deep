<script setup lang="ts">
  useHead({ title: 'DEEPESG | Afiliados' });
</script>

<template>
  <main class="w-full h-screen">
    <Navbar />

    <section class="flex justify-between items-center w-[80%] mx-auto pt-24 pb-2">
      <h1 class="block text-3xl text-slate-700 font-bold ">
        Afiliados
      </h1>

      <button type="button" class="btn-create">
        <p class="p-1 text-2xl">
          Criar Afiliado
        </p>
      </button>
    </section>

    <BranchTable />
  </main>
</template>
