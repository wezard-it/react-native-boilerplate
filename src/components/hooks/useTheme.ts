import { useState, useEffect } from 'react'
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

export default useTheme
