import { AxiosError } from 'axios'

export function handleError(key: string, error: unknown): BasicSDKError {
  console.error('[handleError]', key, JSON.stringify(error))

  if (error instanceof AxiosError) {
    return new BasicSDKError({
      status: error.response?.status ?? 500,
      code: error.code ?? key,
      message: error.response?.data?.message ?? key,
      data: error,
    })
  }

  return new BasicSDKError({ message: key, code: key, status: 0, data: error })
}

export interface BasicSDKErrorData {
  code: string
  status: number
  message: string
  data?: unknown
}

class BasicSDKError extends Error {
  date: Date
  code: string
  status: number
  data?: unknown

  constructor({ message, code, status, data }: BasicSDKErrorData) {
    super(message)

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BasicSDKError)
    }

    this.code = code
    this.status = status
    this.data = data
    this.date = new Date()
  }
}

export default BasicSDKError
