<script setup lang="ts">

import { ref, onMounted, computed, onUpdated, watch } from 'vue'
import { storeToRefs } from 'pinia'
import ButtonComponent from '@/components/Button/ButtonComponent.vue'
import InputComponent from '@/components/Input/InputComponent.vue';
import ImgLogin from '@/components/icons/ImgLogin.vue'
import ImgFrame from '@/components/icons/ImgFrame.vue';
import ImgLogo from '@/components/icons/ImgLogo2.vue';
import { useAuthStore } from '@/stores/auth'
import router from '@/router';

const email = ref<string>('')
const password = ref<string>('')

const store = useAuthStore()
const { userAuth, errorAuth, loadingAuth } = storeToRefs(store)

const onSubmit = (_e: HTMLFormElement) => {
  store.postAuthUser({ correo: email.value, password: password.value })
}

onMounted(() => {
  console.log('process.env.BASE_URL ', import.meta.env.VITE_BASE_URL);
})

watch(userAuth, (nextProps, prevProps) => {
  console.log('errorAuth ', errorAuth);
  if (nextProps !== prevProps) {
    router.push('/list/employe')
  }
})

</script>

<template>
  <div class="flex">
    <div class="flex flex-col w-[720px] h-[100vh] bg-gray-900 object-cover relative">
      <ImgLogin class="object-cover w-full" />
      <div class="h-[calc(100vh-667px)] bg-gray-900 text-white p-[50px]">
        <ImgLogo />
        <ImgFrame class="my-6" />
        <div class="text-[18px] font-normal ">
          Te ayudamos a gestionarlos de manera más sencilla
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center w-6/12">
      <div class="w-[480px]">
        <div class="text-center text-[24px] font-bold mb-8">Inicia sesión</div>
        <form @submit.prevent="onSubmit($event.target as HTMLFormElement)">
          <InputComponent
            :required="true"
            :disabled="loadingAuth"
            label="Correo electrónico"
            placeholder="Ingresa el correo electrónico"
            :value="email"
            @update:value="(newValue) => email = newValue"
            forName="email"
          />
          <InputComponent
            :required="true"
            label="Contraseña"
            :disabled="loadingAuth"
            placeholder="Ingresa la contraseña"
            :value="password"
            @update:value="(newValue) => password = newValue"
            type="password"
            forName="password"
          />
          <div
            class="text-red-500 text-[12px] font-normal"
            v-show="errorAuth.status === 'error'"
          >
            {{ errorAuth.message }}
          </div>
          <ButtonComponent :disabled="loadingAuth" class="my-8" name="Iniciar sesión" />
        </form>
        <div class="text-center text-[14px] font-medium text-gray-500">
          ¿Eres nuevo aquí? 
          <span class="text-center text-[14px] font-medium text-green-500 cursor-pointer hover:  underline">Crea una cuenta</span>
        </div>
      </div>
    </div>
  </div>
</template>
