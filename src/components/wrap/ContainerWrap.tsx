import { FC } from 'react'

import { ReactNode } from 'react'
import styles from '@styles/Home.module.css'

export interface ContainerWrapProps {
  children: ReactNode
}

export const ContainerWrap: FC<ContainerWrapProps> = ({ children }) => (
  <div className={styles.container}>{children}</div>
)
