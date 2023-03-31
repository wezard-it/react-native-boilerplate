import React, { useMemo } from 'react'
import { StyleProp, TextStyle } from 'react-native'
import {
  Button as YlemButton,
  ButtonProps as Props,
  CustomButtonProps,
} from '@wezard/react-native-ylem'
import theme from 'providers/theme'

const Button = ({ type = 'primary', size = 'lg', ...props }: Partial<Props>): JSX.Element => {
  const custom: CustomButtonProps = useMemo(() => {
    if (type === 'primary') {
      return {
        background: theme.colors.primary,
        disabled: theme.colors.gray,
        title: { container: theme.colors.white, disabled: theme.colors.white },
        spinner: {
          active: theme.colors.white,
          disabled: theme.colors.gray,
        },
      }
    } else if (type === 'secondary') {
      return {
        background: theme.colors.accent,
        disabled: theme.colors.gray,
        title: { container: theme.colors.accent, disabled: theme.colors.white },
        spinner: {
          active: theme.colors.accent,
          disabled: theme.colors.gray,
        },
      }
    }
    return {}
  }, [type])

  const customHeight = useMemo(() => {
    switch (size) {
      case 'sm':
        return 24
      case 'md':
        return 36
      case 'lg':
        return 48
    }
  }, [size])

  const customTitleStyle: StyleProp<TextStyle> = useMemo(() => {
    switch (size) {
      case 'sm':
        return { ...theme.typography.h3 }
      case 'md':
        return { ...theme.typography.h2 }
      case 'lg':
        return { ...theme.typography.h1 }
    }
  }, [size])

  return (
    <YlemButton
      {...props}
      size="custom"
      type="custom"
      custom={custom}
      height={customHeight}
      titleStyle={customTitleStyle}
    />
  )
}

export default Button
