import Link from 'next/link'
import { FC } from 'react'

import { styles } from './Style'

import {
  useOpenDispatchContext,
  useOpenStateContext,
} from '@libs/components/Provider'

export const HeaderMenu: FC = () => {
  const isOpen = useOpenStateContext()
  const { close } = useOpenDispatchContext()

  return (
    <nav css={[styles.nav, isOpen && styles.open]} onClick={() => close()}>
      <ul css={styles.list}>
        <li>
          <Link href="/vision" passHref>
            <a css={styles.link}>
              <p css={styles.linkText}>大切にしていること</p>
              <span className="material-icons" css={styles.spVisible}>
                chevron_right
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/corporate" passHref>
            <a css={styles.link}>
              <p css={styles.linkText}>企業情報</p>
              <span className="material-icons" css={styles.spVisible}>
                chevron_right
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/service" passHref>
            <a css={styles.link}>
              <p css={styles.linkText}>事業紹介</p>
              <span className="material-icons" css={styles.spVisible}>
                chevron_right
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/news" passHref>
            <a css={styles.link}>
              <p css={styles.linkText}>ニュース</p>
              <span className="material-icons" css={styles.spVisible}>
                chevron_right
              </span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/recruit" passHref>
            <a css={styles.link}>
              <p css={styles.linkText}>採用情報</p>
              <span className="material-icons" css={styles.spVisible}>
                chevron_right
              </span>
            </a>
          </Link>
        </li>
        <li>
          <a
            css={styles.link}
            href="https://www.yahoo.co.jp/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p css={styles.linkText}>
              お問い合わせ
              <span className="material-icons" css={styles.linkIcon}>
                open_in_new
              </span>
            </p>
            <span className="material-icons" css={styles.spVisible}>
              chevron_right
            </span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
