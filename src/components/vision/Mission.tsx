import { css } from '@emotion/react'
import { FC } from 'react'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'
import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

const styles = {
  mission: css`
    max-width: 700px;
    margin: ${spacing(10)} auto 0;
    ${mq['sm']} {
      margin-top: ${spacing(4)};
      width: 90%;
    }
  `,
  title: css`
    margin-bottom: ${spacing(5)};
    ${typography.bold[36]}
    letter-spacing: 0.12rem;
    ${mq['sm']} {
      ${typography.bold[24]}
      letter-spacing: 0.1rem;
      margin-bottom: ${spacing(3)};
    }
  `,
  text: css`
    line-height: 2.2rem;
    letter-spacing: 0.1rem;
    :not(:last-of-type) {
      margin-bottom: ${spacing(4)};
    }
    ${mq['sm']} {
      ${typography.normal[12]}
      line-height: 2em;
      :not(:last-of-type) {
        margin-bottom: ${spacing(3)};
      }
    }
  `,
  spVisible: css`
    display: none;
    ${mq['sm']} {
      display: block;
    }
  `,
}

export const Mission: FC = () => (
  <BaseLayout>
    <Headline mainText="私たちの使命" subText="MISSION" />
    <div css={styles.mission}>
      <h3 css={styles.title}>
        メッセージタイトル
        <br />
        メッセージタイトル
      </h3>

      <p css={styles.text}>
        メッセージテキスト
        <br css={styles.spVisible} />
        メッセージテキスト
        <br />
        メッセージテキスト
        <br css={styles.spVisible} />
        メッセージテキスト
      </p>
      <p css={styles.text}>
        メッセージテキスト
        <br css={styles.spVisible} />
        メッセージテキスト
        <br />
        メッセージテキスト
        <br css={styles.spVisible} />
        メッセージテキスト
      </p>
    </div>
  </BaseLayout>
)
