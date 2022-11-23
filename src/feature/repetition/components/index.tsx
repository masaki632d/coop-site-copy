import { FC } from 'react'

import { ITEMS } from '@feature/repetition/constants/items'
import styles from '@styles/Home.module.scss'

export const Repetition: FC = () => (
  <div className={styles.grid}>
    {ITEMS.map((item) => (
      <a key={item.href} href={item.href} className={styles.card}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </a>
    ))}
  </div>
)
