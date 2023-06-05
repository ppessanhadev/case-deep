export default defineNuxtRouteMiddleware(async () => {
  const store = useBranchStore();
  await store.fetchBranches();
});
