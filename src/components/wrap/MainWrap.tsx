import { FC } from 'react'
import { ReactNode } from 'react'

import styles from '@styles/Home.module.css'

export interface MainWrapProps {
  children: ReactNode
}

export const MainWrap: FC<MainWrapProps> = ({ children }) => (
  <main className={styles.main}>{children}</main>
)
