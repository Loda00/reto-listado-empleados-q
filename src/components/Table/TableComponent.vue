<template>
  <div class="w-full grid grid-cols-7 gap-4 bg-gray-50 rounded-[10px]">
    <div 
      v-for="(head, i) in props.headers"
      :class="`${head.frame} ${i === 5 ? 'flex justify-end' : ''} p-4 text-gray-600 font-bold text-ellipsis text-xs`"
    >
      {{ head.name }}
    </div>
  </div>
  <div class="w-full grid grid-rows-1 grid-cols-7 gap-4" v-for="item in props.body" >
    <div class="flex items-center col-span-1 p-4 text-xs text-gray-900">
      <div>
        <div>{{ item.nombre }}</div>
        <div class="text-[10px] text-gray-500">{{ item.correo }}</div>
      </div>
    </div>
    <div class="flex items-center col-span-1 p-4 text-xs text-gray-900">
      <span>{{ item.cargo }}</span>
    </div>
    <div class="flex items-center col-span-1 p-4 text-xs text-gray-900">
      <span>{{ item.departamento }}</span>
    </div>
    <div class="flex items-center col-span-1 p-4 text-xs text-gray-900">
      <span>{{ item.oficina }}</span>
    </div>
    <div class="flex items-center col-span-1 p-4 text-xs text-gray-900">
      <span>{{ item.estadoCuenta }}</span>
    </div>
    <div :class="`${'col-span-2'} p-4 text-xs gap-x-2 text-gray-900 flex justify-end`">
      <div class="flex justify-center items-center w-[30px] h-[30px] rounded-lg cursor-pointer bg-green-500">
        <ImgEye />
      </div>
      <div class="flex justify-center items-center w-[30px] h-[30px] rounded-lg cursor-pointer bg-blue-500">
        <ImgEdit />
      </div>
      <div class="flex justify-center items-center w-[30px] h-[30px] rounded-lg cursor-pointer bg-red-500">
        <ImgDelete />
      </div>
    </div>
  </div>

</template>
  
<script setup lang='ts'>
import { Fragment, onMounted } from 'vue';
import ImgEye from '../icons/ImgEye.vue';
import ImgEdit from '../icons/ImgEdit.vue';
import ImgDelete from '../icons/ImgDelete.vue';

const props = defineProps(['headers', 'body'])


// onMounted(() => console.log('props ', props.headers))

</script>
  
<style>
  
</style>