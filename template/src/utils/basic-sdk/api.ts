import AsyncStorage from '@react-native-async-storage/async-storage'
import axios, { AxiosInstance, AxiosProgressEvent, AxiosResponse, Method } from 'axios'
import applyCaseMiddleware from 'axios-case-converter'
import BasicSDKError from './utils/basic-sdk-error'

interface ApiCallProps {
  method?: Method
  data?: object | string
  url: string
  baseURL?: string
  headers?: { [key: string]: string }
  params?: { [key: string]: string }
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void
  onDownloadProgress?: (progressEvent: AxiosProgressEvent) => void
}

export default class Api {
  private static _instance: Api | null = null
  private api!: AxiosInstance
  private authData?: BasicAuthData

  // Constructor
  constructor({ apiUrl, v }: { apiUrl: string; v: string }) {
    if (Api._instance) {
      return Api._instance
    }

    Api._instance = this
    Api._instance.api = applyCaseMiddleware(axios.create({ baseURL: `${apiUrl}/${v}` }), {
      preservedKeys: ['_meta'],
    })

    Api._instance.api.interceptors.response.use(
      (response) => response,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async (err: { response: AxiosResponse<any> }): Promise<unknown> => {
        console.log('interceptor', err.response, err.response.status, err.response.data)
        if (
          err.response !== undefined &&
          err.response.status === 401 &&
          err.response.data.message === 'JWT Token not found'
        ) {
          try {
            // TODO: Call refresh token method (below you can find an example on how the request could be)
            // below you can find an example on how the request could be
            // const response = (await Api._instance!.call({
            //   method: 'POST',
            //   url: 'auth/refresh',
            //   data: {
            //     refreshToken: Api._instance!.authData!.refreshToken,
            //   },
            // })) as AxiosResponse<BasicAuthData>

            const response = {
              accessToken: 'accessToken',
              refreshToken: 'refreshToken',
            } as unknown as AxiosResponse<BasicAuthData>

            Api._instance!.authData = response!.data
            await AsyncStorage.setItem('basic_auth', JSON.stringify(response!.data))
          } catch (error) {
            throw new BasicSDKError({
              message: 'Cannot refresh access token',
              code: 'invalid_refresh_token',
              status: 401,
              data: err,
            })
          }
          return
        }
        throw err
      },
    )

    return Api._instance
  }

  // Methods
  public static getInstance(): Api {
    if (!(Api._instance instanceof Api)) {
      throw new Error('Api not initialized yet')
    }
    return Api._instance
  }

  public static destroyInstance(): void {
    Api._instance?.destroy()
    Api._instance = null
  }

  public setAuthData(authData: BasicAuthData): void {
    if (Api._instance) {
      Api._instance.authData = authData
      Api._instance.api.defaults.headers.Authorization = `Bearer ${authData.accessToken}`
      console.log('auth-data', { ...authData })
    } else {
      throw new Error('Api not initialized')
    }
  }

  private _call({
    method = 'get',
    data,
    url,
    baseURL,
    headers,
    params,
    onUploadProgress,
    onDownloadProgress,
  }: ApiCallProps): Promise<AxiosResponse> | undefined {
    return Api._instance?.api.request({
      method: method || 'get',
      data,
      url,
      baseURL,
      headers,
      params,
      onUploadProgress,
      onDownloadProgress,
    })
  }

  public async call(props: ApiCallProps): Promise<AxiosResponse> {
    const resp = await Api._instance?._call(props)
    if (resp !== undefined) {
      return resp
    } else {
      throw new Error('Api error')
    }
  }

  public destroy(): void {
    this.destroy()
  }
}
