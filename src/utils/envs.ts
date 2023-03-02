import { REACT_NATIVE_API_URL, REACT_NATIVE_API_VERSION } from '@env'

export const getEnvs = (): { [key: string]: string } => ({
  API_URL: REACT_NATIVE_API_URL!,
  API_VERSION: REACT_NATIVE_API_VERSION!,
})
