import Image from 'next/image'
import { FC } from 'react'

import vercelImage from '@public_images/vercel.svg'
import styles from '@styles/Home.module.scss'

export const Footer: FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{' '}
      <span className={styles.logo}>
        <Image src={vercelImage} width={72} height={16} alt="Vercel Logo" />
      </span>
    </a>
  </footer>
)
