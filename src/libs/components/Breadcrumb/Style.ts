import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { palette } from '@styles/palette'
import { spacing } from '@styles/spacing'
import { typography } from '@styles/typography'

export const styles = {
  list: css`
    max-width: 1200px;
    margin: auto;
    display: flex;
    ${mq['sm']} {
      padding: ${spacing(1)} ${spacing(3)};
    }
  `,
  listLink: css`
    ${typography.normal[14]}
    :first-child {
      margin-right: ${spacing(1)};
    }
    :not(:first-child) {
      margin-left: ${spacing(1)};
    }
    &:hover {
      color: ${palette.grey};
    }
  `,
}
