import { FC } from 'react'

import { styles } from './Style'

import { BaseLayout } from '@libs/components/BaseLayout'
import { Headline } from '@libs/components/Headline/Headline'

export const Philosophy: FC = () => (
  <>
    <section css={styles.philosophyBg}>
      <BaseLayout>
        <Headline mainText="経営理念" subText="PHILOSOPHY" />
        <div css={styles.philosophy}>
          <p css={styles.philosophyText}>
            経営理念
            <br css={styles.spVisible} />
            テキスト
          </p>
        </div>
      </BaseLayout>
    </section>

    <BaseLayout>
      <section css={styles.people}>
        <h3 css={styles.peopleTitle}>“People”</h3>
        <p css={styles.peopleText}>
          テキストテキスト
          <br />
          テキストテキスト
        </p>
      </section>
    </BaseLayout>
  </>
)
