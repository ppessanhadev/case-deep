import { useVuelidate } from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { BranchFormFields } from '~~/types/BranchFormFields';

export const useBranchFormValidation = (form: BranchFormFields) => {
  const validators = computed(() => ({
    name: {
      required: helpers.withMessage('Campo obrigatório.', required)
    },
    description: {
      required: helpers.withMessage('Campo obrigatório.', required)
    },
  }));

  const v$ = useVuelidate(validators, form);

  return v$;
};
