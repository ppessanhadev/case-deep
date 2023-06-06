export default defineNuxtRouteMiddleware(async () => {
  const store = useAirConditionerStore();
  store.fetchAirConditioners();
});
