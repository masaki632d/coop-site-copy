import { css } from '@emotion/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { companyName } from '@libs/constants/common'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  footer: css`
    background-color: ${palette.lightGrey};
  `,
  footerInner: css`
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: ${spacing(9)} ${spacing(3)};
    ${typography.normal[14]};
    ${mq['lg']} {
      ${typography.normal[12]};
    }
    ${mq['sm']} {
      flex-flow: column-reverse;
      padding: ${spacing(3)};
    }
  `,
  companyName: css`
    margin-bottom: ${spacing(4)};
    ${mq['sm']} {
      margin-bottom: ${spacing(2)};
    }
  `,
  jpx: css`
    display: flex;
  `,
  jpxLogo: css`
    margin-right: ${spacing(2)};
    flex-shrink: 0;
    ${mq['sm']} {
      margin-right: ${spacing(1)};
    }
  `,
  listWrap: css`
    display: flex;
    ${mq['lg']} {
      ${typography.normal[12]};
    }
    ${mq['sm']} {
      margin-bottom: ${spacing(2)};
    }
  `,
  linkList: css`
    margin-left: ${spacing(10)};
    ${mq['sm']} {
      margin-left: 0;
      margin-right: ${spacing(4)};
    }
    li {
      margin-bottom: ${spacing(2)};
    }
  `,
  link: css`
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: ${palette.black};
      transition: all 0.3s ease-in-out;
      ${mq['lg']} {
        bottom: -4px;
      }
    }
    &:hover::after {
      width: 100%;
    }
  `,
  copyright: css`
    ${typography.normal[12]};
    background-color: ${palette.red};
    color: ${palette.white};
    text-align: center;
    padding: ${spacing(1)} 0;
  `,
  linkIcon: css`
    vertical-align: middle;
    ${typography.normal[16]}
  `,
}

export const Footer: FC = () => (
  <footer css={styles.footer}>
    <div css={styles.footerInner}>
      <div>
        <p css={styles.companyName}>
          <Link href="/" passHref>
            <a css={styles.link}>{companyName}</a>
          </Link>
        </p>
        <div css={styles.jpx}>
          <p css={styles.jpxLogo}>
            <Image
              src="/images/common/logo_jpx.svg"
              alt="JPX 東証プライム市場上場"
              width={71}
              height={80}
            />
          </p>
          <p>
            {companyName}は、
            <br />
            {companyName}(東証プライム市場上場)のグループ企業です。
            <br />
            [証券コード：0000]
          </p>
        </div>
      </div>
      <div css={styles.listWrap}>
        <ul css={styles.linkList}>
          <li>
            <Link href="/vision" passHref>
              <a css={styles.link}>大切にしていること</a>
            </Link>
          </li>
          <li>
            <Link href="/corporate" passHref>
              <a css={styles.link}>企業情報</a>
            </Link>
          </li>
          <li>
            <Link href="/service" passHref>
              <a css={styles.link}>事業紹介</a>
            </Link>
          </li>
          <li>
            <Link href="/news" passHref>
              <a css={styles.link}>ニュース</a>
            </Link>
          </li>
          <li>
            <Link href="/recruit" passHref>
              <a css={styles.link}>採用情報</a>
            </Link>
          </li>
        </ul>

        <ul css={styles.linkList}>
          <li>
            <Link href="/privacy" passHref>
              <a css={styles.link}>プライバシーポリシー</a>
            </Link>
          </li>
          <li>
            <Link href="/sitepolicy" passHref>
              <a css={styles.link}>サイトポリシー</a>
            </Link>
          </li>
          <li>
            <a
              href="https://www.yahoo.co.jp/"
              target="_blank"
              rel="noopener noreferrer"
              css={styles.link}
            >
              セキュリティポリシー
              <span className="material-icons" css={styles.linkIcon}>
                open_in_new
              </span>
            </a>
          </li>
          <li>
            <Link href="/agreement" passHref>
              <a css={styles.link}>個人関連情報の受領と利用について</a>
            </Link>
          </li>
          <li>
            <a
              css={styles.link}
              href="https://www.yahoo.co.jp/"
              target="_brank"
              rel="noopener noreferrer"
            >
              お問い合わせ
              <span className="material-icons" css={styles.linkIcon}>
                open_in_new
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <p css={styles.copyright}>© 2023 Corporate Copy Inc.</p>
  </footer>
)
