export type ResponseApi<T> = {
  code: number
  messages: string
  data: T
}

export type Surat = {
  nomor: number
  nama: string
  namaLatin: string
  jumlahAyat: number
  arti: string
  deskripsi: string
  audioFull: {}
  ayat?: Ayat[]
  suratSebelumnya?:
    | boolean
    | {
        jumlahAyat: number
        nama: string
        namaLatin: string
        nomor: number
      }
  suratSelanjutnya?:
    | boolean
    | {
        jumlahAyat: number
        nama: string
        namaLatin: string
        nomor: number
      }
  tempatTurun?: string
}

export type Ayat = {
  nomorAyat: number
  teksArab: string
  teksLatin: string
  teksIndonesia: string
  audio: {}
}
