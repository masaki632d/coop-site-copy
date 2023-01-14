import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'

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
