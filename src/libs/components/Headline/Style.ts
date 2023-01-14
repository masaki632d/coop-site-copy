import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { typography } from '@styles/typography'

export const styles = {
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
