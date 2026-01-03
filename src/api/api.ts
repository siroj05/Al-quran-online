import axios from 'axios'
import type { ResponseApi, Surat } from './type'

export const GetAllSurat = async <T = Surat[]>(): Promise<ResponseApi<T>> => {
  try {
    const res = await axios.get('https://equran.id/api/v2/surat')
    return res.data
  } catch (error) {
    throw new Error('An unexpected error occurred')
  }
}

export const GetSuratById = async <T = Surat>(id: number): Promise<ResponseApi<T>> => {
  try {
    const res = await axios.get(`https://equran.id/api/v2/surat/${id}`)
    return res.data
  } catch (error) {
    throw new Error('An unexpected error occurred')
  }
}
