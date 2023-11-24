import { ref } from 'vue'
import type { AxiosResponse } from 'axios'
import { defineStore } from 'pinia'
import type { IError } from '@/interfaces/user'
import { HttpGet } from '@/HttpRequest'
import type { IResponseListEmploye } from '@/interfaces/listEmploye'
import router from '@/router';

interface IObjectSearch {
  page: number,
  limit: number
}

export const useListEmployeStore = defineStore('employeList', () => {
  const employeList = ref<Partial<IResponseListEmploye>>({})
  const loadingList = ref<boolean>(false)
  const errorList = ref<Partial<IError>>({})

  function searchedRegisterList(newList: IResponseListEmploye) {
    employeList.value = newList
  }

  async function getListEmploye({ limit, page }: IObjectSearch) {
    try {
      loadingList.value = true
      errorList.value = {}
      const { data }: AxiosResponse = await HttpGet(`/empleados?limit=${limit}&page=${page}`)
      
      searchedRegisterList(data)
    } catch (error: any) {
      errorList.value = error.response.data
      if (error.response.status === 403) {
        router.push('/')
      }
    } finally {
      loadingList.value = false
    }
  }

  return { employeList, errorList, loadingList, searchedRegisterList, getListEmploye }
}, 
{ persist: true }
)
