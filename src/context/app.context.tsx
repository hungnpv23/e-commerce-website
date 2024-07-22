import React, { createContext, useState } from 'react'
import { User } from 'src/types/user.type'
import { getAccessTokenFromLS, getProfileFormLS } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
  setProfile: React.Dispatch<React.SetStateAction<User | null>>
}

const initalAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setAuthenticated: () => null,
  profile: getProfileFormLS(),
  setProfile: () => null
}

export const AppContext = createContext<AppContextInterface>(initalAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(initalAppContext.isAuthenticated)
  const [profile, setProfile] = useState<User | null>(initalAppContext.profile)

  return (
    <AppContext.Provider value={{ isAuthenticated, setAuthenticated, profile, setProfile }}>
      {children}
    </AppContext.Provider>
  )
}
