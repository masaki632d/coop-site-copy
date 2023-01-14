import { FC } from 'react'

import { styles } from './Style'

import { Button } from '@libs/components/Button'
import { Headline } from '@libs/components/Headline'

export const CopyRecruit: FC = () => (
  <section css={styles.section}>
    <Headline mainText="採用" subText="RECRUIT" />
    <div css={styles.links}>
      <Button
        as="anchor"
        href="https://www.yahoo.co.jp/"
        label="中途採用"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Button
        as="anchor"
        href="https://www.yahoo.co.jp/"
        label="新卒採用"
        target="_blank"
        rel="noopener noreferrer"
      />
      <Button
        as="anchor"
        href="https://www.yahoo.co.jp/"
        label="インターン"
        target="_blank"
        rel="noopener noreferrer"
      />
    </div>
  </section>
)
