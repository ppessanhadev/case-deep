<script setup lang="ts">
  const props = defineProps<{
    id: string;
    label: string;
    modelValue: string;
    class?: string;
    options?: { id: string, name: string }[];
    placeholder?: string;
  }>();

  defineEmits(['update:modelValue']);
</script>

<template>
  <label :for="props.id" class="flex flex-col text-slate-500 font-bold" :class="props.class">
    {{ props.label }}

    <select :id="props.id" class="p-2 border font-normal" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
      <option selected disabled class="text-gray-400" value="">
        {{ props.placeholder || 'Escolha uma opção' }}
      </option>

      <option v-for="option in props.options" :key="option.id" :value="option.id">
        {{ option.name }}
      </option>
    </select>
  </label>
</template>
