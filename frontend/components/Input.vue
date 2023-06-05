<script setup lang="ts">
  const props = defineProps<{
    id: string;
    label: string;
    type: 'text' | 'number' | 'textarea';
    modelValue: string;
    class?: string;
    placeholder?: string;
  }>();

  defineEmits(['update:modelValue']);
</script>

<template>
  <label :for="props.id" :class="`flex flex-col text-slate-500 font-bold ${props.class}`">
    {{ props.label }}
    <textarea
      v-if="props.type === 'textarea'"
      :id="id"
      :placeholder="props.placeholder"
      :value="modelValue"
      class="p-2 border font-normal resize-none"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <input
      v-else
      :id="id"
      type="text"
      :placeholder="props.placeholder"
      :value="modelValue"
      :onkeypress="props.type === 'number' && `return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57`"
      class="p-2 border font-normal"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </label>
</template>
