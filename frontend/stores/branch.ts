import { defineStore, acceptHMRUpdate } from 'pinia';
import { Branch } from '~~/types/Branch';

export const useBranchStore = defineStore({
  id: 'branch-store',
  state: () => ({
    loading: false,
    branches: [] as Branch[],
  }),
  getters: {
    hasBranches: (state) => Boolean(state.branches.length)
  },
  actions: {
    async fetchBranches() {
      this.loading = true;

      const { data: branches } = await useApi<Branch[]>('/api/v1/branch');

      if (branches.value) {
        this.branches = branches.value;
      }

      this.loading = false;
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBranchStore, import.meta.hot));
}
