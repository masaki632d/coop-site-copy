import { FC } from 'react'
import { ReactNode } from 'react'

export interface MainWrapProps {
  children: ReactNode
}

export const MainWrap: FC<MainWrapProps> = ({ children }) => (
  <main className="flex-col items-center justify-center min-h-screen py-2 flex">
    {children}
  </main>
)
