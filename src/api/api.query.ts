import { useQuery } from '@tanstack/vue-query'
import { GetAllSurat, GetSuratById } from './api'
import type { ResponseApi, Surat } from './type'

export function useGetAllSurat() {
  return useQuery<ResponseApi<Surat[]>>({
    queryKey: ['surat'],
    queryFn: GetAllSurat,
    refetchOnWindowFocus: false,
  })
}

export function useGetSuratById(id: number) {
  return useQuery<ResponseApi<Surat>>({
    queryKey: ['surat', id],
    queryFn: () => GetSuratById(id),
    refetchOnWindowFocus: false,
  })
}
