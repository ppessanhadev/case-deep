import { Computer } from '~~/types/Computer';
import { defineStore, acceptHMRUpdate } from 'pinia';

export const useComputerStore = defineStore({
  id: 'computer-store',
  state: () => ({
    loading: false,
    computers: [] as Computer[],
  }),
  getters: {
    hasComputers: (state) => Boolean(state.computers.length)
  },
  actions: {
    async fetchComputers() {
      this.loading = true;

      const { data: computer } = await useApi<Computer[]>('/api/v1/computer');

      if (computer.value) {
        this.computers = computer.value;
      }

      this.loading = false;
    },
    async addComputer(computer: Omit<Computer, 'id'>) {
      this.loading = true;

      await useApi('/api/v1/computer', {
        method: 'POST',
        body: computer
      });

      await this.fetchComputers();
    },
    async updateComputer(id: string, computer: Omit<Computer, 'id'>) {
      this.loading = true;

      await useApi('/api/v1/computer', {
        method: 'PATCH',
        params: { id },
        body: computer
      });

      await this.fetchComputers();
    },
    async deleteComputer(id: string) {
      this.loading = true;

      await useApi('/api/v1/computer', {
        method: 'DELETE',
        params: { id }
      });

      await this.fetchComputers();
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useComputerStore, import.meta.hot));
}
