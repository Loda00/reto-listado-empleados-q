import { ref } from 'vue'
import type { AxiosError, AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import type { IUser, IError } from '@/interfaces/user'
import { HttpPost } from '@/HttpRequest'
import type { IResponseSuccessAuth } from '@/interfaces/auth'

interface IObjectAuth {
  correo: string,
  password: string,
}

export const useAuthStore = defineStore('auth', () => {
  const userAuth = ref<Partial<IResponseSuccessAuth>>({})
  const loadingAuth = ref<boolean>(false)
  const errorAuth = ref<Partial<IError>>({})

  function registerAuthenticatedUser(newUser: IResponseSuccessAuth) {
    userAuth.value = newUser
  }

  async function postAuthUser(obj: IObjectAuth) {
    try {
      loadingAuth.value = true
      errorAuth.value = {}
      const { data }: AxiosResponse = await HttpPost('/auth/login', obj)
      
      registerAuthenticatedUser(data.data)
    } catch (error: any) {
      errorAuth.value = error.response.data
    } finally {
      loadingAuth.value = false
    }
  }

  return { userAuth, registerAuthenticatedUser, postAuthUser, loadingAuth, errorAuth }
}, { persist: true })
