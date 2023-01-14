import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'

export const styles = {
  button: css`
    color: ${palette.black};
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
  `,
  spVisible: css`
    display: none;
    ${mq['lg']} {
      display: block;
    }
  `,
}
