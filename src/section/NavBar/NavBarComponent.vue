<template>
  <div class="flex flex-col justify-between w-[280px] h-screen py-6 px-8 border border-l-gray-300">
    <div>
      <ImgLogo class="mb-6 m-auto" />
      <div>
        <div class="flex items-center" @click="redirect('/list/employe')">
          <ImgUsers class="mr-2" />
          <OptionNav name="state" for-name="draft" name-option="Empleados" :checked="true" />
        </div>
        <div class="flex items-center" @click="redirect('/list/recriutment')">
          <ImgJob class="mr-2" />
          <OptionNav name="state" for-name="published" name-option="Reclutamiento" />
        </div>
      </div>
    </div>
    <div class="flex items-end h-1/2">
      <Button name="Salir" class="bg-white !text-gray-900 border border-gray-900" @click="removeAuth" />
    </div>
  </div>
</template>
  
<script setup lang='ts'>
  import ImgLogo from '../../components/icons/ImgLogo.vue';
  import ImgUsers from '@/components/icons/ImgUsers.vue';
  import OptionNav from '../../components/OptionNav/OptionNavComponent.vue';
  import Button from '../../components/Button/ButtonComponent.vue'
  import ImgJob from '@/components/icons/ImgJob.vue';
  import { useAuthStore } from '@/stores/auth'
  import { useListEmployeStore } from '@/stores/listEmploye'
  import router from '@/router';

  const store = useAuthStore()
  const employeStore = useListEmployeStore()

  const removeAuth = () => {
    store.userAuth = {}
    router.push('/')
  }

  const redirect = (path: string) => {
    if (!employeStore.loadingList) {
      router.push(path)
    }
  }

</script>
  
<style>
  
</style>