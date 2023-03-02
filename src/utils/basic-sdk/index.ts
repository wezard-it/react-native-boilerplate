import { getEnvs } from 'utils/envs'
import Api from './api'
import { handleError } from './utils/basic-sdk-error'

const { API_URL, API_VERSION } = getEnvs()

interface UtravelSDKProps {
  apiUrl: string
  v: string
}

class BasicSDK {
  private static instance: BasicSDK
  private api?: Api
  private authData?: BasicAuthData

  constructor({ apiUrl, v }: UtravelSDKProps) {
    if (!BasicSDK.instance) {
      BasicSDK.instance = this
    }

    BasicSDK.instance.api = new Api({ apiUrl, v })

    return BasicSDK.instance
  }

  public static getInstance(): BasicSDK {
    if (BasicSDK.instance === null || !(BasicSDK.instance instanceof BasicSDK)) {
      throw new Error('WS SDK not initialized yet')
    }
    return BasicSDK.instance
  }

  public setAuthData(data: BasicAuthData): void {
    BasicSDK.instance.authData = this.authData
    BasicSDK.instance.api?.setAuthData(data)
  }

  // AUTHENTICATION
  public async signIn(): Promise<void> {
    try {
      const resp = await BasicSDK.instance.api!.call({ url: `sign` })
      return resp?.data
    } catch (error) {
      throw handleError('ERR_SIGN', error)
    }
  }
}

const utravelSDK = new BasicSDK({ apiUrl: API_URL, v: API_VERSION })

export default utravelSDK
