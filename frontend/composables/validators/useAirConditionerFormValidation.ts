import { useVuelidate } from '@vuelidate/core';
import { required, helpers, minValue } from '@vuelidate/validators';
import { AirConditionerFormFields } from '~~/types/AirConditionerFormFields';

export const useAirConditionerFormValidation = (form: AirConditionerFormFields) => {
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
    btu: {
      required: helpers.withMessage('Campo obrigatório.', required)
    },
    branchId: {
      required: helpers.withMessage('Um afiliado precisa ser associado.', required)
    },
  }));

  const v$ = useVuelidate(validators, form);

  return v$;
};
