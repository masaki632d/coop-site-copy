import { css } from '@emotion/react'
import Link from 'next/link'
import { FC } from 'react'

import {
  useOpenDispatchContext,
  useOpenStateContext,
} from '@libs/components/Provider'
import { headerHeight } from '@styles/headerHeight'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  nav: css`
    margin-left: auto;
    ${mq['lg']} {
      width: 100%;
      max-height: 0;
      transition: max-height 0.5s ease-in-out;
      background-color: ${palette.black};
      color: ${palette.white};
      overflow: hidden;
      position: absolute;
      top: 56px;
      left: 0;
      z-index: 999;
    }
  `,
  list: css`
    display: flex;
    ${mq['lg']} {
      display: block;
    }
  `,
  link: css`
    display: flex;
    padding: 0 ${spacing(2)};
    line-height: ${headerHeight.default};
    &:hover {
      color: ${palette.red};
      p::after {
        width: 100%;
      }
    }
    ${mq['lg']} {
      padding: 0 ${spacing(3)};
      justify-content: space-between;
      align-items: center;
      line-height: 64px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: ${palette.black};
        height: 1px;
        opacity: 0.4;
        mix-blend-mode: multiply;
      }
      &:hover {
        color: inherit;
        p::after {
          width: 0;
        }
      }
    }
  `,
  linkText: css`
    position: relative;
    transition: all 0.3s ease-in-out;
    ${typography.bold[14]}
    &::after {
      content: '';
      position: absolute;
      bottom: 32px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${palette.red};
      transition: all 0.3s ease-in-out;
    }
  `,
  open: css`
    ${mq['lg']} {
      max-height: 394px;
    }
  `,
  spVisible: css`
    display: none;
    ${mq['lg']} {
      display: block;
    }
  `,
  linkIcon: css`
    vertical-align: middle;
    ${typography.normal[16]}
  `,
}

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
