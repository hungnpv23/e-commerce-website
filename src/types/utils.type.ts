export interface ErrorRespone<Data> {
  message: string
  data?: Data
}

export interface SuccessRespone<Data> {
  message: string
  data: Data
}
