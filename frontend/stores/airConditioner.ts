import { defineStore, acceptHMRUpdate } from 'pinia';
import { AirConditioner } from '~~/types/AirConditioner';

export const useAirConditionerStore = defineStore({
  id: 'air-conditioner-store',
  state: () => ({
    loading: false,
    ac: [] as AirConditioner[],
  }),
  getters: {
    hasAirConditioners: (state) => Boolean(state.ac.length)
  },
  actions: {
    async fetchAirConditioners() {
      this.loading = true;

      const { data: ac } = await useApi<AirConditioner[]>('/api/v1/air-conditioner');

      if (ac.value) {
        this.ac = ac.value;
      }

      this.loading = false;
    },
    async addAirConditioner(ac: Omit<AirConditioner, 'id'>) {
      this.loading = true;

      await useApi('/api/v1/air-conditioner', {
        method: 'POST',
        body: ac
      });

      await this.fetchAirConditioners();
    },
    async updateAirConditioner(id: string, ac: Omit<AirConditioner, 'id'>) {
      this.loading = true;

      await useApi('/api/v1/air-conditioner', {
        method: 'PATCH',
        params: { id },
        body: ac
      });

      await this.fetchAirConditioners();
    },
    async deleteAirConditioner(id: string) {
      this.loading = true;

      await useApi('/api/v1/air-conditioner', {
        method: 'DELETE',
        params: { id }
      });

      await this.fetchAirConditioners();
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBranchStore, import.meta.hot));
}
