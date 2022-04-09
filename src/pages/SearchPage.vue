<template>
  <q-layout view="hHh Lpr lff">
    <q-toolbar class="bg-primary text-white">
      <q-toolbar-title>U.S FOOD & DRUG - SEARCHING</q-toolbar-title>
    </q-toolbar>
    <q-page-container>
      <div class="row justify-center align-center">
        <Search :onSubmit="onSubmit" />
      </div>
      <div class="chart" v-if="valuesDrugs.length>0">
        <BarChart :values="valuesDrugs" :labels="labelsDrugs" />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script setup>
/**IMPORTS */
import Search from "../components/Search.vue";
import BarChart from "../components/BarChart.vue";

import { computed } from "vue";
import { useDrugsStore } from "../store/drugsStore";
/**VARIABLES */
const drugsStore = useDrugsStore();
/**COMPUTED */
const labelsDrugs = computed(() => drugsStore.drugs.map((drug) => drug?.term));
const valuesDrugs = computed(() => drugsStore.drugs.map((drug) => drug?.count));
/**METHODS */
const onSubmit = async (startDate, endDate) => {
  const startDateTemp = startDate.split("-").join("");
  const endDateTemp = endDate.split("-").join("");
  await drugsStore.fetchDrugsByPeriod(startDateTemp, endDateTemp);
};
</script>
<style lang="scss" scoped>
.chart {
  margin: 0 10rem;
}
</style>
