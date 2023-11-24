<template>
  <div class="flex w-[272px] gap-x-2">
    <button class="w-[32px] h-[32px] hover:bg-gray-100 rounded-[10px] border border-gray-200" :disabled="page === 1 || loadingList"  @click="$emit('prevPage', page)"> &lt; </button>
    <button
      v-for="(num, i) in buildButtons"
      :disabled="loadingList"
      @click="$emit('selectPage', i + 1)"
      :class="`w-[32px] h-[32px] ${page === i+1 ? 'bg-gray-100' : ''} hover:bg-gray-100 rounded-[10px] text-[12px] text-gray-900`"
    >
      {{ i + 1 }}
    </button>
    <button class="w-[32px] h-[32px] hover:bg-gray-100 rounded-[10px] border border-gray-200" :disabled="page === buttonsPage || loadingList" @click="$emit('nextPage', page)"> > </button>
  </div>
</template>
  
<script setup lang='ts'>
  import { computed } from 'vue';

  defineEmits(['nextPage', 'prevPage', 'selectPage'])

  const props = defineProps({
    page: Number,
    limit: Number,
    buttonsPage: Number,
    loadingList: Boolean,
  })

  const buildButtons = computed(() => Array(props.buttonsPage).fill(''))

</script>
  
<style>
  
</style>