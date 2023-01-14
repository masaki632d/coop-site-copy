import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import { styles } from './Style'

import { companyName } from '@libs/constants/common'

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
