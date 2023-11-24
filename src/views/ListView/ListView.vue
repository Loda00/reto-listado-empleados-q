<template>
  <div class="flex">
    <div>
      <NavBarComponent />
    </div>
    <div class="w-full m-auto">
      <HeaderComponent />
      <div class="bg-gray-100 h-[calc(100vh-96px)] pt-8 px-6 overflow-x-auto">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import { RouterView } from 'vue-router';
  import HeaderComponent from '@/section/Header/HeaderComponent.vue';
  import NavBarComponent from '@/section/NavBar/NavBarComponent.vue';

  console.log('List Employes');
</script>
  
<style>
  
</style>