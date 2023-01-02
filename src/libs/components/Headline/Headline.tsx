import { css } from '@emotion/react'
import { FC } from 'react'

import { mq } from '@styles/mediaQuery'
import { typography } from '@styles/typography'

const styles = {
  headline: css`
    text-align: center;
  `,
  main: css`
    letter-spacing: 0.1em;
    ${typography.bold[36]}
    ${mq.sm} {
      ${typography.bold[20]}
    }
  `,
  sub: css`
    letter-spacing: 0.2em;
    ${typography.bold[16]}
    ${mq.sm} {
      ${typography.bold[12]}
    }
  `,
}

type HeadlineProps = {
  mainText: string
  subText: string
}

export const Headline: FC<HeadlineProps> = ({ mainText, subText }) => (
  <div css={styles.headline}>
    <h2 css={styles.main}>{mainText}</h2>
    <p css={styles.sub}>{subText}</p>
  </div>
)
