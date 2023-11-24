<script setup lang="ts">

defineProps({
  name: String,
  width: String,
  kind: String,
  disabled: Boolean
})

defineEmits(['click'])
</script>

<template>
  <button
    :class="`w-${width ? `${width}px` : 'full'} bg-gray-900 text-white text-[16px] font-bold text-center  px-6 py-5 rounded-[10px] cursor-pointer flex justify-center items-center`"
    @click="$emit('click')"
    :disabled="disabled"
  >
    <slot /> {{ name }}
  </button>
</template>

<style scoped></style>