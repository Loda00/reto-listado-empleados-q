<template>
  <div v-if="loadingList" class="rounded-2xl bg-white p-6">
    <div class="flex justify-between items-center mb-6">
      <div class="text-[24px] text-gray-900 font-bold mb-2">Empleados</div>
      <Skeleton class="w-[100px]" />
    </div>
    <div class="flex gap-x-4">
      <Skeleton class="w-[33.3%] h-[36px]" /><Skeleton class="w-[33.3%] h-[36px]" /><Skeleton class="w-[33.3%] h-[36px]" />
    </div>
    <Skeleton class="mt-6 h-[28px]" />
    <div>
      <div class="w-full grid grid-rows-1 grid-cols-7 gap-7 mt-6">
        <Skeleton v-for="item in Array(42).fill('')" />
      </div>
    </div>
  </div>
  <div v-else class="rounded-2xl bg-white p-6 ">
    <div class="flex justify-between gap-x-5">
      <div class="w-full">
        <div class="text-[24px] text-gray-900 font-bold mb-2">Empleados</div>
        <div class="text-sm font-medium text-gray-600">Gestiona tus empleados</div>
      </div>
      <div class="flex w-[300px] gap-x-5">
        <Button class="w-[150px] bg-white !text-gray-900 border border-gray-900" name="Descargar" >
          <ImgFileDownload class="mr-2 text-gray-900" />
        </Button>
        <Button class="w-[127px]" name="Nuevo" >
          <ImgPlus class="mr-2 text-gray-900" />
        </Button>
      </div>
    </div>
    <div class="flex mt-6 gap-x-5">
      <Input class="!w-[70%]" placeholder="Buscar empleado" @update:value="(word: string) => text = word " :value="text" />
      <Input class="!w-[30%]" placeholder="Nombre de cargo" />
    </div>
    <Table :headers="headers" :body="employeList.data" />
    <div class="flex justify-between mt-6">
      <Pagination
        :page="page"
        :limit="limit"
        @next-page="nextPage"
        @prev-page="prevPage"
        @select-page="selectPage"
        :buttonsPage="buttonsPage"
        :loadingList="loadingList"
        v-if="employeList.total"
      />
      <div class="flex items-center text-[12px] font-medium text-gray-600">
        <div class="pr-5">
          {{ infoList }}
        </div>
        <div>
          <select name="select" class="p-[10px] outline-none border border-gray-200 rounded-lg" v-model="limit">
            <option
              v-for="item in arrayLimit"
              @input="setLimit(item)"
              :value="item"
            >
              Mostrar {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
import Button from '@/components/Button/ButtonComponent.vue';
import Input from '@/components/Input/InputComponent.vue';
import Table from '@/components/Table/TableComponent.vue';
import Pagination from '@/components/Pagination/PaginationComponent.vue';
import ImgFileDownload from '@/components/icons/ImgFileDownload.vue';
import Skeleton from '@/components/Skeleton/SkeletonComponent.vue'
import ImgPlus from '@/components/icons/ImgPlus.vue';
import { useListEmployeStore } from '@/stores/listEmploye'
import { storeToRefs } from 'pinia';
import { computed, onMounted, onUpdated, ref, watch, watchEffect } from 'vue';

interface ITableHeaders {
  name: string;
  frame: string;
}

const headers: ITableHeaders[] = [
  { name: 'Nombre', frame: 'col-span-1' },
  { name: 'Nombre cargo', frame: 'col-span-1' },
  { name: 'Departamento', frame: 'col-span-1' },
  { name: 'Oficina', frame: 'col-span-1' },
  { name: 'Cuenta', frame: 'col-span-1' },
  { name: 'Acciones', frame: 'col-span-2' },
]

const store = useListEmployeStore()

const { employeList, errorList, loadingList } = storeToRefs(store)

const page = ref<number>(1)
const limit = ref<number>(10)
const buttonsPage = ref<number>(0)
const text = ref<string>('')
const arrayLimit = [7, 10, 15]

const setLimit = (value: number) => {
  console.log('value ', value);
  limit.value = value
}

const getList = () => {
  store.getListEmploye({ page: page.value, limit: limit.value })
}

onMounted(() => {
  getList()
})

const nextPage = (index: number) => {
  if (limit.value > index) page.value = index + 1
}

const prevPage = (index: number) => {
  if (index > 1) page.value = index - 1
}

const selectPage = (select: number) => {
  page.value = select
}

watchEffect(() => {
  const calc = String((employeList.value.total || 0) / limit.value)
  buttonsPage.value = parseInt(calc) + 1
})

watch([page, limit],() => {
  getList()
})

const infoList = computed(() => {
  return `
    Mostrando ${page.value === 1 ? 1 : (limit.value * (page.value - 1)) + 1} a 
    ${page.value === buttonsPage.value ? employeList.value.total : page.value * (employeList.value.data?.length || 0)} 
    de ${employeList.value.total} registros
  `
})


onUpdated(() => {
  console.log('limit ', limit.value);
})

</script>
  
<style>
  
</style>