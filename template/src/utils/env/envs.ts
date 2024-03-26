import Config from 'react-native-config'

export const getEnvs = (): { [key: string]: string } => ({
  API_URL: Config.REACT_NATIVE_API_URL!,
  API_VERSION: Config.REACT_NATIVE_API_VERSION!,
})
