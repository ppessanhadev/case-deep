import { useVuelidate } from '@vuelidate/core';
import { required, helpers, minValue } from '@vuelidate/validators';
import { ComputerFormFields } from '~~/types/ComputerFormFields';

export const useComputerFormValidation = (form: ComputerFormFields) => {
  const validators = computed(() => ({
    name: {
      required: helpers.withMessage('Campo obrigatório.', required)
    },
    description: {
      required: helpers.withMessage('Campo obrigatório.', required)
    },
    quantity: {
      required: helpers.withMessage('Campo obrigatório.', required),
      minValue: helpers.withMessage('Quantidade precisa ser ao menos 1.', minValue(1))
    },
    branchId: {
      required: helpers.withMessage('Um afiliado precisa ser associado.', required)
    },
    brand: {
      required: helpers.withMessage('Uma marca precisa ser associada.', required)
    }
  }));

  const v$ = useVuelidate(validators, form);

  return v$;
};
