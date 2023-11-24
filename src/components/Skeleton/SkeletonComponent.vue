<template>
  <div class="c_skeleton__animate w-full h-6 rounded-[100px]">
  </div>
</template>

<script setup lang="ts">

</script>

<style>
.c_skeleton__animate {
  animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
  0% {
    background-color: #ddd;
  }
  50% {
    background-color: #d0d0d0;
  }
  100% {
    background-color: #ddd;
  }
}
</style>