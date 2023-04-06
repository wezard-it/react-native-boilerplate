// @refresh reset
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useTheme(fn: any, type: 'light' = 'light') {
  const theme = usePickTheme(type)
  const SelectedTheme = useMemo(() => fn(theme), [fn, theme])
  return SelectedTheme
}

export default useTheme
