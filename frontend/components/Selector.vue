<script setup lang="ts">
  const props = defineProps<{
    id: string;
    label: string;
    modelValue: string;
    class?: string;
    options?: { id: string, name: string }[];
    placeholder?: string;
    error?: { message?: unknown, 'border-red-500 focus:border-red-500': boolean };
    selection?: string;
  }>();

  defineEmits(['update:modelValue']);
</script>

<template>
  <label :for="props.id" class="flex flex-col text-slate-500 font-bold" :class="props.class">
    {{ props.label }}

    <select :id="props.id" class="p-2 border font-normal" :class="error" :disabled="Boolean(selection)" @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)">
      <option selected disabled class="text-gray-400" value="">
        {{ props.placeholder || 'Escolha uma opção' }}
      </option>

      <option v-for="option in props.options" :key="option.id" :value="option.id" :selected="option.id === selection">
        {{ option.name }}
      </option>
    </select>

    <p v-if="error?.message" class="text-xs font-normal text-red-600">{{ error?.message }}</p>
  </label>
</template>
