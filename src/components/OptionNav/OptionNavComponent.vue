<template>
  <div class="py-4">
    <input type="radio" :id="forName" :class="`peer/${forName} hidden`" :name="name" :checked="checked" />
    <label :for="forName" :class="`peer-checked/${forName}:text-sky-500 cursor-pointer outline-none select-none`">
      {{ nameOption }}
    </label>
  </div>
</template>

<script setup lang='ts'>

const props = defineProps({
  nameOption: String,
  forName: String,
  name: String,
  checked: {
    type: Boolean,
    default: false
  }
})
  
</script>
  
<style>
  
</style>