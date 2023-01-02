import { css } from '@emotion/react'
import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout/BaseLayout'
import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  section: css`
    background-color: ${palette.white};
  `,
  message: css`
    display: flex;
    align-items: center;
    max-width: 90%;
    margin: 0 auto ${spacing(11)};
    ${mq.lg} {
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: ${spacing(4)};
    }
  `,
  messageTitle: css`
    font-size: 90px;
    font-weight: 600;
    letter-spacing: 0.03em;
    width: 60%;
    flex-shrink: 0;
    ${mq.lg} {
      font-size: 82px;
      margin-bottom: ${spacing(2)};
      width: 100%;
    }
    ${mq.sm} {
      ${typography.bold[36]}
    }
  `,
  messageText: css`
    letter-spacing: 0.01em;
    line-height: 1.94;
    ${typography.bold[24]}
    ${mq.sm} {
      ${typography.bold[14]}
    }
  `,
  notice: css`
    text-align: center;
    max-width: 90%;
    margin: auto;
    ${mq.lg} {
      text-align: left;
      ${typography.normal[12]}
    }
  `,
  noticeTitle: css`
    margin-bottom: ${spacing(4)};
    ${mq.sm} {
      margin-bottom: ${spacing(2)};
      ${typography.normal[12]}
    }
  `,
  link: css`
    display: inline-block;
    align-items: center;
    ${typography.bold[14]}
    ${mq.sm} {
      ${typography.bold[12]}
    }
  `,
  sp: css`
    display: none;
    ${mq.sm} {
      display: block;
    }
  `,
}

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
