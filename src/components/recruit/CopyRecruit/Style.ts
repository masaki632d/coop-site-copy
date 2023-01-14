import { css } from '@emotion/react'

import { mq } from '@styles/mediaQuery'
import { spacing } from '@styles/spacing'

export const styles = {
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
