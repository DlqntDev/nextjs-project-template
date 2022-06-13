import { Breakpoints } from 'config'
import useMediaQuery from 'hooks/useMediaQuery'
import { useState, createContext, useContext, useEffect } from 'react'

type TypeMediaQueryContext = {
  screen: 'desktop' | 'tablet' | 'mobile'
}

export const MediaQueryContext = createContext<TypeMediaQueryContext>(undefined)

const MediaQueryProvider = ({ children }) => {
  const isTablet = useMediaQuery(Breakpoints.tablet)
  const isMobile = useMediaQuery(Breakpoints.mobile)
  const [screen, setScreen] =
    useState<TypeMediaQueryContext['screen']>('desktop')

  useEffect(() => {
    const s = isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop'
    setScreen(s)
  }, [isTablet, isMobile])

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement
    const fSize =
      screen === 'mobile' ? '12px' : screen === 'tablet' ? '13px' : '16px'

    root.style.fontSize = fSize
  }, [screen])

  return (
    <MediaQueryContext.Provider
      value={{
        screen,
      }}
    >
      {children}
    </MediaQueryContext.Provider>
  )
}

export const useMediaQueryContext = () => {
  return useContext(MediaQueryContext)
}

export default MediaQueryProvider
