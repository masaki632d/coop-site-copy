import { FC } from 'react'
import { ReactNode } from 'react'

export interface MainWrapProps {
  children: ReactNode
}

export const MainWrap: FC<MainWrapProps> = ({ children }) => (
  <main className="flex flex-col justify-center min-h-screen py-2 items-center">
    {children}
  </main>
)
