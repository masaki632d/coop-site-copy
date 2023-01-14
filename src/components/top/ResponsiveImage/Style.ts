import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'

export const styles = {
  pc: css`
    ${mq.md} {
      display: none;
    }
  `,
  sp: css`
    display: none;
    ${mq.md} {
      display: block;
    }
  `,
}
