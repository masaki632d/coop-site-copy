import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { typography } from '@styles/typography'

export const styles = {
  header: css`
    height: 300px;
    position: relative;
    ${mq['sm']} {
      height: 200px;
    }
    &::after {
      content: '';
      background-color: rgba(51, 51, 51, 0.5);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `,
  h1: css`
    color: ${palette.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    letter-spacing: 0.1em;
    z-index: 1;
    width: 90%;
    text-align: center;
    ${typography.bold[48]}
    ${mq['sm']} {
      ${typography.bold[30]}
    }
  `,
  pc: css`
    ${mq['sm']} {
      display: none;
    }
  `,
  sp: css`
    display: none;
    ${mq['sm']} {
      display: block;
    }
  `,
}
