import { css } from '@emotion/react'

import { headerHeight } from '@styles/headerHeight'
import { mq } from '@styles/mediaQuery'

export const styles = {
  headerSpace: css`
    height: ${headerHeight.default};
    ${mq.lg} {
      height: ${headerHeight.small};
    }
  `,
}
