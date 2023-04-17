interface Colors {
  primary: string
  primary1: string
  accent: string
  accent1: string
  text: string
  text1: string
  gray: string
  gray1: string
  gray2: string
  gray3: string
  neutral: string
  neutralLight: string
  neutralBorder: string
  neutralDark: string
  neutralTextDisabled: string
  white: string
  black: string
}

interface Radius {
  xs?: number
  s?: number
  m?: number
  l?: number
  xl?: number
  xxl?: number
  infinite?: number
}

interface Shadow {
  [key: string]: {
    shadowColor: string
    shadowOffset: {
      width: number
      height: number
    }
    shadowOpacity: number
    shadowRadius: number
    elevation: number
  }
}

type Spacing = {
  xs: number
  s: number
  midS: number
  m: number
  midM: number
  l: number
  midL: number
  xl: number
}

type TypographyType = {
  fontFamily: string
  fontSize: number
  fontWeight: FontWeightType
  color: string
  lineHeight: number
}

interface Typography {
  themeFont?: { fontFamily?: string }
  h1?: TypographyType
  h2?: TypographyType
  h3?: TypographyType
  h4?: TypographyType
  title?: TypographyType
  title1?: TypographyType
  title2?: TypographyType
  titleBig?: TypographyType
  titleBold?: TypographyType
  p?: TypographyType
  p1?: TypographyType
  p2?: TypographyType
  link?: TypographyType
  link1?: TypographyType
  link2?: TypographyType
  link3?: TypographyType
}

interface Theme {
  colors: Colors
  radius: Radius
  shadows: Shadow
  spacing: Spacing
  typography: Typography
}
