<template>
  <div class="w-full mb-6">
    <label
      :for="forName"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {{ label }} <span class="text-red-500" v-show="required">*</span>
    </label>
    <input
      type="text"
      :id="forName"
      :disabled="disabled"
      :value="value"
      @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
      class="w-full outline-none border border-gray-300 focus:border-green-500  text-gray-900 text-sm rounded-[10px] py-4 px-5 text-[14px] font-normal"
      :placeholder="placeholder"
      required
    />
  </div>
</template>

<script setup lang="ts">
interface IPropsErrorInput {

}

const props = defineProps({
  value: String,
  required: Boolean,
  label: String,
  error: String,
  placeholder: String,
  type: String,
  forName: String,
  loading: Boolean,
  disabled: Boolean
})

defineEmits(['update:value'])


</script>

<style></style>
