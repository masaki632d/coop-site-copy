import { FC } from 'react'
import { ReactNode } from 'react'

export interface MainWrapProps {
  children: ReactNode
}

export const MainWrap: FC<MainWrapProps> = ({ children }) => (
  <main className="flex min-h-screen flex-col items-center justify-center py-2">
    {children}
  </main>
)
