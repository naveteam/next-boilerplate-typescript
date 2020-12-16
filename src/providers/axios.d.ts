import 'axios'

declare module 'axios' {
  export interface AxiosResponse<T = unknown> extends Promise<T> {
    data: T
  }
}
