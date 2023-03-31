/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from 'react'
import light from 'providers/theme'

function usePickTheme(type: 'light' = 'light'): Theme {
  const [theme, setTheme] = useState<Theme>(light)

  useEffect(() => {
    if (type === 'light') {
      setTheme(light as unknown as Theme)
    }
    // TODO:  Add new themes if needed
  }, [type])

  return theme
}

function useTheme(fn: any, type: 'light' = 'light') {
  const theme = usePickTheme(type)
  const SelectedTheme = useMemo(() => fn(theme), [fn, theme])
  return SelectedTheme
}

export default useTheme
