<template>
  <q-dialog v-model="loading" persistent>
    <q-card style="width:250px;" class="bg-primary">
      <q-card-section class="row items-center q-pb-xs">
        <div class="text-subtitle2 text-white">Por Favor espere.....</div>
      </q-card-section>
      <q-card-section class="scroll">
        <q-linear-progress indeterminate color="white"/>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>
<script setup>
  import { useDrugsStore } from "../store/drugsStore";
  import { computed } from "vue";
  const drugsStore = useDrugsStore();
  const loading = computed(()=>drugsStore.loading);
</script>