import { defineStore } from "pinia";
import { ApiService } from "../services/apiService";
const apiService = new ApiService();
export const useDrugsStore = defineStore('drugsStore',{
  state: () => {
    return {
      drugs: [],
      loading: false  
    }
  },
  actions: {
    async fetchDrugsByPeriod(startDate, endDate) {
      try {
        this.loading = true;
        const uri = `/drug/label.json?count=openfda.route.exact&search=effective_time:[${startDate}+TO+${endDate}]`;
        const drugsData = await apiService.get(uri);
        this.loading = false;
        this.drugs = drugsData?.data?.results || [];
      } catch (error) {
        console.log(error)
        this.loading = false;
      }
    }
  }
});