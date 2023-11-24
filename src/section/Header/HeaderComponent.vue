<template>
  <div class="flex justify-end  px-8 h-[96px] border border-b-gray-300">
    <div class="flex justify-center items-center gap-x-2 w-[170px]">
      <div class="rounded-[32px] w-[32px] h-[32px] text-white bg-orange-500 text-center leading-8 text-[14px] font-bold">{{ initialsName }}</div>
      <div class="text-[12px] font-bold">
        {{  store.userAuth.user?.nombre  }}
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
  import { useAuthStore } from '@/stores/auth'
  import { computed } from 'vue';

  const initialsName = computed(() => {
    return store.userAuth.user?.nombre.split(' ').map((name) => name.charAt(0)).join('')
  })

  const store = useAuthStore()

</script>
  
<style>
  
</style>