import React from 'react'

const ProviderContext = React.createContext(undefined)

export const useProviderContext = () => {
  const context = React.useContext(ProviderContext)
  if (context === undefined) {
    throw new Error('ProviderContext must be used within a Provider')
  }
  return context
}

export const Provider = ({ children, value }) => {
  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  )
}
