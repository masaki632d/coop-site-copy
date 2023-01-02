import { css } from '@emotion/react'
import { FC } from 'react'

import { Button } from '@libs/components/Button'
import { Headline } from '@libs/components/Headline'
import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'

const styles = {
  links: css`
    display: flex;
    max-width: 900px;
    margin: ${spacing(10)} auto 0;
    > a:not(:last-of-type) {
      margin-right: ${spacing(2)};
    }
    ${mq['sm']} {
      flex-direction: column;
      margin-top: ${spacing(4)};
      > a:not(:last-of-type) {
        margin-right: 0;
        margin-bottom: ${spacing(2)};
      }
    }
  `,
  section: css`
    :not(:last-of-type) {
      margin-bottom: ${spacing(20)};
      ${mq['sm']} {
        margin-bottom: ${spacing(10)};
      }
    }
  `,
}

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
