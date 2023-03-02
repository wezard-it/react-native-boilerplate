import colors from './colors'

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

export default shadows
