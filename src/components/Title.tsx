import { FC } from 'react'

import styles from '@styles/Home.module.scss'

export const Title: FC = () => (
  <h1 className={styles.title}>
    Welcome to <a href="https://nextjs.org">Next.js!</a>
  </h1>
)
