import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  h1: css`
    text-align: center;
    ${typography.bold[36]}
    ${mq['sm']} {
      ${typography.bold[20]}
    }
  `,
  text: css`
    text-align: center;
    margin-top: ${spacing(5)};
    ${typography.normal[16]}
    ${mq['sm']} {
      ${typography.normal[12]}
    }
  `,
  button: css`
    max-width: 600px;
    margin: ${spacing(6)} auto 0;
  `,
  sp: css`
    display: none;
    ${mq['sm']} {
      display: block;
    }
  `,
}
