export default defineNuxtRouteMiddleware(async () => {
  const store = useComputerStore();
  store.fetchComputers();
});
