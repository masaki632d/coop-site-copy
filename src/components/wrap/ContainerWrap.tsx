import { FC } from 'react'
import { ReactNode } from 'react'

export interface ContainerWrapProps {
  children: ReactNode
}

export const ContainerWrap: FC<ContainerWrapProps> = ({ children }) => (
  <div className="px-8 py-0">{children}</div>
)
