<template>
  <div>
    <BarChart
      :chart-data="data"
      :options="options"
      css-classes="chart-container"
    /> 
  </div>
</template>
<script setup>
import { BarChart } from "vue-chart-3";
import { ref, computed, onMounted } from "vue";

/*PROPS*/
const props = defineProps({
  values:{
    type: Array,
    default: () => []
  },
  labels: {
    type: Array,
    default: () => []
  }
})
/**COMPUTED*/
const dataValues = computed(()=>{
  return [[...props.values]]
})

const data = computed(() => ({
  labels: props.labels,

  datasets: [
    {
      label: "Foo",
      data: dataValues.value[0],
      backgroundColor: "#268bd2",
    },
  ],
}));

const options = ref({
  plugins: {
    title: {
      text: "Bar",
    },
  },
});
</script>
