import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout/BaseLayout'
import { typography } from '@styles/typography'

export const Message: FC = () => (
  <section css={styles.section}>
    <BaseLayout>
      <div css={styles.message}>
        <h2 css={styles.messageTitle}>
          メッセージ
          <br />
          タイトル
        </h2>

        <p css={styles.messageText}>
          メッセージテキスト
          <br />
          メッセージテキスト
          <br />
          メッセージテキスト
          <br />
          メッセージテキスト
          <br />
          メッセージテキスト
          <br />
          メッセージテキスト
        </p>
      </div>
      <div css={styles.notice}>
        <h3 css={styles.noticeTitle}>
          2023年1月1日
          <br />
          テキストテキスト
          <br />
          テキストテキスト
        </h3>
        <a
          css={styles.link}
          href="https://www.yahoo.co.jp/"
          target="_blank"
          rel="noreferrer"
        >
          詳しくはこちら
          <span className="material-icons" css={typography.normal[16]}>
            open_in_new
          </span>
        </a>
      </div>
    </BaseLayout>
  </section>
)
