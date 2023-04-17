import radius from './shared/radius'
import spacing from './shared/spacing'
import typography from './shared/typography'

const colors: Colors = {
  primary: '#000000',
  primary1: '#000000',
  accent: '#E7374C',
  accent1: '#F18794',
  text: '#70808C',
  text1: '#A9B3BA',
  gray: '#DDDDDD',
  gray1: '#EBEBEB',
  gray2: '#F4F4F4',
  gray3: '#FCFCFC',
  neutral: '#E3E7EB',
  neutralLight: '#EEF1F4',
  neutralBorder: '#F3F5F9',
  neutralDark: '#C7CED4',
  neutralTextDisabled: '#ABB8CA',
  white: '#FFFFFF',
  black: '#000000',
}

const shadows: Shadow = {
  light: {
    shadowColor: colors.neutral,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  medium: {
    shadowColor: colors.neutralBorder,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 7,
  },
  dark: {
    shadowColor: colors.neutralDark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 6,
    elevation: 8,
  },
}

const theme: Theme = {
  colors,
  radius,
  shadows,
  spacing,
  typography,
}

export default theme
