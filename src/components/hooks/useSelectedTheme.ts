/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from 'react'
import dark from 'providers/theme/theme-dark'
import light from 'providers/theme/theme-light'

function useTheme(type: 'light' | 'dark' = 'light'): Theme {
  const [theme, setTheme] = useState<Theme>(light)

  useEffect(() => {
    if (type === 'light') {
      setTheme(light as unknown as Theme)
    } else {
      setTheme(dark as unknown as Theme)
    }
  }, [type])

  return theme
}

function useSelectedTheme(fn: any, type: 'light' | 'dark' = 'light') {
  const theme = useTheme(type)
  const SelectedTheme = useMemo(() => fn(theme), [fn, theme])
  return SelectedTheme
}

export default useSelectedTheme
