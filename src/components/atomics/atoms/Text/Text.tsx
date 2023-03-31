import React, { useMemo } from 'react'
import type { StyleProp, TextStyle } from 'react-native'
import { Text as YlemText, TextProps, TextType } from '@wezard/react-native-ylem'
import theme from 'providers/theme'
import Style from './Text.style'

type Modify<T, R> = Omit<T, keyof R> & R

type TextTypeExtended =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'title-sm'
  | 'title-md'
  | 'title-lg'
  | 'title-bold'
  | 'title-light'
  | 'title-xl'

type Props = Modify<TextProps, { type: TextTypeExtended; fontFamily: string | undefined }>

const Text = ({
  type = 'title-sm',
  children,
  style = null,
  color = theme.colors.text,
  underlined = false,
  fontFamily = theme.typography.themeFont?.fontFamily,
  ...rest
}: Partial<Props>) => {
  const extendedStyle: StyleProp<TextStyle> = useMemo(() => {
    switch (type) {
      case 'h1':
        return Style.h1
      case 'h2':
        return Style.h2
      case 'h3':
        return Style.h3
      case 'title-sm':
        return Style.titleSm
      case 'title-md':
        return Style.titleMd
      case 'title-lg':
        return Style.titleLg
      case 'title-xl':
        return Style.titleLg
      default:
        return null
    }
  }, [type])

  return (
    <YlemText
      type={type as TextType}
      style={style}
      color={color}
      underlined={underlined}
      extendedStyle={extendedStyle}
      fontFamily={fontFamily}
      {...rest}>
      {children}
    </YlemText>
  )
}

export default Text
