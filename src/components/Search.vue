<template>
  <q-form @submit="submit">
    <div class="row justify-center align-center">
      <div class="q-pa-md" style="max-width: 300px">
        <q-input filled v-model="startDate" :rules="rules">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="startDate" mask="DD-MM-YYYY">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-pa-md" style="max-width: 300px">
        <q-input filled v-model="endDate" :rules="rules">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="endDate" mask="DD-MM-YYYY">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-pa-md">
        <q-btn label="Consultar" type="submit" color="secondary" size="lg" :disable="buttonIsDisabled" />
      </div>
    </div>
  </q-form>
</template>
<script setup>
import { ref, computed } from "vue";

/*PROPS*/
const props = defineProps({
  onSubmit: {
    type: Function,
    default: ()=>console.error('We need onSubmit Fuction in Search.vue')
  }
});

/*VARIABLES*/
const rules =  [
  val => val?.length || 'Porfavor introduzca un valor ',
  val => {
    const regEx = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/
    return regEx.exec(val) || 'Porfavor introduzca un valor valido'
  }
];
const startDate = ref();
const endDate = ref();

/*COMPUTED*/
const buttonIsDisabled = computed(()=> !startDate.value && !endDate.value);

/*METHODS*/
const submit = () => {
  const startDateFormat = formatDate(startDate.value);
  const endDateFormat = formatDate(endDate.value);
  props.onSubmit(startDateFormat, endDateFormat);
}

/**
 * @param(date) = '31-01-2022'
 * @returns '2022-01-21'
 */
const formatDate = (date) => {
  const [day, month, year] = date.split('-');
  return `${year}-${month}-${day}`;
}

</script>
<style lang="scss" scoped></style>
