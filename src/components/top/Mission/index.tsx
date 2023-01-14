import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'

export const Mission: FC = () => (
  <>
    <div css={styles.back} />
    <section css={styles.section}>
      <BaseLayout>
        <h2 css={styles.mission}>
          メッセージ
          <br />
          タイトル
        </h2>
        <p css={styles.text}>
          メッセージテキストメッセージテキスト
          <br css={styles.sp} />
          メッセージテキストメッセージテキスト
          <br />
          メッセージテキストメッセージテキスト
          <br css={styles.sp} />
          メッセージテキストメッセージテキスト
        </p>
      </BaseLayout>
    </section>
  </>
)
